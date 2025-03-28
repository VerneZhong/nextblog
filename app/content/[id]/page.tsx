import { getPostData } from '@/lib/posts';

export default async function PostPage({ params }: { params: { id: string } }) {
    const postData = await getPostData(params.id);

    return (
        <div className="container mx-auto px-4 py-8">
            <article className="prose lg:prose-xl">
                <h1 className="text-4xl font-bold mb-4">{postData.title}</h1>
                <p className="text-gray-500 mb-6">{postData.date}</p>
                <div
                    dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    className="markdown-content"
                />
            </article>
        </div>
    );
}