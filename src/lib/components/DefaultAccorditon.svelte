<script lang="ts">
  import * as Accordion from "$lib/components/ui/accordion";

  export let question = "";
  export let answer = "";
</script>

<Accordion.Root class="w-full sm:max-w-[30%]">
  <Accordion.Item value={question}>
    <Accordion.Trigger>{question}</Accordion.Trigger>
    <Accordion.Content>
      {answer}
    </Accordion.Content>
  </Accordion.Item>
</Accordion.Root>
