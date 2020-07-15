import React from "react";

const UserFollowers = (props) => {
  return (
    <>
      <h2>Followers:</h2>
      {props.followers.map((follower) => (
        <div className="followers" key={follower.id}>
          <a href={follower.html_url}>{follower.login}</a>
          <br />
        </div>
      ))}
    </>
  );
};

export default UserFollowers;
