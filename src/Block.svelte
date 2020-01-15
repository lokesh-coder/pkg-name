<script>
  export let name;
  export let isSuccess = false;
</script>

<div
  class={`flex my-4 items-center justify-between px-4 py-2 rounded shadow-lg ${isSuccess ? 'bg-green-500' : 'bg-red-600'}`}>
  {#if isSuccess}
    <i class="ri-checkbox-circle-line text-green-300 text-xl" />
  {:else}
    <i class="ri-close-circle-line text-red-300 text-xl" />
  {/if}
  <span class="text-white text-xl flex-1 ml-2">{name}</span>
  {#if isSuccess}
    <span class="text-green-100 uppercase text-xs font-medium">available</span>
  {:else}
    <span class="text-red-100 uppercase text-xs font-medium">
      not available
    </span>
  {/if}
</div>
