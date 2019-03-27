import React from "react";
import { Link } from "gatsby";

import { IHeaderTypeProps } from "./type";

export const HeaderPost: React.SFC<IHeaderTypeProps> = ({ title }) => (
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
