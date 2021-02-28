import "./index.pug";
import "./pages/contact-us.pug";
import "./main.scss";

function requireAll(r) {
  return r.keys().map(r);
}
requireAll(require.context("./", true, /^\.\/(?!.*(?:__tests__)).*\.(jsx?)$/));
console.log(require(`./assets/img/logo.svg`));
