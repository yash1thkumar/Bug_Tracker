function Slave({ trendingposition, tweet }) {
  console.log(trendingposition);
  console.log(tweet);
  return (
    <div>
      <h1>Trending position:{trendingposition}</h1>
      <h2>Tweet: {tweet}</h2>
    </div>
  );
}
export default Slave;
