import { component$, Slot } from "@builder.io/qwik";
import type { RequestHandler } from "@builder.io/qwik-city";

export const onGet: RequestHandler = async ({ cacheControl }) => {
  // Controle el almacenamiento en caché de esta solicitud para obtener el mejor rendimiento y reducir los costos de hospedaje::
  // https://qwik.builder.io/docs/caching/
  cacheControl({
    // Entregar siempre una respuesta almacenada en caché de forma predeterminada, hasta una semana obsoleta
    staleWhileRevalidate: 60 * 60 * 24 * 7,
    // Máximo una vez cada 5 segundos, vuelva a validar en el servidor para obtener una versión nueva de esta página
    maxAge: 5,
  });
};

export default component$(() => {
  return (
    <main class="min-h-screen text-black bg-slate-100">
      <Slot />
    </main>
  );
});
