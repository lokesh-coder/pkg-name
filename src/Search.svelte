<script>
  import { createEventDispatcher } from "svelte";
  export let keyword;
  const dispatch = createEventDispatcher();
  const handler = e => {
    console.log(e.target.value);
    let query = e.target.value;
    dispatch("query", { query });
  };
</script>

<div
  class="relative flex items-center bg-white rounded py-2
  focus-within:outline-none border-2 border-blue-200
  focus-within:border-blue-400 py-4">
  <i class="ri-search-line absolute mx-5 text-blue-800 text-xl" />
  <input
    placeholder="Type here"
    on:keyup={handler}
    bind:value={keyword}
    class="w-full border-none rounded text-blue-800 focus:outline-none
    bg-transparent tracking-wider p-1 px-12 font-medium" />

</div>

<div class="text-center my-1 text-sm text-gray-500">
  for org name use '@' prefix
  <span class="text-blue-900">my-pkg,@my-org,random-name</span>
</div>
