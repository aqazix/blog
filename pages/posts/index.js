import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"
import { getSortedPostsData } from "../../lib/posts"
import Date from "../../utils/date"

import style from "../../styles/home.module.sass"

const Posts = ({ data }) => {
    return <Layout>
        <Head>
            <title>Posts</title>
        </Head>

        <section>
            <div className="post-wrapper">
                {
                    data
                        ? data.map(({ id, date, thumbnail, title }) => (
                            <Link href={`/posts/${id}`} key={id}>
                                <a>
                                    <div className={`lx-card ${style.post}`}>
                                        <div className="thumbnail">
                                            <img src={`/posts${thumbnail}`} alt="" />
                                        </div>

                                        <div className="data">
                                            <h1>{title}</h1>

                                            <Date dateString={date} />
                                        </div>
                                    </div>
                                </a>
                            </Link>
                        ))
                        : <div className="error">
                            <h2>No posts to be exhibited.</h2>
                        </div>
                }
            </div>
        </section>
    </Layout>
}

export const getStaticProps = () => {
    const data = getSortedPostsData()

    return {
        props: {
            data
        }
    }
}

export default Posts