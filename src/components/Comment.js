import React from 'react';

function Comment({ comment }){
  return(
    <div className="comentario">
      <div className="avatar">
        <img src={comment.author.avatar} alt=""/>
      </div>
      <div className="detalhes">
        <b>{comment.author.name}</b> {comment.content}
      </div>
    </div>
  )
}

export default Comment;