<script lang="ts">
  import { cornerPoints } from "../../stores/drawingStore";
  import DefaultSelect from "./DefaultSelect.svelte";
  import PutInCardComponent from "./PutInCardComponent.svelte";
  import Button from "./ui/button/Button.svelte";

  let thickness = "8mm";
  let profileFrame = "Uden Profilramme";
  let coating = "Uden Belægning";
  let endCap = "Uden Endekappe";

  $: glasInfo = {
    Tykkelse: thickness,
    Belægning: coating,
    ProfilRamme: profileFrame,
    EndeKappe: endCap,
  };
</script>

<div class="flex flex-col justify-center items-center">
  <DefaultSelect
    title="Tykkelse"
    options={["8mm", "10mm"]}
    bind:value={thickness}
  />
  <DefaultSelect
    title="Profilramme"
    options={["Uden Profilramme", "Med Profilramme"]}
    bind:value={profileFrame}
  />
  <DefaultSelect
    title="Belægning"
    options={["Uden Belægning", "Med Belægning"]}
    bind:value={coating}
  />
  <DefaultSelect
    title="Endekappe"
    options={["Uden Endekappe", "Med Endekappe"]}
    bind:value={endCap}
  />
  <PutInCardComponent
    cartItem={{
      glasPoints: $cornerPoints,
      glasInfo: glasInfo,
      nrOfItems: 1,
      productName: "badevæg",
    }}
  />
</div>
