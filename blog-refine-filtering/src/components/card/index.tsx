import styles from "./index.module.css";

import { motion } from "framer-motion";

export const Card = ({ name, image, minPlayers, maxPlayers }: { name: string; image: string; minPlayers: string; maxPlayers: string }) => {
  return (
    <motion.div
      className={styles.wrapper}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <div
        // style={{
        //   borderColor: `${
        //     String(maxPlayers) === "2"
        //       ? "gold"
        //       : maxPlayers === "3"
        //         ? "tomato"
        //         : "limegreen"
        //   }`,
        // }}
      />

      <div>

        <div style={{width: "15%", float: "left"}}>
          <img src={image} width={"100%"}/>
        </div>

        <div style={{width: "10%", float: "left"}}>
        </div>

        <div style={{width: "70%", float: "right"}}>
          <h3 className={styles.name}>{name}</h3>
          <br></br>
          <h4 className={styles.players}>{minPlayers} - {maxPlayers} players</h4>
        </div>
      </div>

      <div>
      </div>
      
      <div>
      </div>
    </motion.div>
  );
};
