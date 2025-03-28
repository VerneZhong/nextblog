// app/posts/page.tsx
import Link from "next/link";

const posts = [
    { slug: "first-post", title: "最初の投稿", summary: "My first blog post." },
    { slug: "second-post", title: "2番目の投稿", summary: "Learning Next.js." },
];

export default function Posts() {
    return (
        <div>
            <h1 className="text-4xl font-bold mb-4">ブログ投稿</h1>
            <ul>
                {posts.map((post) => (
                    <li key={post.slug} className="mb-2">
                        <Link href={`/posts/${post.slug}`} className="text-blue-500">
                            {post.title}
                        </Link>
                        <p className="text-gray-600">{post.summary}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}