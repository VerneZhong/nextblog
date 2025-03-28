import Link from "next/link";
import Image from "next/image";

export default function Blog() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <h1 className="text-4xl font-bold text-gray-800 mb-4">
                        NextBlogへようこそ
                    </h1>
                    <p className="text-xl text-gray-600 mb-6">
                        最新のテクノロジーとクリエイティブな記事で、あなたの知識の世界を広げましょう。
                    </p>
                    <div className="flex space-x-4">
                        <Link
                            href="/posts"
                            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                        >
                            記事を読む
                        </Link>
                        <Link
                            href="/about"
                            className="border border-blue-600 text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                            About
                        </Link>
                    </div>
                </div>
                <div className="hidden md:block">
                    <Image
                        src="/next.svg"
                        alt="Next.js Logo"
                        width={400}
                        height={300}
                        className="mx-auto animate-pulse"
                    />
                </div>
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        最新記事
                    </h2>
                    <ul className="space-y-2">
                        <li>
                            <Link
                                href="/posts/first-post"
                                className="text-blue-600 hover:underline"
                            >
                                最初の投稿
                            </Link>
                        </li>
                        <li>
                            <Link
                                href="/posts/second-post"
                                className="text-blue-600 hover:underline"
                            >
                                2番目の投稿
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        カテゴリ
                    </h2>
                    <ul className="space-y-2">
                        <li className="text-gray-700">テクノロジー</li>
                        <li className="text-gray-700">プログラミング</li>
                        <li className="text-gray-700">ウェブ開発</li>
                    </ul>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        お知らせ
                    </h2>
                    <p className="text-gray-600">
                        このブログは継続的に更新され、最新のテクノロジートレンドをお届けします。
                    </p>
                </div>
            </div>
        </div>
    );
}