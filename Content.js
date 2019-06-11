export const Content = content => `
<article>
  <h2>${ content.title.rendered }</h2>
  ${ content.content.rendered }
</article>
`