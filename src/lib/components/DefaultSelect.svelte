<script lang="ts">
  import * as Select from "$lib/components/ui/select";
  export let options: string[] = [];
  export let title = "";
</script>

<div class="m-2">
  <b>{title}</b>
  <Select.Root
    selected={{ value: options[0].toLowerCase(), label: options[0] }}
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
