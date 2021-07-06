import Link from "next/link";

const ConsoleLog = ({ children }) => {
  console.log(children);
  return false;
};

class CoinGecko extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      data: [],
      number: 16,
      hourPercent: null,
      dayPercent: null,
      weekPercent: null,
      hourShow: true,
      dayShow: true,
      weekShow: false,
      allShow: false,
    };
  }

  componentDidMount() {
    let url =
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=" +
      this.state.number +
      "&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d";

    fetch(url)
      .then((res) => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            data: result,
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }

  // Function to set the input that controls whether the column (1h, 24h, 7d) is shown
  setInput = (key) => (event) => {
    this.setState((prevState) => ({ [key]: !prevState[key] }));
  };

  // Function to set the percentage shown
  setPercentage = (key) => (event) => {
    this.setState({ [key]: event.target.value });
  };

  // Function to change the number of coins called and reset screen
  setNumber = (event) => {
    this.setState({
      number: event.target.value,
    });
    <ConsoleLog>{this.state.number}</ConsoleLog>;
  };



  render() {
    const { error, isLoaded, data } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {/* Show other options button */}

          <div className="container mx-auto flex items-center text-white justify-center">
            <table className="table-auto">
              <thead className="text-lg">
                <tr>
                  <th className=" px-4 py-1">Symbol</th>
                  <th className=" px-4 py-1">
                    Name
                    <div className="inline-flex">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14px"
                        width="14px"
                        className="self-center"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 16.172l-6.071-6.071-1.414 1.414L10 20l.707-.707 7.778-7.778-1.414-1.414L11 16.172V0H9z" />
                      </svg>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="14px"
                        width="14px"
                        className="self-center"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9 3.828L2.929 9.899 1.515 8.485 10 0l.707.707 7.778 7.778-1.414 1.414L11 3.828V20H9V3.828z" />
                      </svg>
                    </div>
                  </th>
                  <th className=" px-4 py-1">Price (USD)</th>

                  <th
                    className={
                      " px-4 py-1 " + (this.state.dayShow ? "" : "checked")
                    }
                  >
                    % Change in 24h
                  </th>
                </tr>
              </thead>
              <tbody>
                {data.map((item) => (
                  <tr
                    key={item.name}
                    className={
                      (!this.state.weekPercent
                        ? null
                        : item.price_change_percentage_7d_in_currency >=
                          this.state.weekPercent
                        ? ""
                        : " checked ") +
                      (!this.state.dayPercent
                        ? null
                        : item.price_change_percentage_24h_in_currency >=
                          this.state.dayPercent
                        ? ""
                        : " checked ") +
                      (!this.state.hourPercent
                        ? null
                        : item.price_change_percentage_1h_in_currency >=
                          this.state.hourPercent
                        ? ""
                        : " checked ")
                    }
                  >
                    <td className="border px-4 py-1 items-center">
                      <img
                        className="justify-center"
                        src={item.image}
                        alt="coin name"
                        width="20"
                      />
                    </td>
                    <td className="border px-4 py-1">
                      <a
                        className="text-gray-50 font-medium hover:text-gray-500"
                        href={"/coins/" + item.id}
                      >
                        {item.name}
                      </a>
                    </td>
                    {/* A JSX comment */}
                    <td className="border px-4 py-1">
                      ${Math.round(item.current_price * 1000) / 1000}
                    </td>
                    <td
                      className={
                        (this.state.dayShow ? "" : "checked ") +
                        (item.price_change_percentage_24h_in_currency >= 0
                          ? "text-green-300 border px-4 py-1"
                          : "text-red-500 border px-4 py-1")
                      }
                    >
                      {Math.round(
                        item.price_change_percentage_24h_in_currency * 100
                      ) / 100}
                      %
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  }
}

export default CoinGecko;
