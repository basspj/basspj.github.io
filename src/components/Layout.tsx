import React from "react";
import { Link } from "gatsby";

import Toggle from "./Toggle";

import { rhythm, scale } from "~/src/utils/typography";
import sun from "~/content/assets/sun.png";
import moon from "~/content/assets/moon.png";

class Layout extends React.Component<LayoutProps, LayoutState> {
  state = {
    theme: undefined
  };

  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  renderImage(src) {
    return (
      <img
        src={src}
        width="36"
        height="36"
        role="presentation"
        style={{ pointerEvents: "none", marginBottom: 0, marginTop: 0 }}
      />
    );
  }

  renderToggle() {
    return (
      <Toggle
        style={{ height: 36 }}
        icons={{
          checked: this.renderImage(moon),
          unchecked: this.renderImage(sun)
        }}
        checked={this.state.theme === "light"}
        onChange={() =>
          window.__setPreferredTheme(
            this.state.theme === "light" ? "dark" : "light"
          )
        }
      />
    );
  }

  renderHeaderHome() {
    const { title } = this.props;
    return (
      <h1
        style={{
          ...scale(0.75),
          marginBottom: 0,
          marginTop: 0
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `var(--textTitle)`
          }}
          to="/"
        >
          {title}
        </Link>
      </h1>
    );
  }

  renderHeaderPost() {
    const { title } = this.props;
    return (
      <h3
        style={{
          marginTop: 0,
          marginBottom: 0,
          height: 42, // because
          lineHeight: "2.625rem"
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `var(--textLink)`
          }}
          to="/"
        >
          {title}
        </Link>
      </h3>
    );
  }

  renderHeader() {
    const { location } = this.props;
    const rootPath = `${__PATH_PREFIX__}/`;

    return (
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "2.625rem"
        }}
      >
        {location.pathname === rootPath
          ? this.renderHeaderHome()
          : this.renderHeaderPost()}
        {this.renderToggle()}
      </header>
    );
  }

  render() {
    const { children } = this.props;

    return (
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
          {this.renderHeader()}
          <main>{children}</main>
        </div>
      </div>
    );
  }
}

interface LayoutProps {
  location: any;
  title: string;
  children: any;
}

interface LayoutState {
  theme?: "dark" | "light";
}

export default Layout;
