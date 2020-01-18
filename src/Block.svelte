<script>
  export let data;
</script>

<div class={`flex my-4 items-center justify-between px-4 py-2 flex-col`}>
  <span
    class={`text-white text-6xl font-bold font-display tracking-tight flex-1 ml-2 ${data.available ? 'text-teal-500' : 'text-pink-600'}`}>
    {data.name}
  </span>
  {#if data.available}
    <span class="text-gray-500 uppercase text-xs font-medium">
      package name available!
    </span>
  {:else}
    <span class="text-gray-900 uppercase text-xs font-medium">
      OOPs! name already taken!
    </span>
  {/if}
</div>
