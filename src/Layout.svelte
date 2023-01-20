<script>
  import { Route } from "svelte-router-spa";
  import Contact from "./components/Contact.svelte";
  import Footer from "./components/Footer.svelte";
  import Header from "./components/Header.svelte";

  export let currentRoute;
</script>

<Header {currentRoute} />
<Route {currentRoute} />
<Footer {currentRoute} />
<Contact />
