import Link from 'next/link';

export default function Header() {
  return (
    <>
      <header className='flex justify-between items-center py-8 px-24 bg-transparent text-white'>
        <div className='flex items-center gap-16 text-base'>
          <p className='text-2xl text-yellow-400 font-bold'>NONSKUY</p>
          <Link href={'/'}>Home</Link>
          <Link href={'/movie-list'}>Movie</Link>
          <Link href={'/trending'}>Trending</Link>
        </div>
      </header>
    </>
  );
}
