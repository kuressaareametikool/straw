import { Fullwidth } from './Fullwidth.js'

async function show() {
  // Get the posts
  const posts = await fetch("https://sofetch.glitch.me/https://vilsandisse.ee/wp/wp-json/wp/v2/posts").then(res => res.json())
  //const posts = await fetch("https://sofetch.glitch.me/https://uneruno.com/wp-json/wp/v2/pages").then(res => res.json())
 
  document.getElementsByTagName("body")[0].innerHTML = Fullwidth(posts)
}

show();
