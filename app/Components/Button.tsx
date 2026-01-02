import React from 'react';

const Button = ({
  text,
  type,
  icon,
  style,
}: {
  text: string;
  type?: 'primary' | 'secondary';
  icon?: React.ReactNode;
  style?: string;
}) => {
  return (
    <button
      className={`${
        type === 'secondary'
          ? 'border-[0.7px] border-gray-500 text-gray-900'
          : 'bg-blue-500 text-white'
      }  px-5 py-3 rounded-full leading-[22px] font-medium flex gap-3 ${style} w-max`}
    >
      {icon && (
        <>
          {icon}
          <div className='bg-gray-500 h-[18px] w-[0.5px]' />
        </>
      )}
      <span> {text}</span>
    </button>
  );
};

export default Button;
