export const convertBlogTagToEmoji = (tag: string) => {
  switch (tag) {
    case "Life":
      return "🐻";
    case "Code":
      return "🖥";
  }

  return "*️⃣";
};

export const isResponseJson = (res: Response) => {
  const contentType = res.headers.get("content-type");
  return contentType && contentType.indexOf("application/json") > -1;
};
