import React from "react";

import sun from "~/content/assets/sun.png";
import moon from "~/content/assets/moon.png";
import ThemeContext from "~/src/context/ThemeContext";

import Toggle from "../Toggle";

export const HeaderToggle: React.SFC<{}> = () => {
  const renderImage = (src) => {
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

  return (
    <ThemeContext.Consumer>
      {(consumer) => (
        <Toggle
          style={{ height: 36 }}
          icons={{
            checked: renderImage(sun),
            unchecked: renderImage(moon)
          }}
          checked={consumer.dark}
          onChange={() => {
            consumer.toggle();
          }}
        />
      )}
    </ThemeContext.Consumer>
  );
};

export default HeaderToggle;
