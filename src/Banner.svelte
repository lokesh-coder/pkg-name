<script>
  import Loader from "./Loader.svelte";
  export let theme = "default";
  export let title;
  export let subtitle;

  const themes = {
    loading: "gray-500",
    success: "teal-600",
    failure: "pink-600",
    default: "blue-600",
    error: "red-500"
  };

  const icons = {
    success: "checkbox-circle",
    failure: "close-circle",
    error: "error-warning"
  };

  const commonCls = "w-16 h-16 text-6xl flex items-center";
</script>

<div class="text-center mb-2">
  <div class="mx-auto text-center flex items-center justify-center">

    {#if theme == 'loading'}
      <Loader />
    {:else if theme != 'default'}
      <i class="ri-{icons[theme]}-fill text-{themes[theme]} {commonCls}" />
    {:else}
      <span class=" w-16 h-16 flex p-1">
        <span
          class="bg-{themes[theme]} rounded-full text-white text-5xl block
          w-full h-full flex items-center justify-center font-semibold
          leading-none">
          P
        </span>
      </span>
    {/if}

  </div>

  <h3
    class=" text-6xl font-bold font-display tracking-tight text-{themes[theme]}">
    {title}
  </h3>
  <p class="text-base text-gray-600">{subtitle}</p>
</div>
