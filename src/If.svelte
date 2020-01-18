<script>
  export let con = false;
  console.log("con", con);
</script>

{#if con}
  <slot />
{/if}
