import React from "react";

export default function CommentList({ comments }) {
  const renderedComments = comments.map((comment) => {
    const content =
      comment.status === "approved"
        ? comment.content
        : comment.status === "pending"
        ? "Comment under moderation"
        : "Comment rejected";

    return <li key={comment.id}>{content}</li>;
  });

  return <ul>{renderedComments}</ul>;
}
