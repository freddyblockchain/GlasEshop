<script lang="ts">
  export let placeholder = "Create aan"; // default placeholder text
  export let buttonPressedAction = () => {}; // binds a value to this input
</script>

<button
  on:click={buttonPressedAction}
  class="py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-75 m-4"
  >{placeholder}</button
>
