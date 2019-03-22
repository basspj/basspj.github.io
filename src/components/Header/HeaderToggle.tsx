import React from "react";

import sun from "~/content/assets/sun.png";
import moon from "~/content/assets/moon.png";

import Toggle from "../Toggle";

export default class HeaderToggle extends React.PureComponent<
  {},
  HeaderToggleState
> {
  state = {
    theme: undefined
  };

  componentDidMount() {
    this.setState({ theme: window.__theme });
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme });
    };
  }

  render() {
    const { theme } = this.state;
    return (
      <Toggle
        style={{ height: 36 }}
        icons={{
          checked: this.renderImage(moon),
          unchecked: this.renderImage(sun)
        }}
        checked={theme === "light"}
        onChange={() =>
          window.__setPreferredTheme(theme === "light" ? "dark" : "light")
        }
      />
    );
  }

  renderImage = (src) => {
    return (
      <img
        src={src}
        width="36"
        height="36"
        role="presentation"
        style={{
          pointerEvents: "none",
          marginBottom: 0,
          marginTop: 0
        }}
      />
    );
  };
}

interface HeaderToggleState {
  theme?: "dark" | "light";
}
