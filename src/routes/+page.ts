// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
// turns app into a SPA
export const ssr = false

// turns app into SSG
export const prerender = true

// don't even load the SvelteKit client
export const csr = false
