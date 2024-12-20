const Legends = ({data, colors}: {data: any, colors: string[]}) => {
    console.log(data, colors)
  return (
    <div className='flex gap-4'>
        {
            Object.keys(data)?.length > 0 ? Object.keys(data)?.map((legend: any, index: number) => (
                <div key={legend} className='flex items-center gap-2'>
                    <span className='w-4 h-1 rounded-lg' style={{backgroundColor: colors[index]}}></span>
                    <h2 className='text-xs font-semibold text-[#667085] leading-[19.92px]'>
                        {legend}
                    </h2>
                </div>
            )) : ''
        }
    </div>
  )
}

export default Legends