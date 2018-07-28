import React from "react";
import Navbar from "./components/Navbar";
import Form from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Form />
      </div>
    );
  }
}

export default App;
