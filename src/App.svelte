<script>
  import Navbar from "./lib/Navbar.svelte";
  import { Icon } from "svelte-icons-pack";
  import { BsArrowDownCircle } from "svelte-icons-pack/bs";
  import Overview from "./lib/Overview.svelte";
  import Eda from "./lib/EDA.svelte";
  import AboutDataset from "./lib/AboutDataset.svelte";
  import Team from "./lib/Team.svelte";
  import Nutshell from "./lib/Nutshell.svelte";
</script>

<main>
  <section class="bg-slate-100 py-6">
    <Navbar />
    <div class="m-20 mt-18">
      <h2 class="text-4xl text-zinc-800">SPEAK OUT AND BE HEARD</h2>
      <h1 class="text-8xl">
        Uncovering the Shadows of Gender-Based Violence Among Filipino Redditors
      </h1>
      <div>
        <div class="flex flex-row space-x-8">
          <div class="w-7/12 pt-6 space-y-8">
            <p class="w-10/12 text-lg">
              This initiative seeks to explore and expose the experiences of
              gender-based violence as shared by individuals in Filipino Reddit
              communities. Our project analyzes the nature of these experiences,
              investigates patterns based on demographics, geography, and
              special dates, and examines the impact of community engagement on
              these critical issues.
            </p>
            <div>
              <a href="/" class="downicon flex align-center gap-2">
                <Icon src={BsArrowDownCircle} size="2em" />
                <span class="text-xl ml-2">Explore Our Study</span>
              </a>
            </div>
          </div>
          <div class="rounded-lg object-contain mt-[-20px]">
            <img
              src="image/womenrights.jpeg"
              alt="A Filipino protestor holding a placard reading 'Condemn violence - protect women'"
              class="rounded-lg object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="bg-slate-100">
    <Overview />
  </div>

  <section class="bg-slate-100">
    <AboutDataset />
  </section>

  <section class="bg-slate-100 pb-20">
    <Eda />
  </section>

  <section class="bg-slate-100">
    <Nutshell />
  </section>

  <section class="bg-gdark">
    <Team />
  </section>
</main>

<style>
</style>
