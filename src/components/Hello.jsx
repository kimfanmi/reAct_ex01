import React from 'react';
import PropTypes from 'prop-types';
// rafce
const Hello = (props) => {
  const { color, name, favoriteNumber } = props;
  return <div style={{ color }}>{favoriteNumber} 안녕하세요 {name}</div>;
};

Hello.defaultProps = {name:'NoName'};
Hello.propTypes = {
  name:PropTypes.string,
  favoriteNumber:PropTypes.number.isRequired
}




export default Hello;