<script>
  let activeSection = "Holiday Engagement Trends";

  function showSection(section) {
    activeSection = section;
  }
</script>

<div
  class="flex flex-col align-center mx-6 bg-white rounded-2xl px-12 space-y-2 py-12"
>
  <div class="md:flex justify-between items-baseline pb-3">
    <h2 class="text-center md:text-right text-3xl">
      EXPLORATORY DATA ANALYSIS
    </h2>
    <div class="nav-links text-center space-x-2">
      <button
        class={activeSection === "Holiday Engagement Trends" ? "active" : ""}
        on:click={() => showSection("Holiday Engagement Trends")}
      >
        HOLIDAY ENGAGEMENT TRENDS
      </button>

      <button
        class={activeSection === "Number of Posts per Year" ? "active" : ""}
        on:click={() => showSection("Number of Posts per Year")}
      >
        POST PER YEAR
      </button>
      <button
        class={activeSection === "Number of Posts per Day" ? "active" : ""}
        on:click={() => showSection("Number of Posts per Day")}
      >
        POST PER DAY
      </button>
      <button
        class={activeSection === "MONTHLY ANALYSIS OF POSTS" ? "active" : ""}
        on:click={() => showSection("MONTHLY ANALYSIS OF POSTS")}
      >
        MONTHLY ANALYSIS
      </button>

      <button
        class={activeSection === "Weekly Analysis" ? "active" : ""}
        on:click={() => showSection("Weekly Analysis")}
      >
        WEEKLY ANALYSIS
      </button>
      <button
        class={activeSection === "Gender" ? "active" : ""}
        on:click={() => showSection("Gender")}
      >
        ENGAGEMENT BY GENDER
      </button>
      <button
        class={activeSection === "Age" ? "active" : ""}
        on:click={() => showSection("Age")}
      >
        ENGAGEMENT BY AGE
      </button>
    </div>
  </div>
  <div class="pt-8 text-xl">
    <div class="pt-20 md:px-20 space-y-4">
      {#if activeSection === "Holiday Engagement Trends"}
        <h2 class="text-center text-4xl md:text-6xl pt-12 md:pb-8">
          Average Engagement Over Time by Holidays
        </h2>
        <div class="py-5">
          <img
            src="image/plots/top_5_holidays.png"
            alt="A chart showing Average Engagement Over Time by Holidays"
            class="rounded-lg mx-auto w-10/12"
          />
        </div>
        <p>Those with high engagement:</p>
        <ol>
          <li>
            <strong>New Year's Day</strong> — There is a significant spike in engagement
            around New Year's Day, suggesting that this holiday prompts increased
            discussions or reporting related to gender-based violence.
          </li>
          <li>
            <strong>Ninoy Aquino Day</strong> — Another prominent spike is seen around
            Ninoy Aquino Day, indicating a high level of engagement during this period.
          </li>
        </ol>
        <p>
          It is also important to note that by post-2020, there is an increase
          in the frequency and intensity of engagement spikes around holidays.
          This indicates growing awareness and community responsiveness to
          discussions around gender-based violence during these times.
        </p>
      {/if}
      {#if activeSection === "Number of Posts per Year"}
        <h2 class="text-center text-4xl md:text-6xl pt-12 md:pb-8">
          Posts per Year
        </h2>
        <p>
          Our team has first explored the number of reddit posts per year that
          mentions gender-based violence keywords.
        </p>
        <div class="py-5">
          <img
            src="image/plots/posts_per_year.png"
            alt="A chart showing posts per year"
            class="rounded-lg mx-auto w-10/12"
          />
        </div>
        <p>
          The chart shows a general increase in the number of posts from 2013 to
          2024. There is a noticeable spike in posts starting from 2020, with
          the highest number of posts recorded in 2023.
        </p>
        <p>
          Based on the chart, we can infer the following detailed answer to the
          key question regarding temporal patterns:
        </p>
        <ol>
          <li>
            <strong>Gradual Increase Over Time</strong> — From 2013 to 2019, the
            number of posts regarding gender-based violence remains relatively low
            and stable, indicating that these discussions were not as prominent or
            not as frequently shared on Filipino Reddit communities during these
            years.
          </li>
          <li>
            <strong>Significant Spike Starting 2020</strong> — Beginning in 2020,
            there is a marked increase in the number of posts. This could be attributed
            to various factors such as increased awareness, more active community
            engagement, or external societal events prompting more discussions on
            this topic. The year 2020 itself might have seen more discussions due
            to the global COVID-19 pandemic, which had significant social impacts,
            including increased domestic stress and potential increases in gender-based
            violence incidents.
          </li>
          <li>
            <strong>Peak in 2023</strong> — The year 2023 records the highest number
            of posts. This peak suggests a continued and growing awareness and willingness
            to discuss gender-based violence on these platforms. It could also indicate
            that the community engagement has become stronger, or there might have
            been significant events or movements related to gender-based violence
            that prompted more discussions.
          </li>
        </ol>
        <p>
          The increasing trend of posts over the years, especially the spike
          starting in 2020, indicates that:
        </p>
        <ol>
          <li>
            <strong>Growing Awareness</strong> — There is increasing awareness and
            discussion about gender-based violence in Filipino Reddit communities.
          </li>
          <li>
            <strong>Community Engagement</strong> — Community engagement on this
            issue has likely improved, as more people are willing to share their
            experiences and discuss this topic.
          </li>
          <li>
            <strong>External Factors</strong> — External factors, such as the COVID-19
            pandemic or significant social movements, could have influenced the increase
            in posts.
          </li>
        </ol>
      {/if}
      {#if activeSection === "MONTHLY ANALYSIS OF POSTS"}
        <h2 class="text-center text-4xl md:text-6xl pt-12 md:pb-8">
          Monthly Analysis of Posts
        </h2>
        <div class="py-5">
          <img
            src="image/plots/posts_per_month.png"
            alt="A chart showing Monthly Analysis of Posts"
            class="rounded-lg mx-auto w-10/12"
          />
        </div>
        <p>Based on the chart,</p>
        <ol>
          <li>
            <strong>March and April</strong> — These months show a significant spike
            in the number of posts, indicating a higher level of discussion or reporting
            of gender-based violence during these periods.
          </li>
          <li>
            <strong>June</strong> — This month has the lowest number of posts. The
            decrease in posts during June might be due to various factors such as
            less online activity during summer months, fewer awareness campaigns,
            or simply a lower incidence of discussions around this topic during this
            time.
          </li>
        </ol>
      {/if}

      {#if activeSection === "Number of Posts per Day"}
        <h2 class="text-center text-4xl md:text-6xl pt-12 md:pb-8">
          Daily Analysis of Posts
        </h2>
        <div class="py-5">
          <img
            src="image/plots/posts_per_day.png"
            alt="A chart showing Analysis of Posts Per Day"
            class="rounded-lg mx-auto w-10/12"
          />
        </div>
        <p>Based on the chart,</p>
        <ol>
          <li>
            <strong>First Few Days</strong> — The first few days of the month (1st,
            2nd, and 3rd) show a higher number of posts, with the 2nd day having
            the highest number. This indicates that users are more likely to share
            their experiences or report incidents at the beginning of the month.
          </li>
          <li>
            <strong>End of the Month</strong> — The 31st day shows the lowest number
            of posts. This might be due to fewer days in some months, leading to
            lower overall activity on the 31st.
          </li>
          <li>
            <strong>Mid-Month Consistency</strong> — The middle of the month (days
            10 to 20) shows relatively consistent activity, though not as high as
            the beginning of the month.
          </li>
        </ol>
      {/if}

      {#if activeSection === "Weekly Analysis"}
        <h2 class="text-center text-4xl md:text-6xl pt-12 md:pb-8">
          Weekly Analysis of Posts
        </h2>
        <div class="py-5">
          <img
            src="image/plots/posts_per_day_of_week.png"
            alt="A chart showing Weekly Analysis of Posts"
            class="rounded-lg mx-auto w-10/12"
          />
        </div>
        <p>Based on the chart,</p>
        <ul>
          <li>
            <strong>High Activity Days on Monday and Tuesday</strong> — These days
            have the highest number of posts. This suggests that users are more active
            in sharing their experiences or discussing gender-based violence at the
            beginning of the workweek.
          </li>
          <li>
            <strong>Moderate Activity on Wednesday to Thursday</strong> — The number
            of posts on these days is relatively stable and slightly lower than Monday
            and Tuesday, indicating consistent but moderate engagement.
          </li>
          <li>
            <strong>Low Activity Days on Friday and Sunday</strong> — These days
            have the lowest number of posts. The slight drop on these days could
            be due to various factors such as end-of-week fatigue or fewer people
            engaging online during weekends.
          </li>
        </ul>
      {/if}

      {#if activeSection === "Gender"}
        <h2 class="text-center text-4xl md:text-6xl pt-12 md:pb-8">
          Average Engagement Over Time by Gender
        </h2>
        <div class="py-5">
          <img
            src="image/plots/ave_engagement_over_time_gender.png"
            alt="A chart showing Weekly Analysis of Posts"
            class="rounded-lg mx-auto w-10/12"
          />
        </div>
        <p>Those with high engagement:</p>
        <ul>
          <li>
            <strong>Unknown Gender </strong> — The "Unknown" category shows significant
            spikes in engagement, especially before 2020. This suggests that posts
            where the gender of the poster is not specified tend to receive substantial
            engagement. This might be because these posts focus more on the content
            of the experience rather than the gender of the poster.
          </li>
          <li>
            <strong>Female and Male</strong> — After 2020, both Female and Male groups
            show notable spikes in engagement. The engagement for these groups increases
            over time, indicating a growing interest and responsiveness to posts
            where the gender of the poster is specified.
          </li>
        </ul>
      {/if}
      {#if activeSection === "Age"}
        <h2 class="text-center text-4xl md:text-6xl pt-12 md:pb-8">
          Average Engagement Over Time by Age
        </h2>
        <div class="py-5">
          <img
            src="image/plots/ave_engagement_over_time_age.png"
            alt="A chart showing Average Engagement Over Time by Holidays"
            class="rounded-lg mx-auto w-10/12"
          />
        </div>
        <p>Those with high engagement:</p>
        <ol>
          <li>
            <strong>Unknown Age Group</strong> — The "Unknown" category shows the
            highest and most frequent spikes in engagement. This suggests that posts
            where the age of the poster is not specified tend to receive more engagement.
            This could be because these posts may focus more on the content of the
            experience rather than the demographic details.
          </li>
          <li>
            <strong>20-29 Age Group</strong> — This group shows several noticeable
            spikes in engagement, particularly in recent years (2022-2024). This
            indicates that posts from individuals in this age group are also receiving
            significant engagement, possibly due to their active presence on social
            media and the relevance of their experiences to the broader community.
          </li>
        </ol>
        <p>Those with moderate engagement:</p>
        <ol>
          <li>
            <strong>30-39 and 50+ Age Groups</strong> — These age groups show moderate
            engagement with occasional spikes. This suggests that while these groups
            are active, their posts might not resonate as widely or consistently
            as those from the younger or unspecified age groups.
          </li>
          <li>
            <strong>40-49 Age Group</strong> — This group has the least engagement,
            with almost no noticeable spikes. This could indicate that posts from
            this demographic receive less attention or that this age group is less
            active in discussing gender-based violence on Reddit
          </li>
        </ol>
      {/if}
    </div>
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
    font-size: 1em;
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

  li {
    display: list-item;
    list-style-position: inside;
  }

  ol {
    margin: 0px 0;
    padding: 0;
    list-style: decimal inside none;
  }

  ol li {
    margin: 0px;
    padding: 2px;
    text-indent: -1em;
    margin-left: 3.4em;
  }
</style>
