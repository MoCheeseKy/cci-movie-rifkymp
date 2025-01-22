import Link from 'next/link';

export default function LayoutComponent({ children }) {
  return (
    <>
      <div className='flex flex-col '>
        <header className='flex justify-between items-center py-8 px-24 bg-blue-900 text-white'>
          <div className='flex items-center gap-16 text-base'>
            <p className='text-2xl text-yellow-400 font-bold'>NONSKUY</p>
            <Link href={'/'}>Home</Link>
            <Link href={'/movie-list'}>Movie</Link>
            <Link href={'/trending'}>Trending</Link>
          </div>
        </header>
        <main className='py-12 px-24 bg-blue-900 text-white min-h-[100vh]'>
          {children}
        </main>
        <footer className='flex justify-center py-8 px-24 bg-yellow-400 text-sm'>
          @2024 NONSKUY. All Right Deserve
        </footer>
      </div>
    </>
  );
}
