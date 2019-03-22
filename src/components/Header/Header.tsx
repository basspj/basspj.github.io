import React from "react";
import HeaderToggle from "./HeaderToggle";
import { Link } from "gatsby";
import { scale } from "~/src/utils/typography";

export const Header: React.SFC<HeaderProps> = ({ location, title }) => {
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
      {location.pathname === rootPath ? (
        <HeaderHome title={title} />
      ) : (
        <HeaderPost title={title} />
      )}
      <HeaderToggle />
    </header>
  );
};

const HeaderHome: React.SFC<HeaderTypePost> = ({ title }) => {
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
};

const HeaderPost: React.SFC<HeaderTypePost> = ({ title }) => {
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
};

interface HeaderTypePost {
  title: string;
}

export interface HeaderProps extends HeaderTypePost {
  location: any;
}

export default Header;
