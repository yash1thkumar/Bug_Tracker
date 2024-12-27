import React, { useState, useEffect } from "react";

function Users(props) {
  const [data, setData] = useState("");

  const [error, setError] = useState(null);

  console.log(typeof props);

  async function getData() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();

      setData(data);

      console.log(data);
    } catch (error) {
      setError(error.toString());
    }
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const tweets = [
    {
      tweet: "Random tweet by abcd",
      likes: 100,
      comments: "disabled",
    },
    { tweet: "Political tweet by Eswar", likes: 10, comments: "disabled" },
    { tweet: "Funny tweet by adhccd", likes: 40, comments: "20" },
    { tweet: "Cat tweet by fhr", likes: 0, comments: "30" },
  ];

  return (
    <div>
      <button className="btn btn-info" onClick={getData}>
        Get Users
      </button>

      {tweets.map((tweet) => {
        return (
          <div key={tweet.tweet}>
            <h3>Tweet title: {tweet.tweet}</h3>
            <p>Likes: {tweet.likes} </p>
            <button className="btn btn-warning">
              Comments: {tweet.comments}{" "}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Users;
