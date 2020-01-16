<script>
  export let name;
  export let isSuccess = false;
</script>

<div
  class={`flex my-4 items-center justify-between px-4 py-2 rounded shadow-lg ${isSuccess ? 'bg-teal-500' : 'bg-pink-600'}`}>
  {#if isSuccess}
    <i class="ri-checkbox-circle-line text-teal-300 text-xl" />
  {:else}
    <i class="ri-close-circle-line text-pink-300 text-xl" />
  {/if}
  <span class="text-white text-xl flex-1 ml-2">{name}</span>
  {#if isSuccess}
    <span class="text-teal-100 uppercase text-xs font-medium">available</span>
  {:else}
    <span class="text-pink-100 uppercase text-xs font-medium">
      not available
    </span>
  {/if}
</div>
