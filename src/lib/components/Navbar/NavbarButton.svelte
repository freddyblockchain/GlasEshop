<script lang="ts">
  export let route = "";
  export let text = "";

  $: backgroundColor =
    route === window.location.pathname ? "text-gray-200" : "text-grey";
</script>

<li>
  <a
    href={route}
    class="py-2 px-3 text-grey hover:text-gray-200 {backgroundColor}">{text}</a
  >
</li>
