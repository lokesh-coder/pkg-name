<style global>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  /* purgecss start ignore */

  @import url("https://fonts.googleapis.com/css?family=Alata|Alfa+Slab+One|Sulphur+Point:300,400,700&display=swap");
  @import url("https://cdn.jsdelivr.net/npm/remixicon@2.2.0/fonts/remixicon.css");

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
  /* 
  .spin {
    display: inline-block;
    transition: all 0.5s ease;
    animation-name: rotate;
    animation-duration: 1.5s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-direction: inherit;
    animation-iteration-count: infinite;
    animation-fill-mode: none;
    animation-play-state: running;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  } */

  /* purgecss end ignore */
</style>
