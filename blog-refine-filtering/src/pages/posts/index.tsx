import { useState } from "react";
import { useMany } from "@refinedev/core";
import { motion, AnimatePresence } from "framer-motion";

import { Filter } from "../../components/filter";
import { Search } from "../../components/search";
import { Card } from "../../components/card";

import styles from "./index.module.css";

export const Posts = () => {
  const [inputValue, setInputValue] = useState("");
  const [activeFilter, setActiveFilter] = useState("");

  const games = useMany<{
    gameId: number;
    name: string;
    minPlayers: string;
    maxPlayers: string;
    isExpansion: boolean;
  }>({
    resource: "collection/edwalter",
    ids: Array.from(Array(8).keys()).slice(1),
  }).data?.data;

  const filters: string[] = ["1", "2", "3", "4", "5+"];

  return (
    <motion.div>
      <div className={styles.filters}>
        <h3>Number of players</h3>
        {filters.map((filter, index) => {
          return (
            <Filter
              key={index}
              title={filter}
              isActive={filter === activeFilter}
              onClick={(e: React.MouseEvent) => {
                const el = e.target as HTMLElement;
                el.textContent?.toLowerCase() !== activeFilter
                  ? setActiveFilter(filter)
                  : setActiveFilter("");
              }}
            />
          );
        })}
      </div>


      <Search
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputValue(e.target.value);
        }}
      />
      <AnimatePresence>
        {games
          ?.filter((el) =>
            el.name.toLowerCase().includes(inputValue.toLowerCase()),
          )
          // .filter((e) => String(e.isExpansion).includes(activeFilter))
          .filter((e) => (e.minPlayers <= activeFilter.replace("+","")))
          .filter((e) => (e.maxPlayers >= activeFilter.replace("+","")))

          .map((game: { name: string; maxPlayers: string }, index: number) => {
            return <Card key={index} name={game.name} image={game.image} minPlayers={game.minPlayers} maxPlayers={game.maxPlayers} />;
          })}
      </AnimatePresence>
    </motion.div>
  );
};
