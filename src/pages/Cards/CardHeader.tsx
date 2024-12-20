const CardHeader = ({ title }: { title: string }) => {
  return (
    <h1 className='text-[32px] font-medium pt-8 pr-6 pb-4 pl-6 text-[#212636] leading-[38.4px] tracking-[-.02em]'>
      {title}
    </h1>
  );
};

export default CardHeader;
