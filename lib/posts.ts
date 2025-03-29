import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const contentDirectory = path.join(process.cwd(), 'content');

export function getSortedPostsData() {
    // 检查目录是否存在
    if (!fs.existsSync(contentDirectory)) {
        console.warn(`Content directory not found: ${contentDirectory}`);
        return [];
    }

    // 只获取 .md 文件
    const fileNames = fs.readdirSync(contentDirectory)
        .filter(fileName => fileName.endsWith('.md'));

    const allPostsData = fileNames.map(fileName => {
        // 移除文件名中的 .md
        const id = fileName.replace(/\.md$/, '');

        // 读取 markdown 文件
        const fullPath = path.join(contentDirectory, fileName);
        const fileContents = fs.readFileSync(fullPath, 'utf8');

        // 使用 gray-matter 解析元数据
        const matterResult = matter(fileContents);

        // 组合数据
        return {
            id,
            ...(matterResult.data as { title: string, date: string })
        };
    });

    // 按日期排序
    return allPostsData.sort((a, b) => {
        if (a.date < b.date) {
            return 1;
        } else {
            return -1;
        }
    });
}

export async function getPostData(id: string) {
    const fullPath = path.join(contentDirectory, `${id}.md`);

    // 检查文件是否存在
    if (!fs.existsSync(fullPath)) {
        throw new Error(`Post file not found: ${fullPath}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // 使用 gray-matter 解析元数据
    const matterResult = matter(fileContents);

    // 使用 remark 转换 markdown 为 HTML
    // 修复 TypeScript 类型问题
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // 组合数据
    return {
        id,
        contentHtml,
        ...(matterResult.data as { title: string, date: string })
    };
}

// 添加导出获取所有 post ID 的函数，用于生成静态路径
export async function getAllPostIds() {
    // 检查目录是否存在
    if (!fs.existsSync(contentDirectory)) {
        console.warn(`Content directory not found: ${contentDirectory}`);
        return [];
    }

    const fileNames = fs.readdirSync(contentDirectory)
        .filter(fileName => fileName.endsWith('.md'));

    return fileNames.map(fileName => {
        return {
            id: fileName.replace(/\.md$/, '')
        };
    });
}