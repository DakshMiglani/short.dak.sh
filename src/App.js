import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";
import Helmet from "./components/Helmet";

class App extends React.Component {
  render() {
    return (
      <div>
        <Helmet />
        <Navbar />
        <Form />
      </div>
    );
  }
}

export default App;
