"use client";

import { Post } from "@/types/post";
import styles from "./styles.module.scss";

export interface PostItemProps {
  post: Post;
}

const PostItem = ({ post }: PostItemProps) => {
  const handleClick = () => {
    alert(`Content: ${post.body}`);
  };

  return (
    <div>
      <div>
        Title of Post {post.id}: {post.title}
      </div>
      <div className={styles.primaryButton}>
        <button onClick={handleClick}>See content</button>
      </div>
      <br />
    </div>
  );
};

export default PostItem;
