<script>
  export let name;
  export let description;
  export let imgsrc;
</script>

<div
  class="md:flex bg-white flex-row w-100vw justify-center gap-5 bg-[#fffcf8] rounded-lg w-8/12 m-auto py-6"
>
  <div class="w-7/12 flex flex-col text-gdark">
    <h2 class="mb-4 text-[2em] text-left gradient-dark">{name}</h2>
    <p class="text-lg text-left">{description}</p>
  </div>
  <div class="rounded-lg w-4/12">
    <img
      class="rounded-2xl m-auto"
      src="./image/arian.png"
      alt="A girl smiling with a flower in her hair"
    />
  </div>
</div>
