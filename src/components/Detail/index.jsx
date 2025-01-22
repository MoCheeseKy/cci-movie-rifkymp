'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import axios from 'axios';

import MovieCardComponent from '../_shared/MovieCard';
import Button from '../_shared/Button';

import { CiCalendar } from 'react-icons/ci';
import { FaStar } from 'react-icons/fa';

export default function DetailComponent() {
  const [Loading, setLoading] = useState(false);
  const [TrendingItem, setTrendingItem] = useState([]);
  const [DetailMovie, setDetailMovie] = useState([]);

  const searchParams = useSearchParams();
  const slug = searchParams.get('movieid');

  console.log(slug);

  useEffect(() => {
    setLoading(true);
    axios
      .get('https://nonskuy-backend.vercel.app/api/movie/trending')
      .then((ress) => {
        setTrendingItem(ress?.data?.data?.movies);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (slug) {
      setLoading(true);
      axios
        .get(`https://nonskuy-backend.vercel.app/api/movie/${slug}`)
        .then((ress) => {
          setDetailMovie(ress?.data?.data?.movie);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [slug]);

  return (
    <>
      <div className='flex items-center h-[calc(100vh-96px)] gap-16 pb-[96px]'>
        <div
          className='w-[444px] rounded  aspect-[3/4.5] bg-cover'
          style={{
            backgroundImage: `url(${DetailMovie?.posterUri})`,
          }}
        ></div>
        <div className='flex flex-col justify-center gap-12'>
          <p className='text-4xl font-bold'>{DetailMovie?.title}</p>
          <div>
            <div className='flex gap-4 mb-4'>
              {DetailMovie?.genre?.map((item) => (
                <Button text={item} />
              ))}
            </div>
            <div className='flex gap-12'>
              <div className='flex gap-4 items-center text-base'>
                <CiCalendar />
                <p>{DetailMovie?.releaseDate.slice(0, 10)}</p>
              </div>
              <div className='flex gap-4 items-center text-base'>
                <FaStar />
                <p>{DetailMovie?.voteAverage}</p>
              </div>
            </div>
          </div>
          <p className='max-w-[688px]'>{DetailMovie?.overview}</p>
          <Link href={DetailMovie?.homepageUri}>
            <Button text={'Homepage'} />
          </Link>
        </div>
      </div>
      <p className='text-4xl font-bold'>Detail List</p>
      <div className='w-full grid grid-cols-6 gap-6 mt-8'>
        {TrendingItem?.map((item, indexItem) => (
          <Link key={indexItem} href={`/detail/${item?.id}`}>
            <MovieCardComponent
              image={item?.posterUri}
              title={item?.title}
              year={item?.releaseDate?.slice(0, 4)}
            />
          </Link>
        ))}
      </div>
    </>
  );
}
