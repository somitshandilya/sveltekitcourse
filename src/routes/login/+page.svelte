<script lang="ts">
    import { enhance } from '$app/forms'
  </script>
  
  <h1>Login</h1>
  
  <form method="POST" action="?/login" use:enhance>
    <input type="text" name="name" />
    <input type="password" name="password" />
    <button>Login</button>
  </form>
  