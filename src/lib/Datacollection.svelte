<script>
  import Redditcard from "../components/Redditcard.svelte";
</script>

<div
  class="md:w-full w-[88vw] bg-white px-12 py-14 rounded-lg shadow-lg mt-16 space-y-4"
>
  <h2 class="text-4xl">Description of the Data Set</h2>
  <p>
    The dataset consists of Reddit posts collected from the following
    subreddits:
  </p>

  <div class="pb-1 sbarthin flex text-xs gap-2 font overflow-x-auto">
    <Redditcard
      title="r/OffmychestPH"
      description="A Filipino community where we work to make it a safe space in which you can unload your burdens, as well as celebrate your wins and milestones."
      members="556k"
      link="https://www.reddit.com/r/OffmychestPH/"
    />

    <Redditcard
      title="r/MentalHealthPH"
      description="A community of Filipinos here and abroad to find support, share stories, discuss mental health issues and more."
      members="49K"
      link="https://www.reddit.com/r/MentalHealthPH/"
    />

    <Redditcard
      title="r/Philippines"
      description="A subreddit for the Philippines and all things Filipino!"
      members="1.9M"
      link="https://www.reddit.com/r/Philippines/"
    />

    <Redditcard
      title="r/relationship_advicePH"
      description="Need advice with your relationship? Whether it's romance, friendship, family, co-workers, or basic human interaction: we're here to help. "
      members="134K"
      link="https://www.reddit.com/r/relationship_advicePH/"
    />
    <Redditcard
      title="r/alasjuicy"
      description="NSFW stories and confessions from Filipino redditors"
      members="263K"
      link="https://www.reddit.com/r/alasjuicy/"
    />
  </div>

  <h2 class="text-4xl">Data Collection Process</h2>

  <p>
    The posts were filtered based on specific search inputs related to different
    forms of gender-based violence. The search inputs used are as follows:
  </p>
  <div class="flex flex-wrap text-xs gap-2 font">
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      abused
    </a>
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      sexual harassment
    </a>
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      Cyberbullying
    </a>
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      domestic violence
    </a>
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      emotional abuse
    </a>
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      physical abuse
    </a>
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      unsolicited pics
    </a>
    <a
      href="https://github.com/cessbub/cs132-project/tree/main/dataset"
      target="_blank"
      class="rounded-full px-4 py-1 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
    >
      stalking
    </a>
  </div>

  <p class="mb-4">The originally scraped dataset contains:</p>
  <ul class="list-disc list-inside space-y-1">
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
</div>
