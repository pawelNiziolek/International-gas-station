const Cash = props => {
  const value = ((props.cash / props.ratio) * props.price).toFixed(2);
  return (
    <div className="cash">
      <span className="span-cash">{props.cash <= 0 ? "" : value}</span>
      <span className="span-chose">{props.title}</span>
    </div>
  );
};

class InternationalGasStation extends React.Component {
  state = {
    amount: "",
    product: "gas95"
  };

  static defaultProps = {
    currencies: [
      {
        id: 0,
        name: "złoty",
        ratio: 1,
        title: "PLN"
      },
      {
        id: 1,
        name: "dollar",
        ratio: 3.6,
        title: "USD"
      },
      {
        id: 2,
        name: "euro",
        ratio: 4.2,
        title: "EUR"
      },
      {
        id: 3,
        name: "pound",
        ratio: 4.7,
        title: "GPB"
      }
    ],

    prices: {
      gas95: 4.71,
      gas98: 5.06,
      Diesel: 4.64,
      lpg: 2.2
    }
  };

  handleChange = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleSelect = e => {
    this.setState({
      product: e.target.value,
      amount: ""
    });
  };

  selectPrice = select => {
    return this.props.prices[select];
  };

  render() {
    const { amount, product } = this.state;

    const calculators = this.props.currencies.map(currency => (
      <Cash
        key={currency.id}
        ratio={currency.ratio}
        title={currency.title}
        cash={amount}
        price={this.selectPrice(product)}
      />
    ));

    return (
      <div className="app">
        <span className="app-span">
          INTERNATIONAL <span className="shake">G</span>AS STATION
        </span>
        <label className="label-chose">
          <span className="span-chose">FUEL TYPE:</span>
          <select value={product} onChange={this.handleSelect}>
            <option value="gas95">95</option>
            <option value="gas98">98</option>
            <option value="Diesel">ON</option>
            <option value="lpg">LPG</option>
          </select>
        </label>
        <br />
        <label className="label-amount">
          <span className="span-chose">
            A<span className="shake2">M</span>OUNT:
          </span>
          <input
            className="input-number"
            type="number"
            value={amount}
            onChange={this.handleChange}
          />
          <span className="span-chose">L</span>
        </label>
        <br />
        {calculators}
        <div className="one" />
        <div className="two" />
      </div>
    );
  }
}

ReactDOM.render(<InternationalGasStation />, document.getElementById("root"));
