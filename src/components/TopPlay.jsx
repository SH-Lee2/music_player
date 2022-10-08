import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

import TopChartCard from './TopChartCard';

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';

const TopPlay = () => {
  const { data, isFetching } = useGetTopChartsQuery();
  const dispatch = useDispatch();
  const { activeSong, isPlaying } = useSelector(state => state.player);

  const divRef = useRef(null);
  const topPlays = data?.slice(0, 5);

  useEffect(() => {
    divRef.current.scrollIntoView({ behavior: 'smooth' });
  });

  const handlePauseClick = () => {
    dispatch(playPause(false));
  };

  const handlePlayClick = (song, i) => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  return (
    <div
      ref={divRef}
      className="flex flex-col flex-1 max-w-full ml-0 mb-6 xl:ml-6 xl:mb-0 xl:max-w-[500px]"
    >
      {!isFetching && (
        <>
          <div className="w-full flex flex-col">
            <div className="flex justify-between items-center">
              <h2 className="text-white font-bold text-2xl">Top Charts</h2>
              <Link to="/top-charts">
                <p className="text-gray-300 text-base cursor-pointer">See more</p>
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-1">
              {topPlays?.map((song, i) => (
                <TopChartCard
                  key={song.key}
                  song={song}
                  i={i}
                  isPlaying={isPlaying}
                  activeSong={activeSong}
                  handlePauseClick={handlePauseClick}
                  handlePlayClick={() => handlePlayClick(song, i)}
                />
              ))}
            </div>
          </div>
          <div>
            <div className="flex justify-between items-center">
              <h2 className="text-white font-bold text-2xl">Top Artists</h2>
              <Link to="/top-artists">
                <p className="text-gray-300 text-base cursor-pointer">See more</p>
              </Link>
            </div>
            <Swiper
              slidesPerView="auto"
              spaceBetween={15}
              freeMode={true}
              centeredSlides
              modules={[FreeMode]}
              centeredSlidesBounds
              className="mt-4"
            >
              {topPlays?.map(artist => (
                <SwiperSlide
                  key={artist?.key}
                  className="w-1/4 h-auto shadow-lg rounded-full animate-slideright"
                >
                  <Link to={`/artists/${artist?.artists[0].adamid}`}>
                    <img
                      src={artist?.images?.background}
                      alt="profile"
                      className="rounded-full w-full object-cover"
                    />
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </>
      )}
    </div>
  );
};

export default TopPlay;
