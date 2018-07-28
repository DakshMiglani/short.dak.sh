import React from "react";
import { Form as FormUI, Button } from "@auth0/cosmos";
import { isValidURL } from "./utils";

class Form extends React.Component {
  state = {
    text: "",
    disabled: false,
    success: false,
    loading: false,
    error: ""
  };

  changeValue = e => {
    this.setState({ text: e.target.value });
  };

  submit = e => {
    e.preventDefault();
    this.setState({ disabled: true, loading: true, error: "" });
    if (this.state.text === "" || !isValidURL(this.state.text)) {
      this.setState({
        disabled: false,
        loading: false,
        error: "The Field is either empty or The Link / URL is wrong."
      });
    }
  };

  render() {
    return (
      <div id="url-form-div">
        <FormUI layout="label-on-top" className="form" onSubmit={this.submit}>
          <FormUI.TextInput
            label="Shorten Your Links with Dak.sh."
            type="text"
            placeholder="Enter Your Link / URL."
            onChange={this.changeValue}
            value={this.state.text}
            error={this.state.error}
          />
          <Button
            size="large"
            appearance="default"
            icon="hooks"
            type="submit"
            disabled={this.state.disabled}
            success={this.state.success}
            loading={this.state.loading}
          >
            Shorten!
          </Button>
        </FormUI>
      </div>
    );
  }
}

export default Form;
