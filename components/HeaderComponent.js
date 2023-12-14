import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

export default function HeaderComponent() {

  const [isLogin, setIsLogin] = useState(false);
  const isOnline = useOnlineStatus();
  const userInfo = useContext(UserContext);

  return (
    <div className="header">
      <div className="logo-container">
        <img 
            src="https://img.freepik.com/free-vector/delivery-service-illustrated_23-2148505081.jpg?w=740&t=st=1698847298~exp=1698847898~hmac=ebff52930b773b3c1179ccb185312252561814731524f2982121d470c96f5d8c" 
            className="logo"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li><button className={isOnline ? 'online-btn' : 'offline-btn'}></button></li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to={"/about"}>About Us</Link></li>
          <li><Link to={"/contact"}>Contact Us</Link></li>
          <li>Cart</li>
          <button className="login-btn" onClick={() => {
            let flag = isLogin;
            setIsLogin(!flag);
          }}>{isLogin ? 'Logout' : 'Login'}</button>
          <li>Username: {userInfo.username}</li>
        </ul>
      </div>
    </div>
  );
}
