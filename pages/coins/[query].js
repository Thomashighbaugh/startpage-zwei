// getServerSideProps()

const Posts = ({ results: query }) => {
  return (
    <div className="bg-hero-circuit-board main py-34 ">
      {query.map((q, index) => (
        <div
          className="container mx-auto bg-gray-900 text-white p-12  card rounded-xl "
          key={index}
        >
          <div className="flex items-center justify-center pb-4">
            <img src={q.image.small} alt="Coin Image" />
            <h1 className="text-5xl text-center text-accent-1">
              {" "}
              {q.coingecko_rank}. {q.name}{" "}
            </h1>
            <img src={q.image.small} alt="Coin Image" />
            <br />
          </div>
          <hr />

          <p className="text-3xl text-center">
            Current Price: ${q.market_data.current_price.usd}
          </p>
          <br />
          <div className="flex text-xl items-center space-x-4">
            <p>Current Market Sentiment</p>
            <p className="text-green-600 text-center">
              {" "}
              {q.sentiment_votes_up_percentage}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              width="14px"
              className="self-center"
              viewBox="0 0 20 20"
            >
              <path
                d="M11.0010436,0 C9.89589787,0 9.00000024,0.886706352 9.0000002,1.99810135 L9,8 L1.9973917,8 C0.894262725,8 0,8.88772964 0,10 L0,12 L2.29663334,18.1243554 C2.68509206,19.1602453 3.90195042,20 5.00853025,20 L12.9914698,20 C14.1007504,20 15,19.1125667 15,18.000385 L15,10 L12,3 L12,0 L11.0010436,0 L11.0010436,0 Z M17,10 L20,10 L20,20 L17,20 L17,10 L17,10 Z"
                id="Fill-97"
              ></path>
            </svg>
            <p className="text-red-600 text4-center">
              {" "}
              {q.sentiment_votes_down_percentage}
            </p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="14px"
              width="14px"
              className="self-center"
              viewBox="0 0 20 20"
            >
              <path
                d="M11.0010436,20 C9.89589787,20 9.00000024,19.1132936 9.0000002,18.0018986 L9,12 L1.9973917,12 C0.894262725,12 0,11.1122704 0,10 L0,8 L2.29663334,1.87564456 C2.68509206,0.839754676 3.90195042,8.52651283e-14 5.00853025,8.52651283e-14 L12.9914698,8.52651283e-14 C14.1007504,8.52651283e-14 15,0.88743329 15,1.99961498 L15,10 L12,17 L12,20 L11.0010436,20 L11.0010436,20 Z M17,10 L20,10 L20,0 L17,0 L17,10 L17,10 Z"
                id="Fill-97"
              ></path>
            </svg>
          </div>
          <br />
          <p className="text-xl">All Time High: ${q.market_data.ath.usd}</p>
          <br />
          <p className="text-xl">
            Website: <a href={q.links.homepage}>{q.links.homepage}</a>
          </p>
          <br />
          <p
            className=""
            dangerouslySetInnerHTML={{ __html: q.description.en }}
          ></p>
        </div>
      ))}
    </div>
  );
};

export async function getServerSideProps(context) {
  const res = await fetch(
    `https://api.coingecko.com/api/v3/coins/${context.params.query}`
  );
  const json = await res.json();
  const posts = [json];
  return {
    props: {
      results: posts,
    },
  };
}

export default Posts;
