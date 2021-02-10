import React from "react";
import ChampChart from "../../../../assets/ChampChart";
import fighter from "../../../../assets/pics/fighter.png";
import adc from "../../../../assets/pics/adc.png";
import assasin from "../../../../assets/pics/assasin.png";
import mage from "../../../../assets/pics/mage.png";
import support from "../../../../assets/pics/support.png";
import tank from "../../../../assets/pics/tank.png";
import styles from "./ChampShow.module.css";

const ChampInfo = ({ totalInfo }) => {
  return (
    <div className={styles.infoWrapper}>
      <div>
        <p>{totalInfo.lore}</p>
      </div>
      <div className={styles.title}>
        <h2>{totalInfo.name}</h2>
        <h4>{totalInfo.title.toUpperCase()}</h4>
        {totalInfo.tags[0] === "Fighter" && <img src={fighter} alt='' className={styles.classIcon} />}
        {totalInfo.tags[0] === "Mage" && <img src={mage} alt='' className={styles.classIcon} />}
        {totalInfo.tags[0] === "Assassin" && <img src={assasin} alt='' className={styles.classIcon} />}
        {totalInfo.tags[0] === "Marksman" && <img src={adc} alt='' className={styles.classIcon} />}
        {totalInfo.tags[0] === "Support" && <img src={support} alt='' className={styles.classIcon} />}
        {totalInfo.tags[0] === "Tank" && <img src={tank} alt='' className={styles.classIcon} />}
      </div>
      <ChampChart info={totalInfo.info} />
    </div>
  );
};

export default ChampInfo;
