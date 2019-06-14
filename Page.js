
export default {
  props: ["page"],
  template: `
  <article>
    <h2>{{ page.title.rendered }}</h2>
    <div v-html="page.content.rendered" />
    <!--
      <pre>{{ page }}</pre>
    -->
  </article>
  `
};
