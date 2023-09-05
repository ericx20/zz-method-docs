import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "public/logo.svg";

const config: DocsThemeConfig = {
  logo: (
    <>
      <Image src={logo} alt="ZZ Logo" width={40} />
      <span>ZZ Method</span>
    </>
  ),
  project: {
    link: "https://github.com/ericx20/zz-method-docs",
  },
  // chat: {
  //   link: "https://discord.com",
  // },
  docsRepositoryBase: "https://github.com/ericx20/zz-method-docs/tree/main",
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://zzmethod.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);

    return (
      <>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || "ZZ Method"} />
        <meta
          property="og:description"
          content={
            frontMatter.description || "Guide to the ZZ Speedsolving Method"
          }
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
      </>
    );
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    const isHomepage = asPath === "/";
    const titleTemplate = isHomepage ? "ZZ Method" : "%s – ZZ Method";
    return { titleTemplate };
  },
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
