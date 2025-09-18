import { Post } from "@/types/post";

export const GET = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
      next: { revalidate: 60 },
    });
    const posts: Post[] = await res.json();

    return Response.json({
      posts: posts,
      status: "success",
    });
  } catch (error) {
    return Response.json({
      status: "failed",
    });
  }
};