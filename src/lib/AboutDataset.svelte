<script>
  import DatasetTable from "./DatasetTable.svelte";
</script>

<div
  class="flex flex-row align-center mx-6 rounded-2xl py-16 px-20 space-y-2 space-x-10"
>
  <div class="w-4/12 text-xs">
    <h1>About Our Dataset</h1>

    <p class="text-xl">
      The dataset was collected by scraping posts from Philippine subreddits and
      using keywords related to various forms of gender-based violence for the
      search inputs. The scraped data had 1,900+ rows in total.
    </p>
    <h3>Description of the Data Set</h3>
    <p>
      The dataset consists of Reddit posts collected from the following
      subreddits:
    </p>
    <ul>
      <li>alasjuicy</li>
      <li>MentalHealthPH</li>
      <li>OffmychestPH</li>
      <li>Philippines</li>
      <li>relationship_advicePH</li>
    </ul>

    <p>
      The posts were scraped using the Python Reddit API Wrapper (praw) and
      Jupyter Notebook.
    </p>
  </div>
  <div class="w-8/12">
    <a href="/">
      <img
        src="image/DatasetTable.png"
        alt="A dataset containing different data"
        class="shadow-md"
      />
    </a>
  </div>
</div>
