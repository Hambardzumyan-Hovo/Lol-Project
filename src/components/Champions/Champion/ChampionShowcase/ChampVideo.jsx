import React, { useState } from "react";
import styles from "./ChampShow.module.css";
import VideoContainer from "./VideoContainer/VideoContainer";

const ChampVideo = ({ totalInfo }) => {
  const [spells] = useState([totalInfo.passive, ...totalInfo.spells]);
  const [skillName, setSkillName] = useState(totalInfo.passive.name);
  const [skillDescription, setskillDescription] = useState(totalInfo.passive.description);
  let [skillTag, setskillTag] = useState("P");
  const skillTags = ["P", "Q", "W", "E", "R"];
  let champKey;

  if (totalInfo.key.length === 1) {
    champKey = "000" + totalInfo.key;
  } else if (totalInfo.key.length <= 2) {
    champKey = "00" + totalInfo.key;
  } else {
    champKey = "0" + totalInfo.key;
  }

  return (
    <div className={styles.videoWrapper}>
      <h2>Abilities</h2>
      <div className={styles.videoSmallWrapper}>
        <VideoContainer champKey={champKey} skillTag={skillTag} />
      </div>

      <div className={styles.videoSmallWrapper}>
        <div className={styles.skillPics}>
          {spells.map((spell, i) => {
            return (
              <div
                key={spell.name}
                onClick={() => {
                  console.log(skillTag);
                  setSkillName(spell.name);
                  setskillDescription(spell.description);
                  setskillTag(() => {
                    console.log(skillTags[i]);
                    return (skillTag = skillTags[i]);
                  });
                }}
                className={spell.name === skillName ? styles.activeSkillPic : ""}>
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/10.12.1/img/${spell.image.group}/${spell.image.full}`}
                  alt=''
                />
              </div>
            );
          })}
        </div>

        <hr />

        <h4>{skillName}</h4>
        <p>{skillDescription}</p>
      </div>
    </div>
  );
};

export default ChampVideo;
