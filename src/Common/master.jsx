import Slave from "./slave";
function Master() {
  const tweets = [
    { trending_position: 1, tweet: "xyz" },
    { trending_position: 2, tweet: "abc" },
    { trending_position: 1, tweet: "xyz" },
  ];
  return (
    <div>
      <div>
        {tweets.map((tweet, index) => (
          <Slave
            key={index}
            trendingposition={tweet.trending_position}
            tweet={tweet.tweet}
          />
        ))}
      </div>
    </div>
  );
}

export default Master;
