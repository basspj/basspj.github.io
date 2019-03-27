import React from "react";
import HeaderToggle from "./HeaderToggle";

import { useSiteMetadataTitle } from "~/src/hooks/useSiteMetadataTitle";
import LocationContext from "~/src/context/LocationContext";

import { HeaderHome, HeaderPost } from "./HeaderType";

export const Header: React.SFC<{}> = () => {
  const rootPath = `${__PATH_PREFIX__}/`;
  const title = useSiteMetadataTitle();
  return (
    <LocationContext.Consumer>
      {(consumer) => (
        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "2.625rem"
          }}
        >
          {consumer.location.pathname === rootPath ? (
            <HeaderHome title={title} />
          ) : (
            <HeaderPost title={title} />
          )}
          <HeaderToggle />
        </header>
      )}
    </LocationContext.Consumer>
  );
};

export default Header;
