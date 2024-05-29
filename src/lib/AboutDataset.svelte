<script>
  import Datacollection from "./Datacollection.svelte";
  import Preprocessing from "./Preprocessing.svelte";
  import { Icon } from "svelte-icons-pack";
  import { BsDownload } from "svelte-icons-pack/bs";
</script>

<div
  class="md:flex flex-row items-start md:mx-6 rounded-2xl py-16 px-12 md:space-x-10 relative z-20 justify-between"
>
  <div class="md:w-5/12 text-xs md:sidebar rounded-2xl md:sticky md:top-0">
    <h1 class="text-4xl mb-4 pt-16">About Our Dataset</h1>
    <p class="text-xl mb-8">
      The dataset was collected by scraping posts from Philippine subreddits and
      using keywords related to various forms of gender-based violence for the
      search inputs. The scraped data had 1,900+ rows in total.
    </p>

    <div class="flex flex-wrap gap-4 mb-32">
      <a
        href="data/preprocessed_dataset.csv"
        download
        class="rounded-full bg-gdark px-4 py-2 text-white ease-in-out duration-100 flex items-center justify-center space-x-2 hover:bg-slate-600 hover:shadow-lg"
      >
        <Icon src={BsDownload} />
        <span> preprocessed_dataset.csv </span>
      </a>

      <a
        href="data/ph_holidays.csv"
        class="rounded-full bg-gdark px-4 py-2 text-white ease-in-out duration-100 flex items-center justify-center space-x-2 hover:bg-slate-600 hover:shadow-lg"
      >
        <Icon src={BsDownload} />
        <span> ph_holidays.csv </span>
      </a>
    </div>
  </div>
  <div class="md:w-7/12">
    <div class="relative mb-8">
      <a
        href="https://docs.google.com/spreadsheets/d/1xt632YneUFUZrn8Lc8KlxfnWZYtL25YuKSansk992tc/edit?usp=sharing"
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
