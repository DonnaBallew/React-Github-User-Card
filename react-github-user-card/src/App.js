import React from "react";

import UserCard from "./components/UserCard";
import UserFollowers from "./components/UserFollowers";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/DonnaBallew")
      .then((res) => res.json())
      .then((res) => this.setState({ users: res }))
      .catch((err) => console.log("err"));
  }
  // https://www.smashingmagazine.com/2020/06/rest-api-react-fetch-axios/
  render() {
    return (
      <div className="App">
        <h1>Github User Card</h1>
        {/* {console.log(this.state.users)} */}
        <UserCard users={this.state.users} />
        <UserFollowers />
      </div>
    );
  }
}

export default App;
