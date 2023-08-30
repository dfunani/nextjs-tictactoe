import React, { Dispatch, SetStateAction } from 'react';

type props = {
    isDark: boolean;
    value: string;
    onClick: () => void;
    setP1: Dispatch<SetStateAction<string>>;
    setP2: Dispatch<SetStateAction<string>>;
  }

const Start = ({ value, onClick, setP1, setP2, isDark }: props) => {
    return (
        <div className={`tile ${isDark ? "isDark" : "isLight"} start-tile`}>
            <div className='input-container'><input type="text" onChange={(event) => {
                    setP1(event.target.value)
                }} className={`input-box ${isDark ? "text-dark" : "text-light"}`} placeholder='Player 1'/>
                <input type="text" onChange={(event) => {
                    setP2(event.target.value)
                }} className={`input-box ${isDark ? "text-dark" : "text-light"}`} placeholder='Player 2'/></div>
                <div>VS</div>
            <button className={`tile-sub-button ${isDark ? "text-dark" : "text-light"}`} onClick={onClick}>{value}</button>
        </div>
    );
};

export default Start;
