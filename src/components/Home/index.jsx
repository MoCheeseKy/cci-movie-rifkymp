import { useState, useEffect } from 'react';
import Link from 'next/link';
// import axios from 'axios';

import Header from '@/layouts/header';
import Footer from '@/layouts/footer';
import Button from '../_shared/Button';
import MovieCardComponent from '../_shared/MovieCard';

import { CiCalendar } from 'react-icons/ci';

export default function HomeComponent() {
  //   const [Loading, setLoading] = useState(false);
  //   const [TrendingItem, setTrendingItem] = useState([]);

  //   useEffect(() => {
  //     setLoading(true);
  //     axios
  //       .get('https://nonskuy-backend.vercel.app/api/movie/trending')
  //       .then((ress) => {
  //         setTrendingItem(ress?.data?.data?.movies);
  //         setLoading(false);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, []);
  return (
    <>
      {/* hero */}
      <div className='flex flex-col h-screen bg-blue-900'>
        <Header />
        <div className='flex-grow flex flex-col justify-center px-24 text-white gap-2'>
          <p className='text-4xl font-bold'>MINIONS</p>
          <div className='flex gap-4 items-center'>
            <CiCalendar />
            <p>Years : 2005</p>
          </div>
          <p className='max-w-[688px]'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
            ipsam similique. Deserunt aspernatur iusto rerum libero praesentium
            dolores officia, mollitia, cum aliquam, at doloribus. Sit minus sed
            aliquam in mollitia?
          </p>
          <Button className={'mt-4'} text={'See Detail'} />
        </div>
      </div>

      {/* main */}
      <main className='flex flex-col items-center gap-12 px-24 pb-24 pt-16 bg-blue-900 text-white'>
        <p className='font-bold text-4xl'>Trending Movie</p>
        <div className='w-full grid grid-cols-3 gap-6'>
          {/* {TrendingItem?.slice(1, 4)?.map((item, indexItem) => (
            <MovieCardComponent
              image={item?.posterUri}
              title={item?.title}
              year={item?.releaseDate?.slice(0, 4)}
            />
          ))} */}
          <MovieCardComponent
            image={'Title'}
            title={'2005'}
            //   year={item?.releaseDate?.slice(0, 4)}
          />
        </div>
        <Link href={'/trending'}>
          <Button text={'See More'} />
        </Link>
      </main>

      <Footer />
    </>
  );
}
