import React from "react";
import { Helmet as Hm } from "react-helmet";

const Helmet = () => (
  <React.Fragment>
    <Hm>
      <title>Link / URL Shortener by Dak.sh.</title>
      <meta http-equiv="content-type" content="text/html; charset=utf-8" />
      <meta name="description" content="Link / URL Shortener by Dak.sh" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, shrink-to-fit=no"
      />
      <meta name="theme-color" content="#663399" />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@Dak_ssh" />
      <meta name="twitter:title" content="Link / URL Shortener by Dak.sh" />
      <meta
        name="twitter:description"
        content="A Link Shortener, that allows you to shorten those ugly links."
      />
      <meta name="twitter:creator" content="@Dak_ssh" />
      <meta name="twitter:image" content="https://i.imgur.com/WKITcvf.png" />
    </Hm>
  </React.Fragment>
);

export default Helmet;
