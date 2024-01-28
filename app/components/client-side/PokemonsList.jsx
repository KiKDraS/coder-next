"use client";

import { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";
import { debounce } from "../../utils/debounce";

const PokemonsList = ({ pokemons = [], favorites = [], handleScroll }) => {
  const [list, setList] = useState(() => pokemons);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const prevScrollY = useRef(0);

  const debounceScroll = debounce(async (offset) => {
    const newPokemons = await handleScroll(offset);
    setList((prev) => {
      return [...prev, ...newPokemons];
    });
  }, 500);

  useEffect(() => {
    const container = containerRef.current;
    function scrollFn() {
      const { scrollTop, scrollHeight, clientHeight } = container;
      const deltaY = scrollTop - prevScrollY.current;
      prevScrollY.current = scrollTop;
      const tolerance = 5;

      if (
        deltaY !== 0 &&
        Math.abs(scrollHeight - scrollTop - clientHeight) < tolerance
      ) {
        const newOffset = offset + 12;

        setOffset(() => newOffset);
        debounceScroll(newOffset);
      }
    }
    container.addEventListener("scroll", scrollFn);
    return () => container.removeEventListener("scroll", scrollFn);
  }, [debounceScroll, handleScroll, offset]);

  return (
    <div
      className="grid gap-8 lg:grid-cols-2 h-[65vh] overflow-y-auto"
      ref={containerRef}
    >
      {list.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          isFav={(() => favorites.find((fav) => fav?.name === pokemon?.name))()}
        />
      ))}
    </div>
  );
};
export default PokemonsList;
