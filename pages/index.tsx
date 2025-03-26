import Link from "next/link";

export default function Blog() {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold">NextBlog</h1>
            <p className="text-gray-600">モダンなNext.jsブログ</p>
            <Link href="/posts/first-post" className="text-blue-500">
                最初の記事へ
            </Link>
        </div>
    );
}