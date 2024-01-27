"use client";

import { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";

const PokemonsList = ({ pokemons, favorites, handleScroll }) => {
  const [list, setList] = useState(() => pokemons);
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const prevScrollY = useRef(0);

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
        (async (offset) => {
          const newPokemons = await handleScroll(offset);
          setList((prev) => {
            return [...prev, ...newPokemons];
          });
        })(newOffset);
        setOffset(() => newOffset);
      }
    }
    container.addEventListener("scroll", scrollFn);
    return () => container.removeEventListener("scroll", scrollFn);
  }, [handleScroll, offset]);

  return (
    <div
      className="grid gap-8 md:grid-cols-2 h-[60vh] overflow-y-scroll"
      ref={containerRef}
    >
      {list.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          isFav={(() => favorites.find((fav) => fav.name === pokemon.name))()}
        />
      ))}
    </div>
  );
};
export default PokemonsList;
