import { Fullwidth } from './Fullwidth.js'

async function show() {
  // Get the posts
  const posts = await fetch("https://public-api.wordpress.com/wp/v2/sites/kig17.wordpress.com/jetpack-portfolio").then(res => res.json())
  //const posts = await fetch("https://sofetch.glitch.me/https://uneruno.com/wp-json/wp/v2/pages").then(res => res.json())
 
  document.getElementsByTagName("body")[0].innerHTML = Fullwidth(posts)
}

show();
