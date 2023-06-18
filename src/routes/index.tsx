import { component$ } from "@builder.io/qwik";
import { Link, type DocumentHead } from "@builder.io/qwik-city";
import LogoQwik from "~/components/logo/logo-qwik";

export default component$(() => {
  return (
    <section class="flex flex-col items-center justify-center gap-10 h-screen">
      <h1 class="md:text-4xl text-xl font-extrabold text-center">
        Pelis de todo el mundo
      </h1>
      <div class="flex items-center justify-center">
        <LogoQwik />
        <Link
          class="border-2 px-2 py-3 rounded-md text-2xl text-center font-semibold hover:text-blue-900 transition-all"
          href="/movies"
          title="Ir a las pelis"
        >
          Ver las Peliculas
        </Link>
      </div>
    </section>
  );
});

export const head: DocumentHead = {
  title: "Qwik películas",
  meta: [
    {
      name: "description",
      content: "Aplicación en Qwik para consultas de películas imdb",
    },
  ],
};
