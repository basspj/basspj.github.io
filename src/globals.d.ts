declare var __PATH_PREFIX__;

interface Window {
  __theme: any;
  __onThemeChange: any;
  __setPreferredTheme: any;
}

declare module "*.jpg" {
  const fileName: string;
  export default fileName;
}
declare module "*.png" {
  const fileName: string;
  export default fileName;
}
