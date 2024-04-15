<script lang="ts">
  //Check permissions and all that.

  // Cookies, sessions.
  import * as Table from "$lib/components/ui/table/index";
  import { navigate } from "svelte-routing";
  import { data } from "../data/projects";
  import { onMount } from "svelte";

  const handleRowClick = (project: Project) => {
    navigate(`/projects/contractors?projectnumber=${project.number}`, {
      replace: true,
    });
  };
</script>

<div>
  <div class="inline-block">
    <Table.Root>
      <Table.Caption>A list of projects</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head class="w-[100px]">Project nummer</Table.Head>
          <Table.Head class="text-right w-[300px]">Navn</Table.Head>
          <Table.Head class="text-right w-[300px]">Total Beløb</Table.Head>
          <!-- You might want to set a width for this column too -->
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {#each data as project, i (i)}
          <Table.Row
            on:click={() => handleRowClick(project)}
            class="cursor-pointer hover:bg-blue-100 transition-colors duration-150"
          >
            <Table.Cell class="font-medium">{project.number}</Table.Cell>
            <Table.Cell class="text-right">{project.buildLord}</Table.Cell>
            <Table.Cell class="text-right">{project.totalAmount}</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</div>
