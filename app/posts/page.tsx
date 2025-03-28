// app/posts/page.tsx
import Link from "next/link";

const posts = {
    "first-post": { title: "最初の投稿" },
    "second-post": { title: "2番目の投稿" },
};

export default function PostsPage() {
    return (
        <div>
            <h1 className="text-3xl font-bold mb-4">ブログ投稿一覧</h1>
            {Object.entries(posts).map(([slug, post]) => (
                <div key={slug} className="mb-4">
                    <Link href={`/posts/${slug}`} className="text-blue-500 hover:underline">
                        {post.title}
                    </Link>
                </div>
            ))}
        </div>
    );
}