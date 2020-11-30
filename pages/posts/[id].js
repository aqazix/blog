import Head from "next/head"
import Layout from "../../components/layout"
import Date from "../../utils/date"
import { getAllPostsIds, getPostData } from "../../lib/posts"

const Post = ({ data }) => {
    return <Layout>
        <Head>
            <title>{data.title}</title>
        </Head>

        <article>
            <h1>{data.title}</h1>

            <Date dateString={data.date} />

            <div dangerouslySetInnerHTML={{ __html: data.contentHtml }} />
        </article>
    </Layout>
}

export const getStaticPaths = async () => {
    const paths = await getAllPostsIds()

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const data = await getPostData(params.id)

    return {
        props: {
            data
        }
    }
}

export default Post