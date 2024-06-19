<script>
  let activeSection = "overview";

  function showSection(section) {
    activeSection = section;
  }
</script>

<div
  class="flex flex-col align-center mx-6 bg-white rounded-2xl py-16 px-8 md:px-48 space-y-2"
>
  <h1 class="text-center text-4xl md:text-6xl background">
    Our Research Focus
  </h1>
  <div class="nav-links text-center space-x-2 text-lg">
    <button
      class={activeSection === "overview" ? "active" : ""}
      on:click={() => showSection("overview")}
    >
      Overview
    </button>

    <button
      class={activeSection === "problem" ? "active" : ""}
      on:click={() => showSection("problem")}
    >
      Problem
    </button>

    <button
      class={activeSection === "hypothesis" ? "active" : ""}
      on:click={() => showSection("hypothesis")}
    >
      Hypothesis
    </button>

    <button
      class={activeSection === "solution" ? "active" : ""}
      on:click={() => showSection("solution")}
    >
      Solution
    </button>
  </div>

  <div class="pt-8 md:text-xl">
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
      <p>We hypothesize that:</p>
      <br />
      <ul>
        <li>
          <b>Content Variation</b> — Posts about gender-based violence will show
          significant variations in engagement and content type based on demographics
          and the time of posting.
        </li>
        <li>
          <b>Vulnerability Indicators</b> — Certain times or demographics may be
          more vulnerable, as indicated by higher frequencies of reported incidents.
        </li>
        <li>
          <b>Engagement Patterns</b> — Specific types of posts, perhaps those with
          more personal stories or calls for help, may receive higher community engagement,
          indicating a greater collective response.
        </li>
        <li>
          <b>Keyword Patterns </b>— Some words may be more commonly used in
          certain contexts which could provide insights on the general outlook
          of the community on gender-based violence topics.
        </li>
      </ul>
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
  .nav-links button.active {
    font-weight: 400;
    color: var(--ggray);
    --underline-width: 100%;
  }

  button {
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

  button:hover {
    --underline-width: 100%;
  }
</style>
