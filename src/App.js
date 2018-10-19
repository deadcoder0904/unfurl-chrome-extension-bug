import React from "react";
import unfurl from "unfurl.js";

class App extends React.Component {
  state = {
    result: "This must be changed by UNFURL"
  };

  componentDidMount() {
    this._fetchMeta();
  }

  _fetchMeta = async () => {
    try {
      let result = await unfurl({
        uri: "https://akshaykadam.me",
        headers: {
          "Access-Control-Allow-Origin": "*"
        }
      });
      console.log("result", result);
      this.setState({ result });
    } catch (e) {
      console.error("e", e);
    }
  };

  render() {
    const { result } = this.state;

    return (
      <>
        <h1>UNFURL BUG DEMO</h1>
        <h4>{JSON.stringify(result)}</h4>

        <p>Right Click & Open Inspect & Check Console to see the error</p>
      </>
    );
  }
}

export default App;
