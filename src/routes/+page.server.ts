export function load() {
    // get post from database
    const post = {
      slug: 'sveltekit',
      content: `
        <h1>SvelteKit</h1>
        <p>This data came from the server. 🔥</p>
      `,
    }
  
    return { post }
  }
  