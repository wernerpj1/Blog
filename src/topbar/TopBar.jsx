import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top"> 
            <div className="topLeft">
                <i className="topIcon fab fa-facebook-square"></i>
                <i className="topIcon fab fa-twitter-square"></i>
                <i className="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">SOBRE</li>
                    <li className="topListItem">CONTATO</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://scontent.fbfh3-3.fna.fbcdn.net/v/t31.18172-8/19264341_1243042912471997_4034402398075909445_o.jpg?_nc_cat=101&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeF1gVP3nXVN0yYlk-avZZ0fGrufYD8sJqsau59gPywmq_d6PT255If51XuFJ13uTyKA5UPjWqY896R4e75V7dRJ&_nc_ohc=-EdbhLlfcn4AX-ciNKu&_nc_ht=scontent.fbfh3-3.fna&oh=69e95e9198584a873e55a39ae75d9ed4&oe=61AEC2D8" alt="" />
                <i className="topSearchIcon fas fa-search"></i>
            </div>
            
        </div>
        
    )
}
