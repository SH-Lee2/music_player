import React from 'react';
import { BsFillVolumeUpFill, BsVolumeDownFill, BsFillVolumeMuteFill } from 'react-icons/bs';
import { VOLUME } from '../../assets/constants';
import { getItem } from '../../utils/storage';

interface Props {
  value: number;
  min: string;
  max: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  setVolume: React.Dispatch<React.SetStateAction<number>>;
}

const VolumeBar = ({ value, min, max, onChange, setVolume }: Props) => (
  <div className="hidden lg:flex flex-1 items-center justify-end">
    {value <= 0.5 && value > 0 && (
      <BsVolumeDownFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {value <= 1 && value > 0.5 && (
      <BsFillVolumeUpFill size={25} color="#FFF" onClick={() => setVolume(0)} />
    )}
    {value <= 0 && (
      <BsFillVolumeMuteFill
        size={25}
        color="#FFF"
        onClick={() => setVolume(Number(getItem(VOLUME) || 0.3))}
      />
    )}
    <input
      type="range"
      step="any"
      value={value}
      min={min}
      max={max}
      onChange={onChange}
      className="h-1 ml-2 md:w-32 lg:w-32 2xl:w-40"
    />
  </div>
);

export default VolumeBar;
