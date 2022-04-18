<script>
  import "../styles/tailwind.css";
  import SearchForm from "$lib/components/SearchForm.svelte";
</script>

<main>
  <div class="search-form flex justify-center">
    <SearchForm />
  </div>
  
  <div class="search-results flex flex-row">
    <slot />
  </div>
</main>