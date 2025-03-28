import Link from 'next/link';
import { getSortedPostsData } from '@/lib/posts';

export default function ContentPage() {
    const allPosts = getSortedPostsData();

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">コンテンツ一覧</h1>
            {allPosts.length === 0 ? (
                <div className="text-center text-gray-500">
                    <p>まだコンテンツがありません。</p>
                    <p>新しい記事を追加してください。</p>
                </div>
            ) : (
                <div className="space-y-4">
                    {allPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
                        >
                            <Link
                                href={`/content/${post.id}`}
                                className="text-xl font-semibold text-blue-600 hover:underline"
                            >
                                {post.title}
                            </Link>
                            <p className="text-gray-500 text-sm">{post.date}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}