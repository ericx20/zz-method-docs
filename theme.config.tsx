import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "public/logo.svg";
import Link from "next/link";

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
  banner: {
    key: "blog-release",
    text: <Link href="/blog">We have a new blog! Check it out →</Link>,
  },
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
  main: ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    const attributes = [];
    if (frontMatter?.date) {
      attributes.push(frontMatter.date);
    }
    if (frontMatter?.author) {
      attributes.push(frontMatter.date ? "by" : "By");
      attributes.push(frontMatter.author);
    }
    return (
      <main>
        <h1 className="nx-mt-2 nx-mb-2 nx-text-4xl nx-font-bold nx-tracking-tight">
          {frontMatter?.title}
        </h1>
        {attributes.length > 0 && (
          <p className="nx-mb-4 nx-block nx-text-sm nx-text-gray-500 dark:nx-text-gray-400">
            {attributes.join(" ")}
          </p>
        )}
        <div>{children}</div>
      </main>
    );
  },
  footer: {
    text: (
      <p>
        Created by{" "}
        <a
          href="https://www.youtube.com/@err0rcuber"
          target="_blank"
          rel="noopener"
        >
          <strong>err0rcuber</strong>
        </a>
        . Powered by{" "}
        <a href="https://js.cubing.net/cubing/" target="_blank" rel="noopener">
          <code>cubing.js</code>
        </a>
      </p>
    ),
  },
};

export default config;
