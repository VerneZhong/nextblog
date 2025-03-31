// app/posts/[slug]/page.tsx
import { notFound } from "next/navigation";
import FirebaseComments from '@/components/FirebaseComments';
import { Suspense } from 'react';

const posts = {
    "first-post": { title: "最初の投稿", content: "This is my first blog post." },
    "second-post": { title: "2番目の投稿", content: "This is my second blog post." },
};

interface PostPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export default async function Post({ params }: PostPageProps) {
    const { slug } = await params;
    const post = posts[slug];

    if (!post) {
        notFound();
    }

    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
            <p>{post.content}</p>

            {/* 客户端组件需要用Suspense包裹 */}
            <Suspense fallback={<div>加载评论...</div>}>
                <FirebaseComments postId={slug} />
            </Suspense>
        </div>
    );
}