<script>
  import Counter from "./lib/Counter.svelte";
</script>

<main>
  <section>
    <h1>SPEAK OUT AND BE HEARD</h1>
    <h2>
      Uncovering the Shadows of Gender-Based Violence Among Filipino Redditors
    </h2>
    <p>
      This initiative seeks to explore and expose the experiences of
      gender-based violence as shared by individuals in Filipino Reddit
      communities. Our project analyzes the nature of these experiences,
      investigates patterns based on demographics, geography, and special dates,
      and examines the impact of community engagement on these critical issues.
    </p>
  </section>

  <h1>Our Research Focus 🔍</h1>

  <h2>Overview</h2>
  <p>
    Gender-based violence remains a pervasive issue worldwide, with social media
    platforms often becoming arenas where such incidents are discussed and
    disclosed. Our project focuses on understanding the narratives around
    gender-based violence within Filipino Reddit communities, looking for
    patterns that might inform better responses and preventative measures.
  </p>

  <h2>Problem</h2>
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
      What type of posts receive the most community engagement based on upvotes?
    </li>
  </ul>

  <h2>Hypotheses</h2>
  <p>
    We hypothesize that posts about gender-based violence show significant
    variations in engagement and content type depending on the demographic and
    date of posting, highlighting specific times or demographics that might be
    more vulnerable.
  </p>

  <h2>Solution</h2>
  <p>
    We propose to methodically analyze Reddit posts to uncover patterns and
    insights that can help in understanding and mitigating gender-based violence
    among the Filipino Reddit community. This includes examining the frequency
    of discussions, the context in which they occur, and the impact of community
    response on these posts.
  </p>

  <h1>About Our Dataset 📖</h1>

  <p>
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

  <h3>Data Collection Process</h3>

  <h4>Web Scraping and Search Inputs</h4>
  <p>
    The posts were filtered based on specific search inputs related to different
    forms of gender-based violence. The search inputs used are as follows:
  </p>
  <ol>
    <li>abused</li>
    <li>sexual harassment</li>
    <li>Cyberbullying</li>
    <li>domestic violence</li>
    <li>emotional abuse</li>
    <li>physical abuse</li>
    <li>unsolicited pics</li>
    <li>stalking</li>
  </ol>

  <h4>Dataset Size</h4>
  <p>The originally scraped data set contains:</p>
  <ul>
    <li><strong>title</strong>: The title of the post.</li>
    <li><strong>body</strong>: The main content of the post.</li>
    <li><strong>link</strong>: The link URL that directs to the post.</li>
    <li><strong>author</strong>: Author of the post</li>
    <li><strong>created</strong>: Date when the post was created.</li>
    <li>
      <strong>subreddit</strong>: The subreddit from which the post originated.
    </li>
    <li>
      <strong>searchinput</strong>: The keyword used for the search input.
    </li>
  </ul>

  <h1>Preprocessing Details 📝</h1>

  <h2>Objective of Preprocessing</h2>
  <p>
    Our preprocessing efforts aim to refine the raw dataset into a clean,
    analyzable format that supports reliable data analysis and insight
    generation. This process ensures data quality and facilitates effective data
    exploration.
  </p>

  <h2>Steps in Preprocessing</h2>

  <h3>1. Cleaning Text Data</h3>
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

  <h3>2. Handling Missing Values:</h3>
  <ul>
    <li>
      We first identify columns with missing values. In our dataset, the 'body'
      field sometimes lacks data due to deleted or removed posts.
    </li>
    <li>
      For fields essential to our analysis like 'body', we remove entries where
      this data is missing to maintain the integrity of our analysis.
    </li>
  </ul>

  <h3>3. Tokenization and Removal of Stop Words</h3>
  <ul>
    <li>
      We break down the text into individual words or tokens to analyze the
      frequency and presence of certain terms related to gender-based violence.
    </li>
    <li>
      Common English words that do not contribute to our specific analysis (such
      as 'the', 'is', 'at') are removed using a predefined list from the NLTK
      library.
    </li>
  </ul>

  <h3>4. Feature Engineering</h3>
  <ul>
    <li>
      Where available, we extract age and gender information mentioned within
      the post to analyze demographic patterns.
    </li>
    <li>
      We derive several time-related features from the 'created' timestamp,
      including year, month, day, and time of day, to explore trends over time.
    </li>
    <li>
      We calculate the length of each post after cleaning to quantify the amount
      of content and analyze its relation to user engagement.
    </li>
  </ul>

  <h3>5. Categorization of Data</h3>
  <p>
    Using the initial search inputs used to scrape data, each post is tagged
    with keywords that represent the type of violence discussed, aiding in
    categorical analysis.
  </p>

  <h3>6. Engagement Metrics</h3>
  <ul>
    <li>
      We normalize upvotes by the average upvotes per month to identify posts
      that have unusually high engagement relative to typical subreddit
      activity.
    </li>
    <li>
      Considering the size of each subreddit, we calculate upvotes per capita to
      determine engagement efficiency relative to the community size.
    </li>
  </ul>

  <h3>7. Outlier Detection</h3>
  <p>
    While we recognize that outliers can skew data analysis, they often contain
    valuable insights about extreme cases or highly impactful posts. We examine
    these outliers to understand their context and decide on a case-by-case
    basis whether to include them in the final analysis.
  </p>

  <h1>Explore Our Data 💡</h1>

  <p>
    <a
      href="https://docs.google.com/spreadsheets/d/1xt632YneUFUZrn8Lc8KlxfnWZYtL25YuKSansk992tc/edit?usp=sharing"
      >View our preprocessed dataset here</a
    >
  </p>

  <p>
    <a href="https://github.com/cessbub/cs132-project"
      >View our raw data and Github Repository here</a
    >
  </p>
</main>

<style>
</style>
