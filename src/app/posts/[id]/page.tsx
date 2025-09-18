"use client";

import { updateLikeActions } from "@/actions/post";
import { useState } from "react";

type Post = {
  id: number;
  title: string;
};

type PostDetailProps = {
  post: Post;
  params: {
    id: string;
  };
};

const PostDetail = ({
  post = { id: 1, title: "PostTitle" },
  params,
}: PostDetailProps) => {
  const [currentLike, setCurrentLike] = useState(0);
  const updateLike = async (postId: number) => {
    const res = await updateLikeActions(postId);
    res.status === "success"
      ? setCurrentLike(res?.updatedLike ?? 0)
      : setCurrentLike(currentLike);
  };

  return (
    <div>
      Post {params?.id}:<div>Number of likes: {currentLike}</div>
      <button onClick={() => updateLike(post.id)}>Like</button>
    </div>
  );
};

export default PostDetail;
