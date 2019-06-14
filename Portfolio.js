
export default {
  props: ["portfolio"],
  template: `
  <article>
    <h2>{{ portfolio.title.rendered }}</h2>
    <div v-html="portfolio.content.rendered" />
    <!--
      <pre>{{ portfolio }}</pre>
    -->
  </article>
  `
};
