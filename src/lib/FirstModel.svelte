<div class="bg-white px-4 mt-16 space-y-4 text-xl">
  <h1 class="text-5xl">Predicting Engagement on Gender-Based Violence Posts</h1>

  <p>
    One of the things our team wanted to explore is that using natural language
    processing (NLP) and machine learning techniques, we want to analyze the
    textual content of posts, along with the age and gender of the posters, to
    forecast how much engagement (measured by upvotes, comments, etc.) a post is
    likely to receive.
  </p>

  <h2 class="text-3xl">Methodology</h2>

  <h3 class="font-normal tracking-wide text-xl">
    1. Data Collection and Preprocessing:
  </h3>
  <ul class="custom-bullets">
    <li>
      We collected data from Reddit posts related to gender-based violence.
    </li>
    <li>
      Each post includes the body text, the poster's age and gender, and the
      date of posting.
    </li>
    <li>
      We extracted and standardized the age and gender information, categorizing
      ages into groups (Under 20, 20-29, 30-39, 40-49, 50+).
    </li>
  </ul>

  <h3 class="font-normal tracking-wide text-xl">2. Feature Extraction:</h3>
  <ul class="custom-bullets">
    <li>
      We used OneHotEncoder to encode categorical features such as age group and
      gender.
    </li>
    <li>
      For textual data, we employed TfidfVectorizer to convert the text into
      numerical features, capturing the importance of each word in the context
      of the dataset.
    </li>
  </ul>

  <h3 class="font-normal tracking-wide text-xl">3. Model Training:</h3>
  <ul class="custom-bullets">
    <li>
      We combined the encoded age, gender, and textual features to form the
      feature set (X).
    </li>
    <li>The target variable (y) is the engagement level of each post.</li>
    <li>
      We split the data into training and testing sets and trained a
      RandomForestRegressor model to predict engagement levels.
    </li>
  </ul>

  <h3 class="font-normal tracking-wide text-xl">4. Evaluation:</h3>
  <ul class="custom-bullets">
    <li>
      The model's performance was evaluated using Mean Squared Error (MSE),
      which measures the average of the squares of the errors.
    </li>
    <li>
      Our model achieved an MSE of 32,057.59, indicating the average error
      between the predicted and actual engagement levels.
    </li>
  </ul>

  <h3 class="font-normal tracking-wide text-xl">5. Feature Importance:</h3>
  <ul class="custom-bullets">
    <li>
      To understand which features contributed most to the predictions, we
      analyzed the feature importances from the RandomForestRegressor model.
    </li>
    <li>
      The feature importance analysis revealed these top 10 words influencing
      engagement on Reddit posts about gender-based violence:
      <ol class="custom-bullets">
        <br />
        <li>lakas (strength)</li>
        <li>table</li>
        <li>ngang</li>
        <li>lang (just)</li>
        <li>safe</li>
        <li>gumising (wake up)</li>
        <li>edit</li>
        <li>ibang (different)</li>
        <li>tits</li>
        <li>screenshot</li>
      </ol>
    </li>
  </ul>

  <p>
    These words are significant indicators of engagement, reflecting the themes
    and language that resonate most with the community.
  </p>
</div>

<style>
  ul,
  ol {
    margin: 0;
    padding: 0 0 0 20px;
  }
  ul li,
  ol li {
    margin-bottom: 10px;
  }
  ul {
    list-style-type: disc;
  }
  ol {
    list-style-type: decimal;
  }
  ul.custom-bullets li {
    list-style-type: square;
  }
  ol.custom-bullets li {
    list-style-type: upper-roman;
  }
</style>
