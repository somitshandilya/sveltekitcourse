import { json } from '@sveltejs/kit'

export function GET() {
  // get posts from database
  const posts = [
    {
      slug: 'sveltekit',
      content: `
        <h1>SvelteKit</h1>
        <p>This data came from the server. 🔥</p>
    `,
    },
  ]

  return json(posts)
}
