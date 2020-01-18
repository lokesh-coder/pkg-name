<script>
  import { obs$, sub$ } from "./utils";
  import Styles from "./Styles.svelte";
  import Banner from "./Banner.svelte";
  import Search from "./Search.svelte";
  import Loader from "./Loader.svelte";

  let result = { isLoading: false, error: null };
  let input = "";

  obs$.subscribe(
    data => (result = { ...result, ...data }),
    error => (result = { isLoading: false, error })
  );

  const getMeta = result => {
    const successState = {
      title: input,
      subtitle: "Package name available",
      theme: "success"
    };
    const failureState = {
      title: input,
      subtitle: "Package not available",
      theme: "failure"
    };
    const defaultState = {
      title: "pkg-name",
      subtitle: "check NPM package and org name availability",
      theme: "default"
    };
    const errorState = {
      title: "Got a error",
      subtitle: result.error,
      theme: "error"
    };

    const loadingState = {
      title: "...",
      subtitle: "Loading please wait",
      theme: "loading"
    };

    if (result.isLoading) {
      return loadingState;
    }

    if (input.length == 0) {
      return defaultState;
    }
    if (result.error) {
      return errorState;
    }
    if (!result.error && result.available) {
      return successState;
    }
    if (!result.error && !result.available) {
      return failureState;
    }
  };

  $: res = getMeta(result, input);
</script>

<main class="flex h-screen flex-col">
  <Styles />

  <div class="bg-indigo-100 py-12 px-6 lg:px-0">
    <div class="lg:w-4/12 mx-auto">
      <Search bind:keyword={input} on:query={x => sub$.next(x.detail.query)} />
    </div>
  </div>
  <div class={`flex flex-1 flex-col items-center justify-center  border-t-4`}>
    <div class="lg:w-4/12 mx-auto">
      <Banner
        isLoading={res.isLoading}
        theme={res.theme}
        title={res.title}
        subtitle={res.subtitle} />
    </div>
  </div>
</main>
