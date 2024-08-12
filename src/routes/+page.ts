import type { Post } from '@prisma/client'

export async function load({ fetch, depends }) {
  const random = Math.round(Math.random() * 30)
  const response = await fetch(`api/posts?limit=${random}`)
  const posts: Post[] = await response.json()

  depends('posts')

  return { posts }
}
