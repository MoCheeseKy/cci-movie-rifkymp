import { CiCalendar } from 'react-icons/ci';

export default function MovieCardComponent({ title, year, image }) {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${image})`,
        }}
        className='w-full aspect-[3/4.5] p-4 flex flex-col justify-end rounded text-white bg-cover'
      >
        <p
          className='text-xl font-bold
        '
        >
          {title}
        </p>
        <div className='flex gap-4 items-center text-base'>
          <CiCalendar />
          <p>{year}</p>
        </div>
      </div>
    </>
  );
}
