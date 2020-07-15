import React from "react";
import axios from "axios";
import UserFollowers from "./UserFollowers";
import "./UserCard.css";

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

  handleChanges = (e) => {
    this.setState({
      searchUser: e.target.value,
    });
  };

  getNewUser = () => {
    axios
      .get(`https://api.github.com/users/${this.state.searchUser}`)
      .then((res) => {
        this.setState({
          image: res.data.avatar_url,
          name: res.data.name,
          login: res.data.login,
          profileLink: res.data.html_url,
        });
        axios
          .get(
            `https://api.github.com/users/${this.state.searchUser}/followers`
          )
          .then((res) => {
            this.setState({
              followers: res.data,
            });
          });
      });
  };

  render() {
    return (
      <div className="main">
        <h1>Github User Card</h1>
        <div className="card">
          <img className="pic" src={this.state.image} alt="User" />
          <h2>Name: {this.state.name}</h2>
          <h3> Login: {this.state.login}</h3>
          <a href={this.state.profileLink}>GitHub Link</a>
          <hr />
          <div>
            <UserFollowers followers={this.state.followers} />
          </div>
          <br />
          <div className="search">
            <input
              onChange={this.handleChanges}
              type="text"
              placeholder="Enter username"
            />
            <button onClick={this.getNewUser}>Search GitHub</button>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCard;
