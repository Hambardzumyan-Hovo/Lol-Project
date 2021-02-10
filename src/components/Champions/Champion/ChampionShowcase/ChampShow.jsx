import React from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { compose } from "redux";
import { useEffect } from "react";
import { getChampInfo } from "../../../../redux/championInfo-reducer";
import ChampSlider from "../../../../assets/ChampSlider";
import styles from "./ChampShow.module.css";
import ChampPic from "./ChampPic";
import ChampInfo from "./ChampInfo";
import ChampVideo from "./ChampVideo";
import Loader from "../../../../assets/Loader";

const ChampShow = ({ getChampInfo, champInfo, ...props }) => {
  const champName = props.location.pathname.slice(10);
  const totalInfo = champInfo[champName];

  useEffect(() => {
    getChampInfo(champName);
  }, [getChampInfo, champName]);

  return (
    <div className={styles.overall}>
      {totalInfo !== undefined ? (
        <div>
          <div className={styles.mainWrapper}>
            <ChampPic champName={champName} />
            <ChampInfo totalInfo={totalInfo} />
          </div>

          <ChampVideo totalInfo={totalInfo} />

          <div>
            <ChampSlider id={totalInfo.id} skins={totalInfo.skins} />
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

const mapStateToProps = state => {
  return { champInfo: state.champInfo };
};

export default compose(connect(mapStateToProps, { getChampInfo }), withRouter)(React.memo(ChampShow));
