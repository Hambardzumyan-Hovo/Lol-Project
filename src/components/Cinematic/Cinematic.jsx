import React from "react";
import style from "./Cinematic.module.css";

const Cinematic = () => {
  return (
    <div className={style.container}>
      <iframe
        className={style.Resiframe}
        src='https://www.youtube.com/embed/zF5Ddo9JdpY'
        frameBorder='0'
        title='Cinematic'
        allow='accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture'
        allowFullScreen></iframe>
    </div>
  );
};

export default Cinematic;
