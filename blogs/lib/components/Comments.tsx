"use client";

type Props = {
  comments: PostComment[];
  parentId?: null | string;
  depth?: number;
};

const Comments = ({ comments, parentId = null, depth = 0 }: Props) => {
  const childComments = comments.filter((c) => c.parent_id === parentId);
  if (childComments.length === 0) return null;

  return (
    <div style={{ marginRight: depth * 20 }}>
      {childComments.map((comment) => (
        <div key={comment.id} style={{ marginBottom: 8 }}>
          {depth === 0 && <p>--------------------------------------------</p>}{" "}
          <div>
            <strong>{comment.name}</strong>
            <p>{comment.text}</p>
            <div style={{ display: "flex" }}>
              <p>likes: {comment?.likes}</p>
            </div>
            <p>{comment.created_at}</p>
          </div>
          <Comments
            comments={comments}
            parentId={comment.id}
            depth={depth + 1}
          />
        </div>
      ))}
    </div>
  );
};

export default Comments;
