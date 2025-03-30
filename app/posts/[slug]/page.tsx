// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";

const posts = {
    "first-post": { title: "最初の投稿", content: "This is my first blog post." },
    "second-post": { title: "2番目の投稿", content: "This is my second blog post." },
};

// 更新接口定义
interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Post({ params }: PostPageProps) {
    // 先await整个params对象
    const { slug } = await params;
    const post = posts[slug];

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p>{post.content}</p>
        </div>
    );
}