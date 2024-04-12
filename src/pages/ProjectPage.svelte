<script lang="ts">
  //Check permissions and all that.

  // Cookies, sessions.
  import * as Table from "$lib/components/ui/table/index";
  import { data } from "../data/projects";

  const handleRowClick = (project: Project) => {
    alert(project.number + "clicked");
  };
</script>

<div>
  <div class="inline-block">
    <Table.Root>
      <Table.Caption>A list of projects</Table.Caption>
      <Table.Header>
        <Table.Row>
          <Table.Head class="w-[100px]">Project Number</Table.Head>
          <Table.Head class="text-right w-[300px]">Name</Table.Head>
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
            <Table.Cell class="text-right">{project.buildlord}</Table.Cell>
          </Table.Row>
        {/each}
      </Table.Body>
    </Table.Root>
  </div>
</div>
