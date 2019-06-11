import { Content } from "./Content.js";

export const Fullwidth = content => `
<header>
<h1>Header</h1>
</header>
<main>
${content.map(Content).join('')}
</main>
`;
