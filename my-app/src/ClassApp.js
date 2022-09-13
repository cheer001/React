import React from "react";

function Counter({ count }) {
  return <div style={{ fontSize: 18, fontWeight: "bold" }}>{count}</div>;
}

class Button extends React.PureComponent {
  render() {
    console.log(`Button ${this.props.children} render`);
    const { children, onClick } = this.props;
    return <button onClick={onClick}>{children}</button>;
  }
}

class App extends React.Component {
  state = {
    count: 0,
  };
  onClickIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  onClickDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };
  render() {
    const { count } = this.state;
    console.log("app");
    return (
      <div
        className="App"
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Counter count={count} />
        <Button onClick={this.onClickIncrement}>加一</Button>
        <Button onClick={this.onClickDecrement}>减一</Button>
      </div>
    );
  }
}

export default App;
