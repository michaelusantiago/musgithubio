<script lang="ts">
  import Home from "./routes/Home.svelte"
  import CV from "./routes/CV.svelte";
  import NotFound from './routes/NotFound.svelte'
  import Router from "svelte-spa-router"

  const routes = {
    "/": Home,
    "/cv": CV, 
    "*": NotFound,
  }
</script>

<main>
  <Router {routes}/>
</main>