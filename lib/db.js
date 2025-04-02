import prisma from './prisma'

export async function getAllPosts() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        orderBy: { date: 'desc' },
        include: { tags: true }
    })
    return posts
}

export async function getPostBySlug(slug) {
    const post = await prisma.post.findUnique({
        where: { slug },
        include: { tags: true }
    })
    return post
}

export async function getAllPostSlugs() {
    const posts = await prisma.post.findMany({
        where: { published: true },
        select: { slug: true }
    })
    return posts.map(post => post.slug)
}

export async function getAllTags() {
    const tags = await prisma.tag.findMany({
        include: {
            posts: {
                where: { published: true }
            }
        }
    })
    return tags
}

export async function getPostsByTag(tagName) {
    const posts = await prisma.post.findMany({
        where: {
            published: true,
            tags: {
                some: {
                    name: tagName
                }
            }
        },
        orderBy: { date: 'desc' },
        include: { tags: true }
    })
    return posts
}