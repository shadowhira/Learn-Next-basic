import PostItem from "@/components/PostItem";
import { Post } from "@/types/post";
import Link from "next/link";
import styles from "../../components/PostItem/styles.module.scss";

const PostList = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 60 },
  });
  const posts: Post[] = await res.json();

  return (
    <div>
      <h1>List Post: </h1>
      {posts.map((post: Post) => {
        return (
          <div key={post.id} className="flex flex-col gap-[20px]">
            <PostItem post={post} />
            <div className={styles.secondaryButton}>
              <Link href={`/posts/${post.id}`}>Go to Post</Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PostList;

export const metadata = {
  title: "Trang bài viết",
  description: "Danh sách các bài viết",
};
