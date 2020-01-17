<script>
  import { fly } from "svelte/transition";
  import Styles from "./Styles.svelte";
  import Search from "./Search.svelte";
  import Block from "./Block.svelte";
  let result;
  let input = "";
  let error;

  const formatResult = res => {
    if (!data) return;
    return Object.entries(data)[0];
  };

  const checkAvailability = async keyword => {
    try {
      const response = await fetch(
        `https://pkg-name-api.now.sh/check?pkg=${keyword}`,
        {
          method: "GET"
        }
      );
      result = await response.json();
      error = null;
    } catch (e) {
      console.log(e);
      error = e;
      result = null;
    }
  };

  const searchHandler = ({ detail: { query } }) => {
    console.log("you searchbed for", query);
    checkAvailability(query).then(x => {});
  };
</script>

<main class="flex h-screen flex-col">
  <Styles />

  <div class="bg-blue-100 py-12 px-6 lg:px-0">
    <div class="lg:w-4/12 mx-auto">
      <Search bind:keyword={input} on:query={searchHandler} />
    </div>
  </div>
  <div class="flex flex-1 flex-col items-center justify-center ">
    <div class="lg:w-4/12 mx-auto">
      {#if input.length == 0}
        <div class="text-center mb-2">
          <h3 class="text-6xl text-blue-600 font-display">pkg-name</h3>
          <h3 class="text-base text-gray-500">
            check NPM package and org name availability
          </h3>
        </div>
      {/if}

      {#if result && result.error}
        <div class="text-red-500 text-center my-4">{result.error}</div>
      {/if}

      {#if result && !result.error}
        <div transition:fly={{ y: 200, duration: 500 }}>
          <Block data={result} />
        </div>
      {/if}
    </div>

  </div>

</main>
