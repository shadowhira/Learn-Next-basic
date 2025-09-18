"use server";

export const updateLikeActions = async (postId: number) => {
  try {
    // update like of post with postId

    // if success
    return {
      status: "success",
      updatedLike: 5,
    };
  } catch (error) {
    console.log(error);
    return {
      status: "failed",
    };
  }
};
