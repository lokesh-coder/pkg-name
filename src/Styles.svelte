<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* purgecss start ignore */

  body {
    padding: 0;
    transition: all 0.5s ease;
  }

  .smooth {
    transition: all 0.5s ease;
  }

  input::placeholder {
    @apply .text-gray-500 !important;
    font-weight: 400 !important;
    font-size: 18px !important;
    line-height: 50px;
    vertical-align: middle;
    position: relative;
    top: -5px;
  }

  /* purgecss end ignore */
</style>
