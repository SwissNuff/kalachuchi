<div class="bg-white px-4 mt-16 space-y-4 text-xl">
  <h1 class="text-5xl">Classifying Types of Gender-Based Violence Reports</h1>

  <p>
    Our team believes that understanding and categorizing gender-based violence
    is crucial for providing appropriate support and resources. Because of this,
    we wanted to use machine learning to classify Reddit posts about
    gender-based violence into specific categories such as cyberbullying,
    emotional abuse, physical abuse, and more. This helps in understanding the
    prevalent types of violence and tailoring interventions accordingly.
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
      Each post includes the text content and the relationship context of the
      poster.
    </li>
    <li>
      Text data was converted into numerical features using TfidfVectorizer,
      capturing the importance of each word.
    </li>
  </ul>

  <h3 class="font-normal tracking-wide text-xl">2. Feature Extraction:</h3>
  <ul class="custom-bullets">
    <li>
      Relationship contexts were encoded using OneHotEncoder to convert
      categorical data into numerical form.
    </li>
    <li>
      The encoded relationship features were combined with text features to form
      the complete feature set (X).
    </li>
  </ul>

  <h3 class="font-normal tracking-wide text-xl">3. Model Training:</h3>
  <ul class="custom-bullets">
    <li>The dataset was split into training and testing sets.</li>
    <li>
      TA Logistic Regression model with balanced class weights was trained to
      predict the type of violence based on the post content and relationship
      context.
    </li>
  </ul>

  <h3 class="font-normal tracking-wide text-xl">4. Evaluation:</h3>
  <ul class="custom-bullets">
    <li>
      The model’s performance was evaluated using accuracy, precision, recall,
      and F1-score.
    </li>
    <li>
      A confusion matrix was generated to visualize the classification results.
    </li>
  </ul>

  <h2 class="text-3xl">Classification Report</h2>
  <img
    src="image/plots/classification_report.png"
    alt="A chart showing classification report"
    class="rounded-lg mx-auto w-10/12"
  />

  <ol>
    <li>
      <b>High Precision and Recall </b>— Categories like "stalking" and
      "unsolicited pics" have high precision and recall, indicating the model’s
      effectiveness in correctly identifying these types of posts.
    </li>
    <li>
      <b>Moderate Performance</b> — Categories like "emotional abuse" and "physical
      abuse" show moderate performance, with a mix of correct and incorrect classifications.
    </li>
    <li>
      <b>Areas for Improvement </b>— The "abused" and "domestic violence"
      categories have lower recall, suggesting the model struggles to correctly
      identify these posts.
    </li>
  </ol>

  <h2 class="text-3xl">Classification Report</h2>
  <img
    src="image/confusion_matrix.webp"
    alt="A chart showing classification report"
    class="rounded-lg mx-auto w-10/12"
  />

  <ol>
    <li>
      <b>High Accuracy</b> — "Stalking" and "Unsolicited Pics" categories have the
      highest number of correct classifications (80 and 12, respectively), indicating
      the model is highly accurate in predicting these categories.
    </li>
    <li>
      <b>Moderate Accuracy</b> — "Cyberbullying," "Sexual Harassment," and "Physical
      Abuse" categories have moderate accuracy, with significant correct classifications
      but also notable misclassifications.
    </li>
    <li>
      <b>Low Accuracy</b> — "Abused," "Domestic Violence," and "Emotional Abuse"
      categories have lower accuracy, with many instances misclassified as other
      types of violence. For example, "Abused" is frequently misclassified as "Physical
      Abuse," and "Emotional Abuse" is often misclassified as "Physical Abuse."
    </li>
  </ol>
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
