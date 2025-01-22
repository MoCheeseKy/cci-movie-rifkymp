import Link from 'next/link';
import { useEffect, useState } from 'react';
import axios from 'axios';

import MovieCardComponent from '../_shared/MovieCard';

export default function TrendingComponent() {
  const [Loading, setLoading] = useState(false);
  const [TrendingItem, setTrendingItem] = useState([]);

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
  return (
    <>
      <p className='text-4xl font-bold'>Trending Movie</p>
      <div className='w-full grid grid-cols-6 gap-6 mt-8'>
        {Loading ? (
          'loading....'
        ) : (
          <>
            {TrendingItem?.map((item, indexItem) => (
              <Link key={indexItem} href={`/detail?movieid=${item?.id}`}>
                <MovieCardComponent
                  image={item?.posterUri}
                  title={item?.title}
                  year={item?.releaseDate?.slice(0, 4)}
                />
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
}
