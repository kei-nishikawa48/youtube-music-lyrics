<script>
  import "../styles/tailwind.css";
  import SearchForm from "$lib/components/SearchForm.svelte";
</script>

<div class="search-form">
  <SearchForm />
</div>

<div class="search-results">
  <slot />
</div>

