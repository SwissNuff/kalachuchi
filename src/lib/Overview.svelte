<script>
  let activeSection = "overview";

  function showSection(section) {
    activeSection = section;
  }
</script>

<div
  class="flex flex-col align-center mx-6 bg-white rounded-2xl py-16 px-48 space-y-2"
>
  <h1 class="text-center">Our Research Focus</h1>
  <div class="nav-links text-center space-x-2">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
      class={activeSection === "overview" ? "active" : ""}
      on:click={() => showSection("overview")}
    >
      Overview
    </a>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
      class={activeSection === "problem" ? "active" : ""}
      on:click={() => showSection("problem")}
    >
      Problem
    </a>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
      class={activeSection === "hypothesis" ? "active" : ""}
      on:click={() => showSection("hypothesis")}
    >
      Hypothesis
    </a>
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-missing-attribute -->
    <!-- svelte-ignore a11y-no-static-element-interactions -->
    <a
      class={activeSection === "solution" ? "active" : ""}
      on:click={() => showSection("solution")}
    >
      Solution
    </a>
  </div>

  <div class="pt-8 text-xl">
    {#if activeSection === "overview"}
      Gender-based violence is a critical issue that affects communities
      worldwide, and social media platforms often become spaces where these
      experiences are shared. Our project focuses on analyzing narratives around
      gender-based violence within Filipino Reddit communities. By examining
      these discussions, we aim to identify patterns and insights that could
      inform better responses and preventative measures.
    {/if}
    {#if activeSection === "problem"}
      Gender-based violence is a pervasive and distressing issue that affects
      individuals across the globe. In the digital age, social media platforms
      have become pivotal spaces where people share their experiences and seek
      support. This project specifically examines narratives of gender-based
      violence within Filipino Reddit communities, aiming to uncover underlying
      patterns and trends that could inform more effective responses and
      prevention strategies.
    {/if}

    {#if activeSection === "hypothesis"}
      We hypothesize that posts about gender-based violence show significant
      variations in engagement and content type depending on the demographic and
      date of posting, highlighting specific times or demographics that might be
      more vulnerable.
    {/if}

    {#if activeSection === "solution"}
      <p>
        We propose to methodically analyze Reddit posts to uncover patterns and
        insights that can help in understanding and mitigating gender-based
        violence among the Filipino Reddit community. This includes examining
        the frequency of discussions, the context in which they occur, and the
        impact of community response on these posts.
      </p>
    {/if}
  </div>
</div>

<style>
  .nav-links a.active {
    font-weight: 400;
    color: var(--ggray);
  }

  a {
    cursor: pointer;
    text-decoration: none;
    color: #818486;
    font-size: 1.2em;
    background: linear-gradient(currentColor 0 0) bottom left/
      var(--underline-width, 0%) 0.1em no-repeat;
    display: inline-block;
    padding: 0 0.2em 0.1em;
    text-decoration: none;
    transition: background-size 0.3s;
  }

  a:hover {
    --underline-width: 100%;
  }
</style>
