<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* purgecss start ignore */

  @import url("https://fonts.googleapis.com/css?family=Alata|Alfa+Slab+One|Sulphur+Point:300,400,700&display=swap");
  @import url("https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css");

  body {
    @apply .bg-gray-100;
    padding: 0;
    transition: all 0.5s ease;
  }

  input::placeholder {
    @apply .text-gray-500 !important;
  }

  .icon-search {
    box-sizing: border-box;
    position: relative;
    display: block;
    transform: scale(var(--ggs, 1));
    width: 16px;
    height: 16px;
    border: 2px solid;
    border-radius: 100%;
    margin-top: -4px;
  }
  .icon-search::after {
    content: "";
    display: block;
    box-sizing: border-box;
    position: absolute;
    border-radius: 3px;
    width: 2px;
    height: 8px;
    background: currentColor;
    transform: rotate(-45deg);
    top: 10px;
    left: 12px;
  }

  /* purgecss end ignore */
</style>
