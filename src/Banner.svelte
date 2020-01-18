<script>
  import { blur } from "svelte/transition";
  import If from "./If.svelte";
  import Loader from "./Loader.svelte";
  export let title;
  export let subtitle;
  export let theme = "default";
  export let isLoading = false;

  const themes = {
    success: "teal-600",
    failure: "pink-600",
    default: "blue-600",
    error: "red-500"
  };
</script>

<div class="text-center mb-2">
  <div class="mx-auto text-center flex items-center justify-center">
    <If con={isLoading}>
      <Loader />
    </If>
    <If con={!isLoading}>
      <If con={theme == 'success'}>
        <i
          class="ri-checkbox-circle-fill w-16 h-16 text-6xl text-teal-600 flex
          items-center" />
      </If>
      <If con={theme == 'failure'}>
        <i
          class="ri-close-circle-fill w-16 flex h-16 text-6xl text-pink-600 flex
          items-center" />
      </If>
      <If con={theme == 'error'}>
        <i
          class="ri-error-warning-fill w-16 flex h-16 text-6xl text-red-500 flex
          items-center" />
      </If>
      <If con={theme == 'default'}>
        <span class=" w-16 h-16 flex p-1">
          <span
            class="bg-blue-800 rounded-full text-white text-5xl block w-full
            h-full flex items-center justify-center font-semibold leading-none">
            P
          </span>
        </span>
      </If>
    </If>
  </div>

  <h3
    class=" text-6xl font-bold font-display tracking-tight text-{themes[theme]}">
    {title}
  </h3>
  <p class="text-base text-gray-600">{subtitle}</p>
</div>
