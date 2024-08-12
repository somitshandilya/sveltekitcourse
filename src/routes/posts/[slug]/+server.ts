import { error } from '@sveltejs/kit'
import db from '$lib/database'

export async function load({ params, parent }) {
  const post = await db.post.findFirst({
    where: { slug: params.slug }
  })

  if (!post) {
    error(404, 'Post not found')
  }

  return { post }
}
