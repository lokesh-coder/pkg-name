<script>
  import { createEventDispatcher } from "svelte";
  let addedItems = [];
  let inputValue;
  let inputEl;
  const dispatch = createEventDispatcher();
  const addHandler = e => {
    console.log(e.target.value);
    if (e.keyCode == 8 && !e.target.value) {
      addedItems = addedItems.slice(0, -1);
      return;
    }

    if (e.target.value.slice(-1) == ",") {
      addedItems = [...addedItems, e.target.value.slice(0, -1)];
      inputValue = null;
    }
    if (e.keyCode == 13) {
      addedItems = [...addedItems, e.target.value];
      let query = addedItems.join(",");
      addedItems = [];
      inputValue = null;
      dispatch("query", { query });
    }
  };
  const removeItemHandler = (e, item) => {
    e.preventDefault();
    addedItems = addedItems.filter(x => x !== item);
  };
  const extraSpaceClickHandler = () => {
    inputEl.focus();
  };
</script>

<div
  class="relative flex items-center bg-gray-300 focus-within:shadow-2xl rounded
  py-2 focus-within:bg-white focus-within:outline-none focus-within:border-1
  border-gray-500 py-4"
  on:click={extraSpaceClickHandler}>
  <i class="ri-search-line absolute mx-5 text-blue-800 text-xl" />
  <div class="pl-12 flex flex-wrap w-full">
    {#each addedItems as item}
      <div
        class="bg-blue-600 text-white px-2 py-2 rounded-sm m-1 text-sm
        leading-none font-medium">
        {item}
        <span on:click={e => removeItemHandler(e, item)}>(C)</span>
      </div>
    {/each}
    <input
      placeholder="type here"
      on:keyup={addHandler}
      bind:value={inputValue}
      bind:this={inputEl}
      class="w-24 max-w-full border-none rounded text-blue-800
      focus:outline-none bg-transparent text-xl font-display tracking-wider" />
    <div class="flex-1" on:click={extraSpaceClickHandler} />
  </div>

</div>
