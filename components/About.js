import React from "react";
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
            <div>
                <h1>About Us page</h1>
            </div>
        )
    }
}

export default User;