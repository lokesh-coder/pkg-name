<style>
  .container {
    @apply relative flex items-center bg-white rounded-full border-2 border-blue-200 py-2;
  }
  .container:focus-within {
    @apply outline-none border-blue-400;
  }
  input {
    @apply w-full border-none rounded text-blue-800 bg-transparent tracking-tight p-1 px-12 font-bold text-3xl leading-none text-center;
  }
  input:focus {
    @apply outline-none;
  }
  .clear-icon {
    @apply absolute mx-4 text-gray-400 text-3xl right-0 cursor-pointer;
  }
  .clear-icon:hover {
    @apply text-red-500;
  }
</style>

<script>
  import { createEventDispatcher } from 'svelte';
  export let keyword;
  const dispatch = createEventDispatcher();
  const handler = e => {
    let query = e.target.value;
    dispatch('query', { query });
  };
</script>

<div class="container">
  <i class="ri-search-line absolute mx-4 text-blue-400 text-2xl"></i>
  <input
    placeholder="package name..."
    on:keyup="{handler}"
    bind:value="{keyword}"
    spellcheck="false"
    class="input"
  />
  {#if keyword.length >= 1}
    <i
      class="clear-icon ri-close-circle-fill"
      on:click="{() => (keyword = '')}"
    ></i>
  {/if}

</div>

<div class="text-center my-1 text-sm text-gray-500">
  for org name use '@' prefix
  <span class="text-blue-900">my-pkg, @my-org</span>
</div>
