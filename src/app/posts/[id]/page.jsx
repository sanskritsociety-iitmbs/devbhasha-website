import Date from "@/components/Date";
import styles from "./posts.module.scss";

import { getAllPostIds, getPostData } from "@/lib/posts";

export async function generateMetadata({ params }) {
  const postData = await getPostData(params.id);

  return {
    title: postData.title,
  };
}

// -< Post >-
export default async function Post({ params }) {
  const postData = await getPostData(params.id);

  return (
    <div className={styles.main}>
      {/* Post Title */}
      <div className={styles.heading}>
        <h1>{postData.title}</h1>
        <div className={styles.secHead}>
          <Date dateString={postData.date} />
          <p>⟠</p>
          <p>{postData.author}</p>
        </div>
      </div>

      {/* Post Content */}
      <div
        className={styles.content}
        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
      />
    </div>
  );
}

/* TIP: dangerouslySetInnerHTML is a React feature that allows you to render HTML that comes from an external source as if it were regular JSX. It replaces innerHTML used by Javascript.
Here we are rendering the HTML that comes from the markdown file thanks to remark (remark converted the markdown into HTML)
*/
