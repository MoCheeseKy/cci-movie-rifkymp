import { useState, useEffect } from 'react';
import Link from 'next/link';
import axios from 'axios';

import MovieCardComponent from '../_shared/MovieCard';

export default function MovieListComponent() {
  const [Loading, setLoading] = useState(false);
  const [MovieLists, setMovieLists] = useState([]);
  useEffect(() => {
    setLoading(true);
    axios
      .get('https://nonskuy-backend.vercel.app/api/movie?page=2&limit=10')
      .then((ress) => {
        setMovieLists(ress?.data?.data?.movies);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <p className='text-4xl font-bold'>Movie List</p>
      <div className='w-full grid grid-cols-6 gap-6 mt-8'>
        {MovieLists?.map((item, indexItem) => (
          <Link key={indexItem} href={`/detail/${item?.id}`}>
            <MovieCardComponent
              image={item?.posterUri}
              title={item?.title}
              year={item?.releaseDate?.slice(0, 4)}
            />
          </Link>
        ))}
        {/* <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} />
        <MovieCardComponent title={'Lorem Ipsum'} year={2005} /> */}
      </div>
    </>
  );
}
