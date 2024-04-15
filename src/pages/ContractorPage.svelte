<script lang="ts">
  import { onMount } from "svelte";
  import { getProjectContractorData } from "../api/getData";
  import * as Table from "$lib/components/ui/table/index";
  var contractorData: ContractPageData;
  onMount(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const projectnumber = searchParams.get("projectnumber");

    contractorData = getProjectContractorData(Number(projectnumber));
  });

  const handleRowClick = (contractor: Contractor) => {};
</script>

{#if contractorData}
  <div>
    <div class="flex justify-center">
      <p>Total Beløb: {contractorData.project.totalAmount}</p>
    </div>
    <div class="flex justify-center inline-block">
      <Table.Root>
        <Table.Caption>Listen af entreprenører</Table.Caption>
        <Table.Header>
          <Table.Row>
            <Table.Head class="w-[100px]">Pos</Table.Head>
            <Table.Head class="w-[300px]">Navn</Table.Head>
            <Table.Head class="w-[300px]">Kontrakt sum</Table.Head>
            <Table.Head class=" w-[300px]">Færdig procent</Table.Head>
            <Table.Head class=" w-[300px]">Anvist til betaling</Table.Head>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {#each contractorData.contractors as contractor, i (i)}
            <Table.Row
              on:click={() => handleRowClick(contractor)}
              class="cursor-pointer hover:bg-blue-100 transition-colors duration-150"
            >
              <Table.Cell class="font-medium">{contractor.posNr}</Table.Cell>
              <Table.Cell class="font-medium">{contractor.name}</Table.Cell>
              <Table.Cell class="font-medium">Kontrakt sum</Table.Cell>
              <Table.Cell class="font-medium">Færdig procent</Table.Cell>
              <Table.Cell class="font-medium">Anvist til betaling</Table.Cell>
            </Table.Row>
          {/each}
        </Table.Body>
      </Table.Root>
    </div>
  </div>
{:else}
  <p>Loading Contractors</p>
{/if}
