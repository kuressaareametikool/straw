export default {
  props: ["post"],
  template: `
  <article>
    <h2>{{ post.title.rendered }}</h2>
    <div v-html="post.content.rendered" />
    <!--
      <pre>{{ post }}</pre>
    -->
  </article>
  `
};
