import { NextResponse } from "next/server";

export async function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("offset");

  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=12&offset=${query}`
  ).then((data) => data.json());

  const pokemonsList = res.results.map((item) => item.name);

  const pokemonDetails = await Promise.all(
    pokemonsList.map(async (pokemon) => {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${pokemon}`
      ).then((data) => data.json());

      const pokemonDetails = {
        name: pokemon,
        types: response.types.map((pokemonType) => pokemonType.type.name),
        stats: response.stats.map((pokemonStat) => ({
          base_stat: pokemonStat.base_stat,
          name: pokemonStat.stat.name,
        })),
        image: response.sprites.front_default,
      };

      const extraData = await fetch(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
      )
        .then((data) => data.json())
        .then((pokemon) => ({
          description: pokemon.flavor_text_entries.find(
            (text) => text.language.name === "es"
          ).flavor_text,
          id: pokemon.id,
        }));

      pokemonDetails.description = extraData.description;
      pokemonDetails.id = extraData.id;

      return pokemonDetails;
    })
  ).then((pokemon) => pokemon);

  return NextResponse.json(pokemonDetails);
}
