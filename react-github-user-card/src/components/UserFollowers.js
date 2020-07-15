import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class UserFollowers extends React.Component {
  constructor() {
    super();
    this.state = {
      followers: [],
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/DonnaBallew/followers")
      .then((res) => res.json())
      .then((res) => this.setState({ followers: res }))
      .catch((err) => console.log("err"));
  }
  render() {
    return (
      <div>
        {console.log(this.state.followers)}
        {this.state.followers.map((follower) => {
          return (
            <Card key={follower.id}>
              <Image src={follower.avatar_url} wrapped ui={false} />
              <Card.Content>
                <Card.Header>Github:@{follower.login}</Card.Header>
              </Card.Content>
              <Card.Content extra></Card.Content>
            </Card>
          );
        })}
      </div>
    );
  }
}

export default UserFollowers;
