declare var __PATH_PREFIX__;

interface Window {
  __setTheme: any;
}

declare module "*.jpg" {
  const fileName: string;
  export default fileName;
}
declare module "*.png" {
  const fileName: string;
  export default fileName;
}
