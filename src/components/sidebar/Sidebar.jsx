import "./sidebar.css";
import {
    RssFeed,
    Chat,
    PlayCircle,
    Group,
    Bookmark,
    HelpOutline,
    WorkOutline,
    Event,
    School,
    Help
} from "@mui/icons-material";

export default function Sidebar(){
    return (
            <div className="sidebar">
                <div className="sidebarWrapper">
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <RssFeed className="sidebarIcon"/>
                            <span className="sidebarListItemText">Feed</span>
                        </li>
                        <li className="sidebarListItem">
                            <Chat className="sidebarIcon"/>
                            <span className="sidebarListItemText">Chats</span>
                        </li>
                        <li className="sidebarListItem">
                            <PlayCircle className="sidebarIcon"/>
                            <span className="sidebarListItemText">Videos</span>
                        </li>
                        <li className="sidebarListItem">
                            <Group className="sidebarIcon"/>
                            <span className="sidebarListItemText">Groups</span>
                        </li>
                        <li className="sidebarListItem">
                            <Bookmark className="sidebarIcon"/>
                            <span className="sidebarListItemText">Bookmarks</span>
                        </li>
                        <li className="sidebarListItem">
                            <HelpOutline className="sidebarIcon"/>
                            <span className="sidebarListItemText">Questions</span>
                        </li>
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>
                            <span className="sidebarListItemText">Jobs</span>
                        </li>
                        <li className="sidebarListItem">
                            <Event className="sidebarIcon"/>
                            <span className="sidebarListItemText">Events</span>
                        </li>
                        <li className="sidebarListItem">
                            <School className="sidebarIcon"/>
                            <span className="sidebarListItemText">Courses</span>
                        </li>
                    </ul>

                    <button className="sidebarButton">Show More</button>
                    <hr className="sidebarHr"/>
                    <ul className="sidebarFriendList">
                        <li className="sidebarFriend">
                            <img src="/assets/person/user2.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Terry Follman</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user3.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Ben Wendy</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user4.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Albert Cann</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user5.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">John Matth</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user6.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Ann McCan</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user2.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Terry Follman</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user2.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Terry Follman</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user2.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Terry Follman</span>
                        </li>
                        <li className="sidebarFriend">
                            <img src="/assets/person/user2.jpeg" alt="friend picture" className="sidebarFriendImg"/>
                            <span className="sidebarFriendName">Terry Follman</span>
                        </li>
                    </ul>
                </div>
            </div>
    )
}