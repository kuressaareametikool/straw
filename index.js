import Post from "./Post.js";
import Page from "./Page.js";
import Site from "./Site.js";
import Portfolio from "./Portfolio.js";

Vue.component("Post", Post);
Vue.component("Page", Page);
Vue.component("Site", Site);
Vue.component("Portfolio", Portfolio);

new Vue({
  el: "#app",
  data: () => ({ posts: [], pages: [], portfolios: [] }),
  async mounted() {
    let site = "";

    /* Use this when using you using you own public site (Zone?) */

    site = "https://vilsandisse.ee/wp";

    this.posts = await fetch(
      `https://sofetch.glitch.me/${site}/wp-json/wp/v2/posts`
    ).then(res => res.json());

    this.pages = await fetch(
      `https://sofetch.glitch.me/${site}/wp-json/wp/v2/pages`
    ).then(res => res.json());

    /* If you have site in wordpress.com, use the code below */

    /*
    
    site = "spiralsdesignstem.wordpress.com";

    this.posts = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/${ site }/posts`
    ).then(res => res.json());

    this.pages = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/${ site }/pages`
    ).then(res => res.json());

    this.portfolios = await fetch(
      `https://public-api.wordpress.com/wp/v2/sites/${ site }/jetpack-portfolio`
    ).then(res => res.json());

    */

    /* If you have site in your own machine, use the code below */

    /*

    site = "http://localhost:8888";

    this.posts = await fetch(`${site}/wp-json/wp/v2/posts`).then(res =>
      res.json()
    );

    this.pages = await fetch(`${site}/wp-json/wp/v2/pages`).then(res =>
      res.json()
    );

    */

  },
  template: `
  <Site :posts="posts" :pages="pages" :portfolios="portfolios" />
  `
});
