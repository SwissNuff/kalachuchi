<script>
  import { Icon } from "svelte-icons-pack";
  import { BsArrowRightCircle, BsJustify } from "svelte-icons-pack/bs";
  import { writable } from "svelte/store";
  import Modal from "svelte-simple-modal";
  import FirstModel from "./FirstModel.svelte";
  import SecondModel from "./SecondModel.svelte";
  const modal = writable(null);
  const showFirstModel = () => modal.set(FirstModel);
  const showSecondModel = () => modal.set(SecondModel);
</script>

<div
  class="flex flex-col align-center bg-gdark text-white px-12 space-y-6 py-16 min-h-screen"
>
  <!-- FIRST MODEL -->
  <p class="text-2xl font-semibold gradient-light tracking-widest">MODEL</p>
  <div class="md:flex pb-6 md:w-8/12">
    <div class="space-y-4">
      <div>
        <h2 class="md:text-5xl text-2xl">
          Predicting Engagement on Gender-Based Violence Posts
        </h2>
      </div>

      <p class="md:text-xl">
        One of the things our team wanted to explore is that using natural
        language processing (NLP) and machine learning techniques, we want to
        analyze the textual content of posts, along with the age and gender of
        the posters, to forecast how much engagement (measured by upvotes,
        comments, etc.) a post is likely to receive.
      </p>
      <div>
        <Modal show={$modal}>
          <button
            on:click={showFirstModel}
            class="righticon flex align-center gap-2"
          >
            <Icon src={BsArrowRightCircle} size="2em" />
            <span class="md:text-xl ml-2">Explore The Model</span>
          </button>
        </Modal>
      </div>
    </div>
  </div>
  <!-- SECOND MODEL -->
  <div class="md:flex pb-6 md:w-8/12">
    <div class="space-y-4">
      <h2 class="md:text-5xl text-2xl">
        Classifying Types of Gender-Based Violence Reports
      </h2>

      <p class="md:text-xl">
        Our team believes that understanding and categorizing gender-based
        violence is crucial for providing appropriate support and resources.
        Because of this, we wanted to use machine learning to classify Reddit
        posts about gender-based violence into specific categories such as
        cyberbullying, emotional abuse, physical abuse, and more. This helps in
        understanding the prevalent types of violence and tailoring
        interventions accordingly.
      </p>
      <div>
        <Modal show={$modal}>
          <button
            on:click={showSecondModel}
            class="righticon flex align-center gap-2"
          >
            <Icon src={BsArrowRightCircle} size="2em" />
            <span class="md:text-xl ml-2">Explore The Model</span>
          </button>
        </Modal>
      </div>
    </div>
  </div>
</div>
