<script>
  import Dropdown from "./Dropdown.svelte";
</script>

<div
  class="text-xl flex flex-col align-center mx-6 rounded-2xl px-12 gap-3 py-12"
>
  <header class="text-center w-8/12 mx-auto mt-16 space-y-3">
    <h1 class="text-7xl">Conclusion</h1>
    <p>
      Our project set out to analyze narratives around gender-based violence
      within Filipino Reddit communities and to test several hypotheses related
      to engagement patterns, vulnerability indicators, and content variation.
      Here, we summarize our findings and evaluate our hypotheses based on the
      extensive exploratory data analysis (EDA) and machine learning models we
      employed.
    </p>
  </header>

  <h2 class="text-5xl mt-20 mb-8">Key Takeaways</h2>
  <Dropdown isOpen={false} title="Content Variation">
    <p>
      <b>Hypothesis</b>
      <br />
      Posts about gender-based violence will show significant variations in engagement
      and content type based on demographics and the time of posting.
    </p>

    <p>
      <b>Findings</b>
      <br />

      The feature importance analysis revealed that specific words such as
      "lakas" (strength), "table," "ngang," and "lang" (just) are significant
      indicators of engagement. Posts containing these words tend to receive
      more community engagement, indicating that the content and context of the
      posts do influence engagement levels.
    </p>
  </Dropdown>

  <Dropdown isOpen={false} title="Vulnerability Indicators">
    <p>
      <b>Hypothesis</b>
      <br />
      Certain times or demographics may be more vulnerable, as indicated by higher
      frequencies of reported incidents.
    </p>

    <div>
      <b>Findings</b>
      <br />
      <ul class="list-disk">
        <li>
          <span class="font-[400]">Temporal Patterns:</span> There is a noticeable
          spike in posts starting from 2020, with the highest number of posts recorded
          in 2023. March and April show a significant spike in the number of posts,
          while June has the lowest. This indicates that certain periods are associated
          with higher reporting of gender-based violence, possibly due to increased
          awareness or external factors such as the COVID-19 pandemic.
        </li>
        <li>
          <span class="font-[400]">Demographic Patterns:</span> The "Unknown" age
          group and the 20-29 age group show the highest engagement, suggesting that
          these demographics might be more active in discussing gender-based violence.
          Similarly, posts with unspecified gender or from both female and male users
          show increased engagement, particularly after 2020.
        </li>
      </ul>
    </div>
  </Dropdown>

  <Dropdown isOpen={false} title="Engagement Patterns">
    <p>
      <b>Hypothesis</b>
      <br />
      Specific types of posts, perhaps those with more personal stories or calls
      for help, may receive higher community engagement, indicating a greater collective
      response.
    </p>

    <p>
      <b>Findings</b>
      <br />
      The analysis of engagement over time by gender and age group supports this
      hypothesis. Posts from the "Unknown" gender group and younger age groups (20-29)
      show frequent spikes in engagement, suggesting that these posts resonate more
      with the community. Additionally, posts during certain holidays such as New
      Year's Day and Ninoy Aquino Day show significant engagement, indicating that
      the community is more responsive during these periods.
    </p>
  </Dropdown>

  <h2 class="text-5xl mt-20 mb-8">Summary of Model Performance</h2>

  <Dropdown isOpen={false} title="Predicting Engagement">
    The RandomForestRegressor model achieved a Mean Squared Error (MSE) of
    32,057.59, indicating that while the model can predict engagement levels,
    there is room for improvement in accuracy. The most influential features for
    predicting engagement included specific keywords and the demographic
    information of the poster. Classifying Types of Violence
  </Dropdown>

  <Dropdown isOpen={false} title="Classifying Types of Violence">
    The Logistic Regression model, used to classify posts into specific types of
    gender-based violence, showed varying levels of accuracy across different
    categories. Categories like "stalking" and "unsolicited pics" had high
    precision and recall, while categories like "abused" and "domestic violence"
    had lower accuracy, indicating the need for further refinement in feature
    extraction and model tuning.
  </Dropdown>

  <Dropdown isOpen={false} title="Dense Vector Representation of Words">
    The Word2Vec model is used to give words of the gender-based violence reddit
    posts corpus an encoding which represents their relative similarity or
    relevance.
  </Dropdown>

  <h2 class="text-5xl mt-20 mb-8">Recommendations and Final Thoughts</h2>

  <Dropdown isOpen={false} title="Recommendations">
    <ol>
      <li>
        <b>Enhance Feature Engineering</b>
        <ul>
          <li>
            Further refine feature extraction techniques to better capture the
            nuances in text that differentiate between various types of
            gender-based violence.
          </li>
          <li>Removing Tagalog stop words in the cleaning of the dataset</li>
        </ul>
      </li>
      <br />
      <li>
        <b>Utilization of Word Similarity Encodings</b>
        <ul>
          <li>
            Application of Word2Vec on the classification model for possible
            higher accuracy and deeper analysis of results and patterns
          </li>
        </ul>
      </li>
      <br />
      <li>
        <b>Increase Awareness Campaigns</b>
        <ul>
          <li>
            Utilize periods of high engagement (e.g., March, April, New Year's
            Day, Ninoy Aquino Day) to launch targeted awareness campaigns and
            interventions.
          </li>
        </ul>
      </li>
      <br />
      <li>
        <b>Community Support Initiatives</b>
        <ul>
          <li>
            Develop initiatives that encourage discussions and support for
            demographics showing lower engagement, such as older age groups
            (40-49) and posts misclassified by the model.
          </li>
        </ul>
      </li>
      <br />
      <li>
        <b>Ongoing Model Improvement</b>
        <ul>
          <li>
            Continuously update and train models with new data to improve
            accuracy and adapt to changing trends in discussions around
            gender-based violence.
          </li>
        </ul>
      </li>
    </ol>
  </Dropdown>

  <Dropdown isOpen={false} title="Final Thoughts">
    <p>
      Our findings validate the hypotheses that content variation, vulnerability
      indicators, and engagement patterns significantly influence community
      interactions around gender-based violence posts on Reddit. By leveraging
      these insights, we can better support affected individuals and create more
      effective awareness and prevention strategies within online communities.
    </p>
  </Dropdown>
</div>
