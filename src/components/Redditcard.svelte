<script>
  export let title;
  export let description;
  export let members;
  export let link;
</script>

<a
  href={link}
  target="_blank"
  class="flex flex-col justify-between rounded-lg px-4 py-4 border-slate-400 border-[1.4px] hover:border-gdark hover:border-[1.4px] ease-in-out duration-100"
>
  <div class="w-32">
    <p class="font-semibold">{title}</p>
    <p>
      {description}
    </p>
  </div>
  <div class="">
    <p class="font-bold text-lg text-slate-700">{members}</p>
    <p>Members</p>
  </div>
</a>
