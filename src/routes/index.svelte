<script>
    import SearchForm from '../lib/components/SearchForm.svelte'

    let searchWord = '';

    const handleSubmit = () => {
        console.log(searchWord)
    }

</script>

<h1>Welcome to SvelteKit</h1>

<form on:submit|preventDefault={handleSubmit}>
    <SearchForm bind:value={searchWord} />
</form>