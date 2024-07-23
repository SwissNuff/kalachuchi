<!-- Dropdown.svelte -->
<script>
  import { slide } from "svelte/transition";
  export let title;
  export let isOpen;

  function toggle() {
    isOpen = !isOpen;
  }
</script>

<button
  class="pt-3 dropdown flex justify-between align-center"
  on:click={toggle}
>
  <h2 class="md:text-2xl font-semibold tracking-widest lowercase">
    {title}
  </h2>
  <h2 class="md:text-4xl tracking-widest lowercase pr-4">
    {isOpen ? "-" : "+"}
  </h2>
</button>
<div class="dropdown-content md:text-base text-sm">
  {#if isOpen}
    <div
      class="px-4 dropdown-content-wrapper text-neutral-800 space-y-3"
      transition:slide
    >
      <slot></slot>
    </div>
  {/if}
</div>

<style>
  .dropdown {
    text-align: left;
    position: relative;
  }
  .dropdown-content-wrapper {
    overflow: hidden;
    padding-bottom: 1em;
  }

  .dropdown-content {
    display: block;
    border-bottom: 1px solid;
  }
</style>
