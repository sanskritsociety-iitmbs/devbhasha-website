import Link from 'next/link'
import Date from '../../components/Date'
import { siteTitle } from '../layout'
import styles from "./[id]/posts.module.scss"
import { getSortedPostsData } from '../../lib/posts'

export const metadata = {
  title: siteTitle,
}

export default function Home() {
  const allPostsData = getSortedPostsData()

  return (
    <>
      <section className={styles.postList}>
        <h1>Posts from Team Dev Bhasha</h1>
        <ul>
          {allPostsData.map(({ id, date, title, author }) => (
            <li key={id}>
              <div>
                <Link href={`/posts/${id}`}>{title}</Link>
              </div>
              {/* <br /> */}
              <small>
                <Date dateString={date} />
                <p>⟠</p>
                <p>{author}</p>
              </small>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}