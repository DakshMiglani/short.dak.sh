import React from "react";
import { Form as FormUI } from "@auth0/cosmos";

const Form = () => (
  <div id="url-form-div">
    <FormUI layout="label-on-top" className="form">
      <FormUI.TextInput
        label="Shorten Your Links with Dak.sh."
        type="text"
        placeholder="Enter Your Link / URL."
      />
      <FormUI.Actions
        primaryAction={{ label: "Save Changes", handler: () => {} }}
      />
    </FormUI>
  </div>
);

export default Form;
