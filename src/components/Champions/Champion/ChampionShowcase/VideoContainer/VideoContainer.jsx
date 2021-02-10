import React from "react";
import styles from "./../ChampShow.module.css";

const VideoContainer = ({ champKey, skillTag }) => {
  return (
    <div>
      <video
        src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${champKey}/ability_${champKey}_${skillTag}1.webm`}
        autoPlay={true}
        className={styles.video}></video>
    </div>
  );
};

export default VideoContainer;
