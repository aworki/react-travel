//给ts声明css样式
declare module "*.module.css" {
  const css: {[key:string]:string}
  export default css;
}