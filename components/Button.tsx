import React from 'react';

type props = {
  isDark?: boolean;
  value: string;
  onClick: () => void
}

const Button = ({ value, onClick }: props) => {
  return (
    <div className={`tile`} onClick={onClick}>
      <button className='tile-sub'>{value}</button>
    </div>
  );
};

export default Button;
