<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import * as Select from "$lib/components/ui/select";
  import type { Selected } from "bits-ui";
  export let options: string[] = [];
  export let title = "";
  export let value = "";

  const dispatch = createEventDispatcher();

  function handleSelect(selected: Selected<string> | undefined) {
    value = selected?.value ? selected.value : "";
  }
</script>

<div class="m-2">
  <b>{title}</b>
  <Select.Root
    selected={{ value: options[0].toLowerCase(), label: options[0] }}
    onSelectedChange={handleSelect}
  >
    <Select.Trigger class="w-[180px]">
      <Select.Value placeholder="Theme" />
    </Select.Trigger>
    <Select.Content>
      {#each options as option}
        <Select.Item value={option.toLowerCase()} label={option}
          >{option}</Select.Item
        >
      {/each}
    </Select.Content>
  </Select.Root>
</div>
