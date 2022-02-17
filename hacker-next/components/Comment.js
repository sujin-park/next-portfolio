const Comment = ({ comment }) => (
  <div className="comment">
    <div className="comment-user">{comment.user}</div>
    <div className="comment-content" dangerouslySetInnerHTML={{ _html: comment.content }} />
    {comment.comments && (
      <div className="nested-comments">
        {comment.comments.map(nestedComment => (
          <Comment key={nestedComment.id} comment={nestedComment}/>
        ))}
      </div>
    )}

    <style jsx>{`
      .comment {
        margin-bottom: 1.5rem;
      }

      .comment-user {
        font-size: 0.8rem;
        font-weight: bold;
        margin-bottom: 0.5rem;
      }

      .comment-content {
        font-size: 0.9rem;
      }

      .comment-content p {
        margin: 0 0.5rem 0 0;
        word-wrap: break-word;
      }

      .comment-content a {
        color: #f60;
        text-decoration: underline;
      }

      .comment-content pre {
        max-width: 100%;
        overflow: scroll;
      }

      .nested-comments {
        margin-top: 1rem;
        border-left: 0.1rem solid rgba(#000, 0.1);
        padding-left: 1rem;
      }
    `}</style>
  </div>
)

export default Comment;