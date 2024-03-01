<script lang="ts">
  export let placeholder = "Create AUN"; // default placeholder text
  export let buttonPressedAction = () => {}; // binds a value to this input
</script>

<button on:click={buttonPressedAction}>{placeholder}</button>
