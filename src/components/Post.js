import React from 'react';
import Comment from './Comment';

function Post({ post }){
  return(
    <div className="post">
      <div className="postTopo">
        <div className="avatar">
          <img src={post.author.avatar} alt="avatar"/>
        </div>
        <div className="info">
          <div className="nome">{post.author.name}</div>
          <div className="date">{post.date}</div>
        </div>
      </div>
      <div className="postagem">{post.content}</div>
      <div className="comentarios">
        {post.comments.map(comment=> (
          <Comment key={comment.id} comment={comment} />
        ))}
      </div>
    </div>
  )
}

export default Post;