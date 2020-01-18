<script>
  import { obs$, sub$ } from "./utils";
  import { fly } from "svelte/transition";
  import Styles from "./Styles.svelte";
  import Search from "./Search.svelte";
  import Block from "./Block.svelte";
  import Loader from "./Loader.svelte";
  let result = { isLoading: false, error: null };
  let input = "";

  $: cleared = input.length == 0;

  obs$.subscribe(
    data => {
      console.log("received", data);
      result = { ...result, ...data };
    },
    error => {
      console.log("error", error);
      result = { isLoading: false, error };
    }
  );
</script>

<main class="flex h-screen flex-col">
  <Styles />

  <div class="bg-indigo-100 py-12 px-6 lg:px-0">
    <div class="lg:w-4/12 mx-auto">
      <Search bind:keyword={input} on:query={x => sub$.next(x.detail.query)} />
    </div>
  </div>
  <div class="flex flex-1 flex-col items-center justify-center ">
    <div class="lg:w-4/12 mx-auto">
      {#if result.isLoading}
        <div
          class="mx-auto text-center smooth"
          transition:fly={{ y: -100, duration: 100 }}>
          <Loader />
        </div>
      {/if}
      {#if input.length == 0}
        <div
          class="text-center mb-2 smooth"
          transition:fly={{ y: -100, duration: 100 }}>
          <h3
            class="text-6xl text-blue-600 font-bold font-display tracking-tight">
            pkg-name
          </h3>
          <h3 class="text-base text-gray-500">
            check NPM package and org name availability
          </h3>
        </div>
      {/if}

      {#if result.error}
        <div class="text-red-500 text-center my-4">{result.error}</div>
      {/if}

      {#if result.name && !result.error && !cleared}
        <div class="smooth" transition:fly={{ y: 100, duration: 100 }}>
          <Block data={result} />
        </div>
      {/if}
    </div>

  </div>

</main>
