import React from 'react';

interface Props {
  value: number;
  min: string;
  max: number;
  onInput: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setSeekTime: React.Dispatch<React.SetStateAction<number>>;
  appTime: number;
}

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }: Props) => {
  // 0:00
  const getTime = (time: number): string =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="hidden sm:flex flex-row items-center">
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="hidden text-white lg:mr-4 lg:block"
      >
        -
      </button>
      <p className="text-white">{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="h-1 mx-4 rounded-lg md:block w-24 md:w-56 2xl:w-96 2xl:mx-6"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="hidden text-white lg:ml-4 lg:block"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
