import "./rightbar.css";

export default function Rightbar(){
    return (
        <div className="rightbar">
            <div className="rightbarWrapper">
                <div className="birthdayContainer">
                    <img src="/assets/various/birthday.png" alt="birthday present" className="birthdayImg"/>
                    <span className="birthdayText">
                        <b>Pola Foster</b> and <b>3 other friends</b> have a birthday today
                    </span>
                </div>
                <img src="/assets/various/ad.jpg" alt="ad image" className="rightbarAd"/>
                <h4 className="rightbarTitle">Online Friends</h4>
                <ul className="rightbarFriendList">
                    <li className="rightbarFriend">
                        <div className="rightbarProfileImgContainer">
                            <img src="/assets/person/user6.jpeg" alt="user friend profile img" className="rightbarProfileImg"/>
                            <span className="rightbarOnline"></span>
                        </div>
                        <span className="rightbarUsername">Lissa Carter</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}