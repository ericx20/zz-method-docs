import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "next/router";
import Image from "next/image";
import logo from "public/logo.svg";
import Link from "next/link";
import * as thing from "nextra/mdx";
import h1 from "nextra/components"

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
  // banner: {
  //   key: "example-solve-library-release",
  //   text: <Link href="/blog/zz-example-solve-library">Introducing the ZZ Example Solve Library!</Link>,
  // },
  i18n: [
    { locale: 'en', name: 'English' },
    { locale: 'zh', name: '中文' },
    { locale: 'fr', name: 'Français' },
    { locale: 'he', name: 'עִברִית', direction: 'rtl' }
  ],
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://zzmethod.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const isHomepage = asPath === "/" || asPath === `/${locale}${asPath}`;
    return (
      <>
        <title>{(isHomepage || !frontMatter.title) ? "ZZ Method" : `${frontMatter.title} – ZZ Method`}</title>
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
  main: ({ children }) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { frontMatter } = useConfig();
    const attributes: string[] = [];
    if (frontMatter?.date) {
      attributes.push(frontMatter.date);
    }
    if (frontMatter?.author) {
      attributes.push(frontMatter.date ? "by" : "By");
      attributes.push(frontMatter.author);
    }
    return (
      <>
        <h1 className="_mt-2 _mb-2 _text-4xl _font-bold _tracking-tight">
          {frontMatter?.title}
        </h1>
        {attributes.length > 0 && (
          <p className="_block _text-sm _text-gray-500 dark:_text-gray-400">
            {attributes.join(" ")}
          </p>
        )}
        <div>{children}</div>
      </>
    );
  },
  footer: {
    content: (
      <p>
        Created by{" "}
        <a
          href="https://www.youtube.com/@crystalcuber"
          target="_blank"
          rel="noopener"
        >
          <strong>crystalcuber</strong>
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
