import React from "react";
import { DocsThemeConfig, useConfig } from "nextra-theme-docs";
import { useRouter } from "nextra/hooks";
import Image from "next/image";
import logo from "public/logo.svg";
import Link from "next/link";
import { authorsMap, backToTopMap, defaultDescriptionMap, editTextMap, feedbackLinkMap, footerMap, gitTimestampMap, logoTextMap, searchPlaceholderMap, tableOfContentsMap, titleTextMap } from "translations/site";
import { useTranslation } from "translations/useTranslation";

const config: DocsThemeConfig = {
  logo: () => {
    const logoText = useTranslation(logoTextMap);
    return (
      <>
        <Image src={logo} alt="ZZ Logo" width={40} />
        <span>{logoText}</span>
      </>
    )
  },

  search: {
    placeholder: () => useTranslation(searchPlaceholderMap)
  },

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
    { locale: 'fr', name: 'Français' },
    { locale: 'he', name: 'עִברִית', direction: 'rtl' },
    { locale: 'zh', name: '中文' },
  ],
  head() {
    const { asPath, defaultLocale, locale } = useRouter();
    const { frontMatter } = useConfig();
    const url =
      "https://zzmethod.com" +
      (defaultLocale === locale ? asPath : `/${locale}${asPath}`);
    const isHomepage = asPath === "/" || asPath === `/${locale}${asPath}`;
    const titleText = useTranslation(titleTextMap);
    const defaultDescription = useTranslation(defaultDescriptionMap);
    return (
      <>
        <title>{(isHomepage || !frontMatter.title) ? titleText : `${frontMatter.title} – ${titleText}`}</title>
        <meta property="og:url" content={url} />
        <meta property="og:title" content={frontMatter.title || titleText} />
        <meta
          property="og:description"
          content={
            frontMatter.description || defaultDescription
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
    const authorsTextFn = useTranslation(authorsMap);
    return (
      <>
        <h1 className="_mt-2 _mb-2 _text-4xl _font-bold _tracking-tight">
          {frontMatter?.title}
        </h1>
        {frontMatter?.date && (
          <p className="_block _text-sm _text-gray-500 dark:_text-gray-400">
            {frontMatter.date}
          </p>
        )}
        {frontMatter?.author && (
          <p className="_block _text-sm _text-gray-500 dark:_text-gray-400">
            {authorsTextFn(frontMatter.author)}
          </p>
        )}
        <div>{children}</div>
      </>
    );
  },

  toc: {
    float: true,
    title: () => useTranslation(tableOfContentsMap),
    backToTop: () => useTranslation(backToTopMap),
  },

  feedback: {
    content: () => useTranslation(feedbackLinkMap)
  },

  editLink: {
    content: () => useTranslation(editTextMap)
  },

  gitTimestamp: ({ timestamp }) => {
    const { locale } = useRouter();
    const lastUpdatedOn = useTranslation(gitTimestampMap);
    return (
      <>
        {lastUpdatedOn}{" "}
        <time dateTime={timestamp.toISOString()}>
          {timestamp.toLocaleDateString(locale, {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </time>
      </>
    )
  },

  footer: {
    content: () => useTranslation(footerMap),
  },
};

export default config;
