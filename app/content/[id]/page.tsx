// app/content/[id]/page.tsx
import { getPostData, getAllPostIds } from '@/lib/posts';
import { notFound } from 'next/navigation';

// 生成静态路径
export async function generateStaticParams() {
    const paths = await getAllPostIds();
    return paths.map(path => ({
        id: path.id
    }));
}

// 定义接口来明确参数类型
interface PostPageProps {
    params: {
        id: string;
    };
}

export default async function PostPage(props: PostPageProps) {
    // 使用完整的 props 参数
    const postData = await getPostData(props.params.id);

    if (!postData) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="prose lg:prose-xl">
                <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
                <p className="text-gray-500 mb-6">{postData.date}</p>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    className="markdown-content"
                />
            </article>
        </div>
    );
}