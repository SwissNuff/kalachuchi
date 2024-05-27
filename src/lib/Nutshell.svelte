<script>
</script>

<div
  class="flex flex-col align-center mx-6 bg-slate-100 rounded-2xl px-12 space-y-2 py-12"
>
  <div class="justify-between items-baseline pb-3">
    <h2 class="text-center text-3xl">Confusion Matrix</h2>

    <div class="py-6">
      <img
        src="image/confusion_matrix.webp"
        alt="A chart"
        class="rounded-lg mx-auto w-8/12"
      />
    </div>

    <h2 class="high-accuracy">High Accuracy</h2>
    <p>
      “Stalking” and “Unsolicited Pics” categories have the highest number of
      correct classifications (80 and 12, respectively), indicating the model is
      highly accurate in predicting these categories.
    </p>

    <h2 class="moderate-accuracy">Moderate Accuracy</h2>
    <p>
      “Cyberbullying,” “Sexual Harassment,” and “Physical Abuse” categories have
      moderate accuracy, with significant correct classifications but also
      notable misclassifications.
    </p>

    <h2 class="low-accuracy">Low Accuracy</h2>
    <p>
      “Abused,” “Domestic Violence,” and “Emotional Abuse” categories have lower
      accuracy, with many instances misclassified as other types of violence.
      For example, “Abused” is frequently misclassified as “Physical Abuse,” and
      “Emotional Abuse” is often misclassified as “Physical Abuse.”
    </p>
  </div>
</div>

<style>
  .nav-links a.active {
    font-weight: 400;
    color: var(--ggray);
    --underline-width: 100%;
  }

  a {
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

  a:hover {
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
