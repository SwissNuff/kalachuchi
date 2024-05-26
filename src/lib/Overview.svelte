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
  <div class="nav-links text-center">
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

  <div class="text-center pt-8 text-xl">
    {#if activeSection === "overview"}
      Gender-based violence remains a pervasive issue worldwide, with social
      media platforms often becoming arenas where such incidents are discussed
      and disclosed. Our project focuses on understanding the narratives around
      gender-based violence within Filipino Reddit communities, looking for
      patterns that might inform better responses and preventative measures.
    {/if}
    {#if activeSection === "problem"}
      <ul>
        <li>
          What is the nature of gender-based violence shared by Redditors on
          PH-based subreddits?
        </li>
        <li>
          Are there demographic, geographic, or date-related patterns in the
          experiences shared?
        </li>
        <li>
          What type of posts receive the most community engagement based on
          upvotes?
        </li>
      </ul>
    {/if}

    {#if activeSection === "hypothesis"}
      <p>
        We hypothesize that posts about gender-based violence show significant
        variations in engagement and content type depending on the demographic
        and date of posting, highlighting specific times or demographics that
        might be more vulnerable.
      </p>
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
  .nav-links a {
    margin-right: 15px;
    cursor: pointer;
    text-decoration: none;
    color: #a6a9ac;
    font-size: x-large;
  }
  .nav-links a.active {
    text-decoration: underline;
    font-weight: 400;
    color: var(--ggray);
  }
</style>
