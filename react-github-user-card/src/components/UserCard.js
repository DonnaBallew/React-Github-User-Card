import React from "react";
import { Card, Icon, Image } from "semantic-ui-react";

class UserCard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // console.log(this.props.users)
    return (
      <Card>
        <Image src={this.props.users.avatar_url} wrapped ui={false} />
        <Card.Content>
          <Card.Header>Github:@{this.props.users.login}</Card.Header>
        </Card.Content>
        {/* <Card.Content extra></Card.Content> */}
      </Card>
    );
  }
}

export default UserCard;
