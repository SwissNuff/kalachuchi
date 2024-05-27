<script>
  import Datacollection from "./Datacollection.svelte";
  import Preprocessing from "./Preprocessing.svelte";
</script>

<div
  class="flex flex-row items-start mx-6 rounded-2xl py-16 px-12 space-x-10 relative z-20 justify-between"
>
  <div class="w-5/12 text-xs sidebar rounded-2xl sticky top-0">
    <h1 class="text-4xl mb-4 pt-16">About Our Dataset</h1>
    <p class="text-xl">
      The dataset was collected by scraping posts from Philippine subreddits and
      using keywords related to various forms of gender-based violence for the
      search inputs. The scraped data had 1,900+ rows in total.
    </p>
  </div>
  <div class="w-7/12">
    <div class="relative mb-8">
      <a
        href="/"
        class="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300 rounded-md"
      >
        <p class="mx-auto underline text-primary">EXPLORE DATASET</p>
      </a>
      <a href="/" class="relative">
        <div class="flex flex-wrap content-center">
          <img
            src="image/DatasetTable.png"
            alt="A dataset containing different data"
            class="shadow-lg transition-opacity duration-300 hover:opacity-80 rounded-md"
          />
        </div>
      </a>
    </div>
    <Datacollection />
    <Preprocessing />
  </div>
</div>

<style>
  .sidebar {
    position: sticky;
    top: 0;
  }
</style>
