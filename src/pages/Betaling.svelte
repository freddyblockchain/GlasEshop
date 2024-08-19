<script>
  import LeveringsForm from "$lib/components/LeveringsForm.svelte";
  import Button from "$lib/components/ui/button/button.svelte";
  import { Checkbox } from "$lib/components/ui/checkbox";
  import { Label } from "$lib/components/ui/label";
  import * as RadioGroup from "$lib/components/ui/radio-group";

  let checked = true;
</script>

<div class="flex justify-center m-10 max-w-[60%] flex-col">
  <LeveringsForm />
  <div>
    <h1>Faktureringsaddresse</h1>
    <div class="flex items-center space-x-2">
      <RadioGroup.Root value="option-one">
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="option-one" id="option-one" />
          <Label for="option-one"
            >Brug samme addresse som leveringsaddressen</Label
          >
        </div>
        <div class="flex items-center space-x-2">
          <RadioGroup.Item value="option-two" id="option-two" />
          <Label for="option-two"
            >Brug anden addresse som Faktureringsaddresse</Label
          >
        </div>
      </RadioGroup.Root>
    </div>
    <div class="flex m-5 justify-center bg-gray-100">
      <h1>Leverings metode</h1>
    </div>
    <div class="flex m-5 justify-center flex-col items-center bg-gray-100">
      <h1>Ordre informationer:</h1>
      <h3>Pris total: 100kr</h3>
      <h3>Levering: 0 kr</h3>
      <h2>I alt: 100kr</h2>
    </div>
    <div class="flex m-5 justify-center flex-col items-center bg-gray-100">
      <h1>Persondata politik</h1>
      <h1>Leverings politik</h1>
      <div class="flex items-center m-5">
        <Checkbox
          id="terms"
          bind:checked
          aria-labelledby="terms-label"
          class="mr-3"
        />
        <Label
          id="terms-label"
          for="terms"
          class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accepter betingelser
        </Label>
      </div>
    </div>
    <div class="flex justify-center">
      <Button>Gå til betaling</Button>
    </div>
  </div>
</div>
