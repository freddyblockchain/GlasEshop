<script lang="ts">
  import DefaultSelect from "./DefaultSelect.svelte";
</script>

<div class="flex flex-col justify-center items-center">
  <DefaultSelect title="Tykkelse" options={["8mm", "10mm"]} />
  <DefaultSelect
    title="Profilramme"
    options={["Uden Profilramme", "Med Profilramme"]}
  />
  <DefaultSelect
    title="Belægning"
    options={["Uden Belægning", "Med Belægning"]}
  />
  <DefaultSelect
    title="Endekappe"
    options={["Uden Endekappe", "Med Endekappe"]}
  />
</div>
