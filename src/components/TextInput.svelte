<script>
  export let placeholder = "Enter Algorand username"; // default placeholder text
  export let value = ""; // binds a value to this input
  export let editable = true;
</script>

<input
  type="text"
  {placeholder}
  bind:value
  disabled={!editable}
  class="py-2 px-4 rounded border border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
/>
