import React from "react";
import { Link } from "gatsby";

import { scale } from "~/src/utils/typography";

import { IHeaderTypeProps } from "./type";

export const HeaderHome: React.SFC<IHeaderTypeProps> = ({ title }) => (
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
