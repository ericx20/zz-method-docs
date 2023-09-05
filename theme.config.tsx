import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>ZZ Method</span>,
  project: {
    link: "https://github.com/ericx20/zz-method-docs",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/ericx20/zz-method-docs",
  footer: {
    text: (
      <p>
        Brought to you by{" "}
        <a href="https://www.youtube.com/@err0rcuber">
          <strong>err0rcuber</strong>
        </a>
      </p>
    ),
  },
};

export default config;
