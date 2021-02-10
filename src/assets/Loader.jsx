import React from "react";
import style from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={style.loaderContainer}>
      <div className={style.ldsHourglass}></div>
    </div>
  );
};

export default Loader;
