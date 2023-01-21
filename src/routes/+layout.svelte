<script lang="ts">
  import "@/style/style.css";
  import Contact from "@/components/Contact.svelte";
  import Footer from "@/components/Footer.svelte";
  import Header from "@/components/Header.svelte";
</script>

<Header />
<slot />
<Footer />
<Contact />
