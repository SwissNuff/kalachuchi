<script>
  import { Icon } from "svelte-icons-pack";
  import { BsArrowRightCircle } from "svelte-icons-pack/bs";
</script>

<div
  class="flex flex-col align-center bg-gdark text-white px-12 space-y-2 py-16 min-h-screen"
>
  <div class="md:flex pb-6 w-5/12">
    <div class="space-y-4">
      <div>
        <p class="text-xl font-semibold gradient-light tracking-widest">
          MODEL
        </p>
        <h2 class="text-5xl">
          Predicting Engagement on Gender-Based Violence Posts
        </h2>
      </div>

      <p class="text-xl">
        One of the things our team wanted to explore is that using natural
        language processing (NLP) and machine learning techniques, we want to
        analyze the textual content of posts, along with the age and gender of
        the posters, to forecast how much engagement (measured by upvotes,
        comments, etc.) a post is likely to receive.
      </p>
      <div>
        <a href="#background" class="righticon flex align-center gap-2">
          <Icon src={BsArrowRightCircle} size="2em" />
          <span class="text-xl ml-2">Explore The Model</span>
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
    </div>
  </div>
</div>
