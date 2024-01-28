"use client";

import { useEffect, useRef, useState } from "react";
import PokemonCard from "./PokemonCard";
import { getSubSet } from "../../utils/getSubset";
import { debounce } from "@/app/utils/debounce";

const UserFavsList = ({ pokemons }) => {
  const [list, setList] = useState(() =>
    getSubSet({ arr: pokemons, offset: 0, limit: 12 })
  );
  const [offset, setOffset] = useState(0);
  const containerRef = useRef(null);
  const prevScrollY = useRef(0);

  const debounceScroll = debounce(async (offset) => {
    const newPokemons = getSubSet({ arr: pokemons, offset, limit: 12 });
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
        const newOffset = offset + 1;
        setOffset(() => newOffset);
        debounceScroll(newOffset);
      }
    }
    container.addEventListener("scroll", scrollFn);
    return () => container.removeEventListener("scroll", scrollFn);
  }, [debounceScroll, offset, pokemons]);

  return (
    <div
      className="grid gap-8 lg:grid-cols-2 h-[65vh] overflow-y-auto"
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
