<script>
  import Loader from "./Loader.svelte";
  export let theme = "default";
  export let title;
  export let subtitle;

  const themes = {
    loading: "text-gray-500",
    success: "text-teal-600",
    failure: "text-pink-600",
    default: "text-blue-600",
    error: "text-red-500"
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
      <i class="ri-{icons[theme]}-fill {themes[theme]} {commonCls}" />
    {:else}
      <span class=" w-16 h-16 flex p-1">
        <span
          class="bg-blue-600 rounded-full text-white text-5xl block w-full
          h-full flex items-center justify-center font-semibold leading-none">
          P
        </span>
      </span>
    {/if}

  </div>

  <h3 class=" text-6xl font-bold font-display tracking-tight {themes[theme]}">
    {title}
  </h3>
  <p class="text-base text-gray-600">{subtitle}</p>
</div>
