import Link from 'next/link'

export default function FirstPost() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">最初の投稿</h1>
            <p>これは Next.js で作成した最初のブログ記事です。</p>
            <h2>
                <Link href="/"　className="text-blue-500">
                    ホームページに戻る
                </Link>
            </h2>
        </div>
    );
}