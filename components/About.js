import React from "react";
import UserContext from "../utils/UserContext";
class User extends React.Component {
  constructor(props) {
    super(props);
    console.log("Constructor Called");
  }

  componentDidMount() {
    console.log("Component did mount called");
  }

  render() {
    console.log("render called");
    return (
      <UserContext.Consumer>
        {(userInfo) => <h1>About Us {userInfo.username}</h1>}
      </UserContext.Consumer>
    );
  }
}

export default User;
