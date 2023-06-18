import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";
import {
  Link,
  type DocumentHead,
  Form,
  routeAction$,
} from "@builder.io/qwik-city";

const movieApiKey = "ffae02c2";

type Movie = {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
};

const useGetMovies = routeAction$(async (values) => {
  const url = `https://www.omdbapi.com/?s=${values.search}&apikey=${movieApiKey}`;
  const res = await fetch(url);
  const data = await res.json();

  const list = data.Search as Movie[];
  return {
    movies: list,
  };
});

export default component$(() => {
  const defaultMovie = useSignal("Matrix");
  const movies = useGetMovies();

  useVisibleTask$(() => {
    document.querySelector("button")?.click(); // Muy mala practica. No hacer
  });

  return (
    <div class="grid grid-rows-[auto,1fr,auto] min-h-screen">
      <header class="p-5 flex flex-col items-center content-center text-center gap-3 border-b-4">
        <Link
          class="text-base border-2 p-1 rounded-md bg-slate-300 hover:bg-slate-800 hover:text-white"
          href="/"
        >
          Inicio
        </Link>
        <h1 class="text-4xl font-bold">Tu buscador de pelis favorito</h1>
        <Form class="" action={movies}>
          <input
            placeholder="Batman..."
            class="m-2 px-3 py-2 border-2"
            type="search"
            name="search"
            id="search"
            value={defaultMovie.value}
          />
          <button class="btn">Buscar</button>
        </Form>
      </header>
      <main class="grid p-5 place-items-center">
        {movies.value?.movies ? (
          <ul class="flex flex-wrap list-none gap-4 justify-center">
            {movies.value.movies.map((movie) => (
              <li
                class="flex flex-col items-center gap-2 p-2 m-2 border-2 h-fit"
                key={movie.imdbID}
              >
                <img src={movie.Poster} alt={movie.Title} />
                <p>{movie.Title}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No hay Pelis</p>
        )}
      </main>
      <footer class="flex items-center  justify-center border-t h-[100px]">
        <p class="font-semibold">Make by Qwik 2023</p>
      </footer>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Qwik peliculas",
  meta: [
    {
      name: "description",
      content: "Listado de las peliculas en la app de Qwik",
    },
  ],
};
