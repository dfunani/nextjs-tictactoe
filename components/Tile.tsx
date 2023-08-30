import React from 'react';

type props = {
  isDark?: boolean;
  value: string;
  onClick: () => void
}
const Tile = ({ value, onClick, isDark=false }: props) => {
  return (
    <button className={`tile ${isDark ? "isDark" : "isLight"}`} onClick={onClick} >
      {value}
    </button>
  );
};

export default Tile;
