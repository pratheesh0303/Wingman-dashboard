import viewChat from '../../assets/images/cards/viewChat.svg';
import {
  formatDateTime,
  convertSecondsToHHMM,
  formatCurrency,
} from '../../utils/functions';

const Table = ({ data }: { data: { columns: any[]; values: any[] } }) => {
  return (
    <div className='rounded-[20px] border border-[#DCDFE4] p-[0.01px] bg-white'>
      <table className='w-full rounded-[20px] overflow-hidden '>
        <thead className='bg-[#F9FAFB] border-b border-[#DCDFE4]'>
          <tr>
            {data?.columns?.length > 0 &&
              data?.columns?.map((column) => (
                <th
                  className='text-left p-4 text-[#667085] font-normal text-sm leading-[21.98px] tracking-[0.01em]'
                  key={column?.title}
                >
                  {column?.title}
                </th>
              ))}
            <th className='text-left p-4 text-[#667085] font-normal text-sm leading-[21.98px] tracking-[0.01em]'></th>
          </tr>
        </thead>
        <tbody>
          {data?.values?.length > 0 &&
            data?.values?.map((value) => (
              <tr key={value?.key}>
                {data?.columns?.map((column) => (
                  <td
                    className='px-4 py-[15px] text-[#212636] font-normal text-base leading-6 tracking-[0.01em]'
                    key={column?.key}
                  >
                    <span
                      className={`flex items-center gap-4 ${
                        column?.key === 'commission'
                          ? 'font-bold'
                          : 'font-normal'
                      }`}
                    >
                      {column?.key === 'product' ? (
                        <img
                          src={value?.image}
                          alt='product'
                          className='w-10 h-10'
                        />
                      ) : (
                        ''
                      )}
                      {column?.key === 'date'
                        ? formatDateTime(value[column?.key], 'date')
                        : column?.key === 'time_spent'
                        ? convertSecondsToHHMM(value[column?.key])
                        : column?.key === 'order_value' ||
                          column?.key === 'commission'
                        ? formatCurrency(value[column?.key], value?.currency)
                        : value[column?.key]}
                    </span>
                    {column?.key === 'date' ? (
                      <span className='text-[#212636] font-normal text-xs leading-6 tracking-[0.01em]'>
                        {formatDateTime(value[column?.key], 'time')}
                      </span>
                    ) : (
                      ''
                    )}
                  </td>
                ))}
                <td className='px-4 py-[15px] text-[#8A94A6] font-normal text-xs leading-6 tracking-[0.01em]'>
                  <div className='flex justify-end items-center gap-2 cursor-pointer'>
                    View Chat{' '}
                    <img
                      src={viewChat}
                      alt='view chat'
                      className='w-[10.13px] h-[10.13px]'
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
