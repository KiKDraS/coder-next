"use client";

import { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getSubSet } from "../../utils/getSubset";

const UserFavsList = ({ pokemons }) => {
  const [list, setList] = useState(() => getSubSet(pokemons, 0));
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
        const newOffset = offset + 1;
        (async (offset) => {
          const newPokemons = getSubSet(pokemons, offset);
          setList((prev) => {
            return [...prev, ...newPokemons];
          });
        })(newOffset);
        setOffset(() => newOffset);
      }
    }
    container.addEventListener("scroll", scrollFn);
    return () => container.removeEventListener("scroll", scrollFn);
  }, [offset, pokemons]);

  return (
    <div
      className="grid gap-8 lg:grid-cols-2 h-[70vh] overflow-y-scroll"
      ref={containerRef}
    >
      {list.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          isFav={pokemon}
          setList={setList}
        />
      ))}
    </div>
  );
};
export default UserFavsList;
