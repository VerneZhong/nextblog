// app/posts/[slug].tsx
import { notFound } from "next/navigation";

const posts = {
    "first-post": { title: "最初の投稿", content: "This is my first blog post." },
    "second-post": { title: "2番目の投稿", content: "This is my second blog post." },
};

export default function Post({ params }: { params: { slug: string } }) {
    const post = posts[params.slug];

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