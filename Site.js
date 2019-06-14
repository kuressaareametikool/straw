export default {
  props: ['posts','pages'],
  template: `
  <div>
    <header>
      <h1>Hello</h1>
    </header>
    <Post
      v-for="(post,i) in posts"
      :key="'post'+ i"
      :post="post"
    />
    <Page
      v-for="(page,i) in pages"
      :key="'page'+ i"
      :page="page"
    />
  </div>
  `
}