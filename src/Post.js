import React from 'react'
import Avatar from "@material-ui/core/Avatar"
import './Post.css'
function Post({username,caption,imageUrl}) {
    return (
        <div className="post">
            <div className="post__header">
                <Avatar className="post__avatar" alt="Psr" src="/static/images/avatar/1.jpg"></Avatar>
                <h3>{username}</h3>
            </div>
            <img src={imageUrl} alt="" className="post__image"/>
            <h4 className="post__text"><strong>Psr</strong> {caption}</h4>
        </div>
    )
}

export default Post
