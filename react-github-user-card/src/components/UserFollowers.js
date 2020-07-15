import React from "react";
import "./UserFollowers.css";

const UserFollowers = (props) => {
  return (
    <>
      <h3>Followers:</h3>
      {props.followers.map((follower) => (
        <div className="followers" key={follower.id}>
          <a href={follower.html_url}>{follower.login}</a>
          {/* <br /> */}
        </div>
      ))}
    </>
  );
};

export default UserFollowers;
