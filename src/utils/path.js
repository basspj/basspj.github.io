"use strict";

function pathBlog(slug) {
  return `/blog${slug}`;
}

let PATH_JSON = `/json`;

function pathJsonIndex(index) {
  return `${PATH_JSON}/index${index ? index : ""}.json`;
}

module.exports = { pathBlog, PATH_JSON, pathJsonIndex };
