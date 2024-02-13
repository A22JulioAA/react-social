import "./post.css";
import {MoreVert, FavoriteBorder, ThumbUp} from "@mui/icons-material";

export default function Post(){
    return (
        <div className="post">
            <div className="postWrapper">
                <div className="postTop">
                    <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/user1.jpeg" alt="user picture"/>
                        <span className="postUsername">Tom Collington</span>
                        <span className="postDate">5 min ago</span>
                    </div>
                    <div className="postTopRight">
                        <MoreVert/>
                    </div>
                </div>
                <div className="postCenter">
                    <span className="postText">Hey! It's my first post:)</span>
                    <img src="/assets/person/landscape.jpg" alt="user image post" className="postImg"/>
                </div>
                <div className="postBottom">
                    <div className="postBottomLeft">
                        <FavoriteBorder className="likeIcon"/>
                        <ThumbUp className="likeIcon" />
                        <span className="postLikeCounter">32 likes</span>
                    </div>
                    <div className="postBottomRight">
                        <span className="postCommentText">9 comments</span>
                    </div>
                </div>
            </div>
        </div>
    )
}