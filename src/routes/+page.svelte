<script lang="ts">
  import { invalidate, invalidateAll } from '$app/navigation'

  function rerunLoadFunction() {
    // a)
    invalidate('posts')

    // b)
    invalidate('api/posts')

    // c)
    invalidate(url => url.href.includes('posts'))

    // d)
    invalidateAll()
  }
</script>

<button on:click={rerunLoadFunction}>Rerun</button>

<!-- ... -->
