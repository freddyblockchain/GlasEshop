<script>
  export let placeholder = "Enter Algorand username"; // default placeholder text
  export let value = ""; // binds a value to this input
  export let editable = true;
</script>

<input type="text" {placeholder} bind:value disabled={!editable} />
