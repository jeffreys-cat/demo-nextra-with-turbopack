/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import {
  FEEDBACK_LINK_WITH_TRANSLATIONS,
  FeedbackLinkWithTranslations,
} from "config";
import { Footer, Navbar } from "ui";
import { useRouter } from "next/router";
const config: DocsThemeConfig = {
  logo: <span>My Project</span>,
  project: {
    link: "https://github.com/shuding/nextra-docs-template",
  },
  banner: {
    key: "2.0-release",
    text: (
      <a href="https://cn.selectdb.com" rel="noreferrer" target="_blank">
        🎉 SelectDB Cloud 2.0 is released. Read more →
      </a>
    ),
  },
  navbar: {
    component: <Navbar isDocsApp />,
  },
  chat: {
    link: "https://discord.com",
  },
  docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: () => {
      const { locale } = useRouter();
      switch (locale) {
        case "zh-CN":
          return (
            <a
              href="https://vercel.com/?utm_source=swr_zh-cn"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center no-underline text-current font-semibold"
            >
              <span className="mr-2">由</span>
              <span className="mr-2">
                <Footer />
              </span>
              驱动
            </a>
          );
        default:
          return (
            <a
              href="https://vercel.com/?utm_source=swr"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center no-underline text-current font-semibold"
            >
              <span className="mr-1">Powered by</span>
              <span>
                <Footer />
                Logo
              </span>
            </a>
          );
      }
    },
  },
  feedback: {
    content: () => {
      const { locale } = useRouter();
      return (
        <span>
          {FEEDBACK_LINK_WITH_TRANSLATIONS[
            locale as FeedbackLinkWithTranslations
          ] || FEEDBACK_LINK_WITH_TRANSLATIONS["en-US"]}
        </span>
      );
    },
  },
  i18n: [
    { locale: "en-US", text: "English" },
    { locale: "zh-CN", text: "简体中文" },
  ],
};

export default config;
