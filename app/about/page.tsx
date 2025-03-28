import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                    About Me
                </h1>

                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className="text-center md:text-left">
                        <Image
                            src="/next.svg"
                            alt="Profile"
                            width={250}
                            height={250}
                            className="rounded-full mx-auto md:mx-0 mb-6 shadow-lg"
                        />
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                            こんにちは！私について
                        </h2>
                        <p className="text-gray-600 mb-4">
                            テクノロジーと web 開発に情熱を注ぐエンジニアです。Next.js、React、そして最新のウェブ技術に興味を持っています。
                        </p>
                        <p className="text-gray-600 mb-6">
                            このブログでは、私の学びや経験、テクノロジーに関する洞察を共有しています。継続的な学習と成長を大切にしています。
                        </p>
                    </div>
                </div>

                <div className="mt-12 bg-white shadow-md rounded-lg p-8">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
                        スキルとテクノロジー
                    </h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <h4 className="font-bold text-gray-700 mb-2">フロントエンド</h4>
                            <ul className="text-gray-600">
                                <li>React</li>
                                <li>Vue</li>
                                <li>Next.js</li>
                                <li>Nuxt.js</li>
                                <li>TypeScript</li>
                                <li>Tailwind CSS</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <h4 className="font-bold text-gray-700 mb-2">バックエンド</h4>
                            <ul className="text-gray-600">
                                <li>Node.js</li>
                                <li>Java</li>
                                <li>Go</li>
                                <li>Express</li>
                                <li>MongoDB</li>
                                <li>PostgreSQL</li>
                                <li>MySQL</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <h4 className="font-bold text-gray-700 mb-2">フレームワーク</h4>
                            <ul className="text-gray-600">
                                <li>Spring</li>
                                <li>SpringBoot</li>
                                <li>SpringCloud</li>
                                <li>Mybatis</li>
                            </ul>
                        </div>
                        <div className="bg-gray-50 p-4 rounded-lg text-center">
                            <h4 className="font-bold text-gray-700 mb-2">ツールと環境</h4>
                            <ul className="text-gray-600">
                                <li>Git</li>
                                <li>Docker</li>
                                <li>IntelliJ IDEA</li>
                                <li>VS Code</li>
                                <li>Vercel</li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="mt-12 text-center">
                    <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                        連絡先
                    </h3>
                    <div className="flex justify-center space-x-4">
                        <Link
                            href="https://github.com/VerneZhong"
                            target="_blank"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            GitHub
                        </Link>
                        <Link
                            href="https://x.com/syougakuhin"
                            target="_blank"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Twitter
                        </Link>
                        <Link
                            href="mailto:verne.zhong@email.com"
                            className="text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            Email
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}