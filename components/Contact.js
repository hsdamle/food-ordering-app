import { useContext } from "react";
import UserContext from "../utils/UserContext";

export default function Contact() {
  const userInfo = useContext(UserContext);

  return (
    <div>
      <label>Welcome</label>
      <h1>Contact Us Page: {userInfo.username}</h1>
    </div>
  );
}
