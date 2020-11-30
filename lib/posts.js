import { readFileSync, readdirSync } from "fs"
import html from "remark-html"
import matter from "gray-matter"
import path from "path"
import remark from "remark"

const postsDirectory = path.join(process.cwd(), "posts")
const newsDirectory = path.join(process.cwd(), "news")

export const getAllPostsIds = async (posts = false) => {
    const fileNames = readdirSync(posts ? newsDirectory : postsDirectory)

    return fileNames.map(fileName => {
        return {
            params: {
                id: fileName.replace(/\.md$/, "")
            }
        }
    })
}

export const getPostData = async (id, posts = false) => {
    const fullPath = path.join(posts ? newsDirectory : postsDirectory, `${id}.md`)
    const fileContents = readFileSync(fullPath, "utf-8")
    const matterResult = matter(fileContents)
    const processedContent = await remark().use(html).process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}

export const getSortedPostsData = (posts = false) => {
    const fileNames = readdirSync(posts ? newsDirectory : postsDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md$/, "")
        const fullPath = path.join(posts ? newsDirectory : postsDirectory, fileName)
        const fileContents = readFileSync(fullPath, "utf-8")
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort((a, b) => a.date < b.date ? 1 : -1)
}