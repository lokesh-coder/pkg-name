<script>
  import { fly } from "svelte/transition";
  import Styles from "./Styles.svelte";
  import Search from "./Search.svelte";
  import Block from "./Block.svelte";
  let results;
  let error;

  $: formattedResults = formatResults(results);

  const formatResults = (data = {}) => {
    if (!data) return;
    return Object.entries(data);
  };

  const checkAvailability = async keyword => {
    try {
      const response = await fetch(
        `https://pkg-name-api.now.sh/check?pkg=${keyword}`,
        {
          method: "GET"
        }
      );
      results = await response.json();
      error = null;
    } catch (e) {
      console.log(e);
      error = e;
      results = null;
    }
  };

  const searchHandler = ({ detail: { query } }) => {
    console.log("you searchbed for", query);
    checkAvailability(query).then(x => {});
  };
</script>

<main class="flex h-screen items-center justify-center flex-col">
  <Styles />
  <div class="lg:w-4/12 mx-auto">
    <div class="text-center mb-10">
      <h3 class="text-6xl text-blue-600 font-display">pkg-name</h3>
      <h3 class="text-base text-gray-500">
        check NPM package and org name availability
      </h3>
    </div>

    <div>
      <Search on:query={searchHandler} />
    </div>

    <div class="text-center my-6 text-sm text-gray-500">
      saperate with comma. example,
      <span class="text-blue-900">my-pkg,@my-org,random-name</span>
    </div>

    {#if error}
      <div class="text-red-500 text-center my-4">
        Something went wrong. {error}
      </div>
    {/if}

    {#if formattedResults}
      <div class="">
        {#each formattedResults as res}
          <div transition:fly={{ y: 200, duration: 500 }}>
            <Block name={res[0]} isSuccess={res[1]} />
          </div>
        {/each}
      </div>
    {/if}
  </div>
</main>
