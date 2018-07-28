import React from "react";
import Axios from "axios";
import Fingerprint from "fingerprintjs2";
import { Form as FormUI, Button, TextInput } from "@auth0/cosmos";
import { isValidURL } from "./utils";
import { API } from "../constants";

class Form extends React.Component {
  state = {
    text: "",
    disabled: false,
    success: false,
    loading: false,
    error: "",
    url: ""
  };

  componentDidMount() {
    setTimeout(() => {
      new Fingerprint().get((res, components) => {
        localStorage.setItem("browser-fingerprint", res);
      });
    }, 500);
  }

  changeValue = e => {
    this.setState({ text: e.target.value, success: false });
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
      return;
    }
    this.sendXhrRequest(
      this.state.text,
      localStorage.getItem("browser-fingerprint")
    );
  };

  sendXhrRequest = async (url, createdBy) => {
    try {
      const res = await Axios({
        method: "POST",
        url: API,
        headers: {
          "Content-Type": "application/json"
        },
        data: JSON.stringify({ url, createdBy }),
        json: true
      });

      if (res.data && !res.data.error) {
        this.setState({
          url: res.data.url,
          loading: false,
          disabled: false,
          success: true
        });
      }
    } catch (e) {
      this.setState({
        disabled: false,
        loading: false,
        error: "Failed while shortening, please try again later."
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
            disabled={this.state.disabled}
          />
          <TextInput
            disabled
            placeholder="Your Shortened Link here."
            value={this.state.url}
          />
          <Button
            className="shorten-btn"
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
