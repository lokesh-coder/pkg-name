<script>
  import { createEventDispatcher } from "svelte";
  export let keyword;
  const dispatch = createEventDispatcher();
  const handler = e => {
    let query = e.target.value;
    dispatch("query", { query });
  };
</script>

<div
  class="relative flex items-center bg-white rounded-full
  focus-within:outline-none border-2 border-blue-200
  focus-within:border-blue-400 py-2">
  <i class="ri-search-line absolute mx-5 text-blue-500 text-xl" />
  <input
    placeholder="package name..."
    on:keyup={handler}
    bind:value={keyword}
    spellcheck="false"
    class="w-full border-none rounded text-blue-800 focus:outline-none
    bg-transparent tracking-tight p-1 px-12 font-bold text-3xl leading-none
    text-center" />
  {#if keyword.length >= 1}
    <i
      class="ri-close-circle-fill absolute mx-5 text-gray-400 text-2xl right-0
      cursor-pointer hover:text-red-500"
      on:click={() => (keyword = '')} />
  {/if}

</div>

<div class="text-center my-1 text-sm text-gray-500">
  for org name use '@' prefix
  <span class="text-blue-900">my-pkg, @my-org</span>
</div>
