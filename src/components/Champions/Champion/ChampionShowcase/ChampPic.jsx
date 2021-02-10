import React from "react";
import styles from "./ChampShow.module.css";

const ChampPic = ({ champName }) => {
  return (
    <div className={styles.picWrapper}>
      <div className={styles.backgroundStyle}>
        <div className={styles.backgroundImage}>
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champName}_0.jpg`}
            alt=''
            className={styles.imgStyle}
          />
        </div>
      </div>
    </div>
  );
};

export default ChampPic;
