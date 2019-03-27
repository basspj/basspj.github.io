import React from "react";

import { rhythm } from "~/src/utils/typography";

import Header from "./Header";

export const Layout: React.SFC<ILayoutProps> = ({ children }) => (
  <div
    style={{
      color: "var(--textNormal)",
      background: "var(--bg)",
      transition: "color 0.2s ease-out, background 0.2s ease-out",
      minHeight: "100vh"
    }}
  >
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`
      }}
    >
      <Header />
      <main>{children}</main>
    </div>
  </div>
);

interface ILayoutProps {
  children: any;
}

export default Layout;
