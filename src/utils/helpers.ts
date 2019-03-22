export const convertBlogTagToEmoji = (tag: string) => {
  switch (tag) {
    case "Life":
      return "🐻";
    case "Code":
      return "🖥";
  }

  return "*️⃣";
};
