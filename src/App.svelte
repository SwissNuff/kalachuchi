<script>
  import Navbar from "./lib/Navbar.svelte";
  import { Icon } from "svelte-icons-pack";
  import { BsArrowDownCircle } from "svelte-icons-pack/bs";
  import Overview from "./lib/Overview.svelte";
  import Eda from "./lib/EDA.svelte";
  import AboutDataset from "./lib/AboutDataset.svelte";
  import Team from "./lib/Team.svelte";
  import Models from "./lib/Models.svelte";
  import Conclusion from "./lib/Conclusion.svelte";
</script>

<main>
  <section class="bg-slate-100 py-6">
    <Navbar />
    <div class="m-8 md:m-20 mt-18">
      <h2 class="text-4xl text-zinc-700">SPEAK OUT AND BE HEARD</h2>
      <h1 class="text-6xl text-zinc-800 md:text-8xl">
        Uncovering the Shadows of <span class="gradient-title"
          >Gender-Based Violence</span
        >
        Among Filipino Redditors
      </h1>
      <div>
        <div class="md:flex flex-row md:space-x-8">
          <div class="md:w-7/12 pt-6 space-y-8">
            <p class="md:w-10/12 text-justify md:text-left text-lg">
              This initiative seeks to explore and expose the experiences of
              gender-based violence as shared by individuals in Filipino Reddit
              communities. Our project analyzes the nature of these experiences,
              investigates patterns based on demographics, geography, and
              special dates, and examines the impact of community engagement on
              these critical issues.
            </p>
            <div>
              <a href="#background" class="downicon flex align-center gap-2">
                <Icon src={BsArrowDownCircle} size="2em" />
                <span class="text-xl ml-2">Explore Our Study</span>
              </a>
            </div>
          </div>
          <div class="rounded-lg object-contain mt-12 md:mt-[-20px]">
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

  <div id="background" class="bg-slate-100">
    <Overview />
  </div>

  <section id="data" class="bg-slate-100">
    <AboutDataset />
  </section>

  <section id="results" class="bg-slate-100 pb-20">
    <Eda />
  </section>

  <section>
    <Models />
  </section>

  <section class="bg-slate-100">
    <Conclusion />
  </section>

  <section id="team" class="bg-gdark">
    <Team />
  </section>
</main>

<style>
</style>
