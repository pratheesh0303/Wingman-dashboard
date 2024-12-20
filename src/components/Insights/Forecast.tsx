import upIcon from '@/assets/images/cards/up.svg';
import downIcon from '@/assets/images/cards/down.svg';
const Forecast = ({ data }: { data: any[] }) => {
  return (
    <>
      {data?.length > 0 &&
        data.map((item) => (
          <div key={item?.title} className='flex flex-col gap-3'>
            <div className='flex items-start justify-between gap-4 '>
              <h1 className='text-[56px] font-medium  leading-[67.2px] tracking-[-.01em]'>
                {item?.percentage === 0 ? '' : item?.percentage > 0 ? '+' : '-'}{' '}
                {Math.abs(item?.percentage)}%
              </h1>
              <img
                src={item?.percentage > 0 ? upIcon : downIcon}
                alt='icon'
                className='w-[35px] h-[35px] filter brightness-0 invert '
              />
            </div>
            <p className='text-sm font-normal  flex items-center gap-2 leading-[21.98px] tracking-[-.01em]'>
              forecasted {item?.percentage > 0 ? 'increase' : 'decrease'} in
              your {item?.title} closed by the end of the current month
            </p>
          </div>
        ))}
    </>
  );
};

export default Forecast;
