import { component$, Slot } from "@builder.io/qwik";

export default component$(() => {
  return (
    <div class="grid grid-rows-[auto, 1fr, auto] min-h-screen">
      <Slot />
    </div>
  );
});
