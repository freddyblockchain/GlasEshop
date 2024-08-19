<script lang="ts">
  import { z } from "zod";
  import { Label, Input } from "flowbite-svelte";
  export const formSchema = z.object({
    firstName: z.string().min(2),
    lastName: z.string().min(2),
    company: z.string().optional(),
    address: z.string(),
    postalCode: z.number().int().min(1000).max(9999).optional(),
    city: z.string(),
    phone: z
      .string()
      .regex(/^\+?[0-9]{7,15}$/)
      .optional(),
  });
</script>

<div class="flex flex-col">
  <Input
    type="text"
    name="Land"
    autocomplete="country"
    size="lg"
    class="mb-3"
    disabled
    readonly
    value="Denmark"
  />
  <div class="flex flex-row mb-3">
    <Input
      type="text"
      name="given-name"
      autocomplete="given-name"
      placeholder="Fornavn"
      class="mr-3"
      size="lg"
    />
    <Input
      type="text"
      name="family-name"
      autocomplete="family-name"
      placeholder="Efternavn"
      size="lg"
    />
  </div>
  <Input
    type="text"
    name="email"
    autocomplete="email"
    placeholder="Email"
    class="mb-3"
    size="lg"
  />
  <Input
    type="tel"
    name="tel"
    autocomplete="tel"
    placeholder="Telefon"
    class="mb-3"
    size="lg"
  />
  <Input
    type="text"
    name="street-address"
    autocomplete="street-address"
    placeholder="Addresse"
    class="mb-3"
    size="lg"
  />
  <Input
    type="text"
    name="address-line2"
    autocomplete="address-line2"
    placeholder="Addresse 2"
    class="mb-3"
    size="lg"
  />
  <div class="flex flex-row mb-3">
    <Input
      type="text"
      name="postal-code"
      autocomplete="postal-code"
      placeholder="Postnummer"
      size="lg"
      class="mr-3"
    />
    <Input
      type="text"
      name="locality"
      autocomplete="address-level2"
      placeholder="By"
      size="lg"
    />
  </div>
</div>
