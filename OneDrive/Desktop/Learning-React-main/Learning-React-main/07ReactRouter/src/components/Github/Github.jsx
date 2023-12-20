import { data } from "autoprefixer";
import { useState } from "react";
import { useParams } from "react-router-dom";

function Github() {
  const { userName } = useParams();
  const [img, setImg] = useState();
  const [follower, setFollower] = useState();

  const value = fetch(`https://api.github.com/users/${userName}`)
    .then((data) => {
      return data.json();
    })
    .then((data) => {
      // Work with the JSON data here
      console.log(data);
      setImg(data.avatar_url);
      setFollower(data.followers);
      return data; // You can return the data or do something else with it
    });

  return (
    <div>
      <img src={img} alt="" />
      <h1>Followers: {follower}</h1>
    </div>
  );
}

export default Github;
