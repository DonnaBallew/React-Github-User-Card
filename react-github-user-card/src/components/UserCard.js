import React from "react";
import axios from "axios";
import UserFollowers from "./UserFollowers";

class UserCard extends React.Component {
  state = {
    image: {},
    name: "",
    login: "",
    profileLink: "",
    followers: [],
    searchUser: "",
  };
  async componentDidMount() {
    const [userInfo, followerInfo] = await Promise.all([
      axios.get("https://api.github.com/users/DonnaBallew"),
      axios.get("https://api.github.com/users/DonnaBallew/followers"),
    ]);
    this.setState({
      image: userInfo.data.avatar_url,
      name: userInfo.data.name,
      login: userInfo.data.login,
      profileLink: userInfo.data.html_url,
      followers: followerInfo.data,
    });
  }

  render() {
    return (
      <div className="main">
        <div className="card">
          <img src={this.state.image} alt="User" />
          <h1>Name: {this.state.name}</h1>
          <h2> Login: {this.state.login}</h2>
          <a href={this.state.profileLink}>GitHub</a>
          <br />
          <UserFollowers followers={this.state.followers} />
        </div>
      </div>
    );
  }
}

export default UserCard;
