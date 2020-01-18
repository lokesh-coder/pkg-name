<style>
  div {
    position: relative;
    display: inline-block;
    width: 64px;
    height: 64px;
  }
  span {
    position: absolute;
    left: 0;
    top: 0;
  }
  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .spin {
    line-height: 1;
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
    animation-duration: 500ms;
  }

  span:nth-child(1) .spin {
    animation-duration: 1500ms;
  }
  span:nth-child(2) .spin {
    animation-duration: 600ms;
  }
  span:nth-child(3) .spin {
    animation-duration: 700ms;
  }
  span:nth-child(4) .spin {
    animation-duration: 800ms;
  }
  span:nth-child(5) .spin {
    animation-duration: 900ms;
  }
</style>

<div>
  {#each ['text-indigo-500', 'text-blue-500', 'text-pink-500', 'text-orange-500', 'text-green-500'] as item}
    <span>
      <i class="ri-loader-5-fill text-6xl spin {item}"></i>
    </span>
  {/each}
</div>
