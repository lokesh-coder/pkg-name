<script>
  import Styles from "./Styles.svelte";
  import Block from "./Block.svelte";
  let results;

  $: formattedResults = formatResults(results);

  const formatResults = (data = {}) => {
    console.log(Object.entries(data));
    return Object.entries(data);
  };

  const checkAvailability = async (keyCode, names) => {
    if (keyCode != 13) return;
    const response = await fetch(
      `https://pkg-name-api.now.sh/check?pkg=${names}`,
      {
        method: "GET"
      }
    );
    results = await response.json();
  };
</script>

<main class="flex h-screen items-center justify-center flex-col">
  <Styles />
  <div class="w-4/12 mx-auto">
    <div class="text-center mb-10">
      <h3 class="text-3xl text-pink-500 font-bold">pkg-name</h3>
      <h3 class="text-lg text-gray-600">
        Check NPM Package and Org name availability
      </h3>
    </div>

    <div
      class="relative flex items-center bg-gray-300 focus-within:shadow-2xl
      rounded py-2 focus-within:bg-white focus-within:outline-none
      focus-within:border-1 border-gray-500">
      <i class="ri-search-line absolute mx-5 text-gray-800 text-xl" />
      <input
        placeholder="type package names"
        on:keydown={e => checkAvailability(e.keyCode, e.target.value)}
        class=" py-2 px-12 w-full border-none rounded text-blue-800
        focus:outline-none bg-transparent text-xl font-medium" />
    </div>

    <div class="text-center my-6 text-sm text-gray-500">
      saperate with comma. example,
      <span class="text-blue-900">my-pkg,@my-org,random-name</span>
    </div>

    <div class="">
      {#each formattedResults as res}
        <Block name={res[0]} isSuccess={res[1]} />
      {/each}
    </div>
  </div>
</main>
