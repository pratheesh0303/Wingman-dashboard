import { useState, useEffect } from 'react';
import CardHeader from '../../pages/Cards/CardHeader';
import CardBody from '../../pages/Cards/CardBody';
import Card from '../../pages/Glance/card';

import up from '@/assets/images/cards/up.svg';
import down from '@/assets/images/cards/down.svg';
import chatIcon from '@/assets/images/cards/chat.svg';
import checkIcon from '@/assets/images/cards/check.svg';
import coinsIcon from '@/assets/images/cards/coins.svg';
import coinIcon from '@/assets/images/cards/coin.svg';
import piggyIcon from '@/assets/images/cards/piggybank.svg';
import tagIcon from '@/assets/images/cards/tag.svg';

import { fetchGlanceData } from '../../api';
import { formatCurrency } from '../../utils/functions';
import Loader from '../../widgets/Loader';
import NoData from '../../widgets/NoData';

interface GlanceData {
  title: string;
  key: string;
  value: number;
  percentage: number;
  type: string;
  currency?: string;
}

const Glance = () => {
  const [glanceData, setGlanceData] = useState<GlanceData[]>([]);
  const [selectedDays, setSelectedDays] = useState('7');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getGlanceData = async () => {
      setIsLoading(true);
      const data = await fetchGlanceData({days: selectedDays});
      setGlanceData(data as GlanceData[]);
      setIsLoading(false);
    };
    getGlanceData();
  }, [selectedDays]);

  return (
    <div>
      <div className='flex justify-between items-center'>
      <CardHeader title='At a glance' />
      <div>
        <select className='cursor-pointer w-full rounded-[8px] border border-[#DCDFE4]  py-[6px] px-3' value={selectedDays} onChange={(e) => setSelectedDays(e.target.value)}>
          <option value='7'>7 Days</option>
          <option value='15'>15 Days</option>
          <option value='30'>30 Days</option>
          <option value='60'>60 Days</option>
          </select>
        </div>
      </div>
      <CardBody className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {isLoading ? (
          <Loader />
        ) : glanceData?.length === 0 ? (
          <NoData />
        ) : (
          glanceData?.length > 0 &&
          glanceData?.map((item) => (
            <Card key={item?.title}>
              <div className='flex flex-col  gap-2'>
                <span className='flex items-center gap-2'>
                  <img
                    src={
                      item?.key === 'consultations'
                        ? chatIcon
                        : item?.key === 'orders_placed'
                        ? tagIcon
                        : item?.key === 'conversion'
                        ? checkIcon
                        : item?.key === 'total_sale_value'
                        ? coinsIcon
                        : item?.key === 'average_order_value'
                        ? coinIcon
                        : item?.key === 'commission_paid'
                        ? piggyIcon
                        : ''
                    }
                    alt='icon'
                    className='w-4 h-4'
                  />
                  <h2 className='text-xs font-semibold text-[#667085] leading-[30px] tracking-[.5px]'>
                    {item?.title}
                  </h2>
                </span>

                <p className='text-[32px] font-bold text-[#212636] leading-[38.4px] tracking-[-.02em]'>
                  {item?.key === 'total_sale_value' ||
                  item?.key === 'average_order_value' ||
                  item?.key === 'commission_paid'
                    ? formatCurrency(item.value, item.currency || '')
                    : item.value}
                </p>
                <p className='text-sm font-normal  flex items-center gap-2 leading-[21.98px] tracking-[-.01em]'>
                  <img
                    src={item?.percentage > 0 ? up : down}
                    alt='up'
                    className='w-6 h-6'
                  />
                  <div>
                    <span
                      className={
                        item?.percentage > 0
                          ? 'text-[#15B79F]'
                          : 'text-[#F04438]'
                      }
                    >
                      {Math.abs(item?.percentage)}%
                    </span>
                    <span className={`text-[#667085]`}>
                      {item?.percentage > 0 ? ' increase' : ' decrease'}
                    </span>
                  </div>
                </p>
              </div>
            </Card>
          ))
        )}
      </CardBody>
    </div>
  );
};

export default Glance;
