import React, { useEffect } from "react";
import Champion from "./Champion/Champion";
import FilterBar from "./Filter/FilterBar";
import { getChamps } from "./../../redux/champions-reducer";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import Loader from "./../../assets/Loader";

const Champions = props => {
  useEffect(props.getChamps, []);

  return (
    <div className='mainContainer'>
      {props.champsList.length === 0 ? (
        <Loader />
      ) : (
        <div className='pageContainer'>
          <FilterBar
            options={Object.keys(props.champsList).map(champ => props.champsList[champ].name)}
            tags={props.tags}
          />
          <div className='champContainer'>
            {Object.keys(props.champsList).map(champ => {
              return (
                <NavLink to={`/champion/${props.champsList[champ].id}`} key={props.champsList[champ].key}>
                  <Champion
                    key={props.champsList[champ].key}
                    name={props.champsList[champ].name}
                    id={props.champsList[champ].id}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

let mapStateToProps = state => {
  return {
    champsList: state.champs.champsList,
    tags: state.champs.tags,
  };
};

export default connect(mapStateToProps, { getChamps })(Champions);
