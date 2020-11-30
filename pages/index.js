import Head from "next/head"
import Link from "next/link"
import Layout from "../components/layout"
import { getSortedPostsData } from "../lib/posts"
import Date from "../utils/date"

import style from "../styles/home.module.sass"

export default function Home({ keywords, news, posts }) {
    return (
        <Layout>
            <Head>
                <title>Blog - Home</title>
            </Head>

            <section>
                {
                    keywords && <aside className={style.keywords_wrapper}>
                        {keywords.map((keyword, index) => (
                            <div className={style.keyword} key={`keyword-${index}`}>{keyword}</div>
                        ))}
                    </aside>
                }
                {/* <div className={style.post_wrapper}>
                    {
                        posts
                            ? posts.map(({ id, date, thumbnail, title }) => (
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

                <div className="news-wrapper">
                    {
                        news
                            ? news.map(({ id, date, thumbnail, title }) => (
                                <Link href={`/news/${id}`} key={id}>
                                    <a>
                                        <div className={`lx-card ${style.news}`}>
                                            <div className="thumbnail">
                                                <img src={`/news${thumbnail}`} alt="" />
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
                                <h2>No news to be exhibited.</h2>
                            </div>
                    }
                </div> */}
            </section>
        </Layout>
    )
}

export const getStaticProps = ({ params }) => {
    const posts = getSortedPostsData()
    const news = getSortedPostsData(true)

    let keywords = []

    posts.forEach(post => post.keywords.split(",").forEach(key => {
        if (!keywords.includes(key))
            keywords.push(key)
    }))

    return {
        props: {
            keywords,
            news,
            posts
        }
    }
}