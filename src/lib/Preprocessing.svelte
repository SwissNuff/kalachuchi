<script>
  let isExpanded = false;
  import { Icon } from "svelte-icons-pack";
  import { FaSolidChevronDown, FaSolidChevronUp } from "svelte-icons-pack/fa";
</script>

<div class="bg-white px-12 py-14 rounded-lg shadow-lg mt-16 space-y-4">
  <h2 class="text-4xl">Preprocessing</h2>

  <p>
    Our preprocessing efforts aim to refine the raw dataset into a clean,
    analyzable format that supports reliable data analysis and insight
    generation. This process ensures data quality and facilitates effective data
    exploration.
  </p>

  <h2 class="text-2xl">Steps in Preprocessing</h2>

  <h3 class="font-normal tracking-wide">1. Cleaning Text Data</h3>
  <ul>
    <li>
      We strip out irrelevant characters, such as URLs, special characters, and
      formatting elements from the posts' titles and bodies to focus purely on
      textual content.
    </li>
    <li>
      Text data is converted to a uniform case (all lower case) to ensure
      consistency across all text entries.
    </li>
  </ul>
  {#if isExpanded === true}
    <h3 class="font-normal tracking-wide">2. Handling Missing Values:</h3>
    <ul>
      <li>
        We first identify columns with missing values. In our dataset, the
        'body' field sometimes lacks data due to deleted or removed posts.
      </li>
      <li>
        For fields essential to our analysis like 'body', we remove entries
        where this data is missing to maintain the integrity of our analysis.
      </li>
    </ul>

    <h3 class="font-normal tracking-wide">
      3. Tokenization and Removal of Stop Words
    </h3>
    <ul>
      <li>
        We break down the text into individual words or tokens to analyze the
        frequency and presence of certain terms related to gender-based
        violence.
      </li>
      <li>
        Common English words that do not contribute to our specific analysis
        (such as 'the', 'is', 'at') are removed using a predefined list from the
        NLTK library.
      </li>
    </ul>

    <h3 class="font-normal tracking-wide">4. Feature Engineering</h3>
    <ul>
      <li>
        Where available, we extract age and gender information mentioned within
        the post to analyze demographic patterns.
      </li>
      <li>
        We derive several time-related features from the 'created' timestamp,
        including year, month, day, and time of day, to explore trends over
        time.
      </li>
      <li>
        We calculate the length of each post after cleaning to quantify the
        amount of content and analyze its relation to user engagement.
      </li>
    </ul>

    <div id="more-content" style="display: none;">
      <h3 class="font-normal tracking-wide">5. Categorization of Data</h3>
      <p>
        Using the initial search inputs used to scrape data, each post is tagged
        with keywords that represent the type of violence discussed, aiding in
        categorical analysis.
      </p>

      <h3 class="font-normal tracking-wide">6. Engagement Metrics</h3>
      <ul>
        <li>
          We normalize upvotes by the average upvotes per month to identify
          posts that have unusually high engagement relative to typical
          subreddit activity.
        </li>
        <li>
          Considering the size of each subreddit, we calculate upvotes per
          capita to determine engagement efficiency relative to the community
          size.
        </li>
      </ul>

      <h3 class="font-normal tracking-wide">7. Outlier Detection</h3>
      <p>
        While we recognize that outliers can skew data analysis, they often
        contain valuable insights about extreme cases or highly impactful posts.
        We examine these outliers to understand their context and decide on a
        case-by-case basis whether to include them in the final analysis.
      </p>
    </div>
  {/if}
  <button
    class="hover:text-primary text-lg text-slate-700 downicon flex items-center justify-center"
    on:click={() => (isExpanded = !isExpanded)}
  >
    {#if isExpanded === false}
      <Icon src={FaSolidChevronDown} />
    {/if}
    {#if isExpanded === true}
      <Icon src={FaSolidChevronUp} />
    {/if}
    {isExpanded ? "Read Less" : "Read More"}
  </button>
</div>

<style>
  button {
    display: flex;
    gap: 4px;
    padding: 0;
    cursor: pointer;
  }
</style>
