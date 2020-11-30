import Head from "next/head"
import Link from "next/link"
import Layout from "../../components/layout"
import { getSortedPostsData } from "../../lib/posts"
import Date from "../../utils/date"

import style from "../../styles/home.module.sass"

const News = ({ data }) => {
    return <Layout>
        <Head>
            <title>News</title>
        </Head>

        <section>
            <div className="news-wrapper">
                {
                    data
                        ? data.map(({ id, date, thumbnail, title }) => (
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
            </div>
        </section>
    </Layout>
}

export const getStaticProps = () => {
    const data = getSortedPostsData(true)

    return {
        props: {
            data
        }
    }
}

export default News