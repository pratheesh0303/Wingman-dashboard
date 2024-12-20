import { useState, useEffect } from 'react';
import CardBody from '../../pages/Cards/CardBody';
import CardHeader from '../../pages/Cards/CardHeader';
import chatIcon from '@/assets/images/cards/chat.svg';
import chatBlueIcon from '@/assets/images/cards/chatBlue.svg';
import chartBarIcon from '@/assets/images/cards/chartBar.svg';
import ellipse from '@/assets/images/cards/ellipse.svg';

import Card from '../../pages/Glance/card';
import Barchart from '../../widgets/charts/Barchart';
import Legends from '../../widgets/Legends';
import {
  fetchConsultationsData,
  fetchCurrentvspastperiodData,
  fetchForecastData,
} from '../../api';
import Loader from '../../widgets/Loader';
import NoData from '../../widgets/NoData';
import Forecast from './Forecast';

const Insights = () => {
  const [consultationsData, setConsultationsData] = useState({});
  const [currentvspastperiodData, setCurrentvspastperiodData] = useState({});
  const [isLoadingConsultations, setIsLoadingConsultations] = useState(true);
  const [isLoadingCurrentvspastperiod, setIsLoadingCurrentvspastperiod] =
    useState(true);
  const [isLoadingForecast, setIsLoadingForecast] = useState(true);
  const [forecastData, setForecastData] = useState([]);
  useEffect(() => {
    const getConsultationsData = async () => {
      setIsLoadingConsultations(true);
      const data = await fetchConsultationsData();
      setConsultationsData(data as any);
      setIsLoadingConsultations(false);
    };
    getConsultationsData();
  }, []);

  useEffect(() => {
    const getCurrentvspastperiodData = async () => {
      setIsLoadingCurrentvspastperiod(true);
      const data = await fetchCurrentvspastperiodData();
      setCurrentvspastperiodData(data as any);
      setIsLoadingCurrentvspastperiod(false);
    };
    getCurrentvspastperiodData();
  }, []);

  useEffect(() => {
    const getForecastData = async () => {
      setIsLoadingForecast(true);
      const data = await fetchForecastData();
      setForecastData(data as any);
      setIsLoadingForecast(false);
    };
    getForecastData();
  }, []);

  return (
    <div>
      <CardHeader title='Insights' />
      <CardBody className='flex  gap-6'>
        <div className='w-full lg:w-1/2'>
          <Card>
            <div className='flex flex-col  gap-2'>
              <span className='flex items-center gap-2'>
                <img src={chatIcon} alt='icon' className='w-4 h-4' />
                <h2 className='text-xs font-semibold text-[#667085] leading-[30px] tracking-[.5px]'>
                  CONSULTATIONS
                </h2>
              </span>
              {isLoadingConsultations ? (
                <Loader />
              ) : Object.keys(consultationsData).length === 0 ? (
                <NoData />
              ) : (
                <>
                  <Barchart
                    id={'consultations'}
                    data={consultationsData}
                    colors={['#FFF3C6', '#8A94A6', '#15B79F']}
                    line={['Incoming', 'Answered']}
                  />
                  <hr />
                  <Legends
                    data={consultationsData}
                    colors={['#FFF3C6', '#8A94A6', '#15B79F']}
                  />
                </>
              )}
            </div>
          </Card>
        </div>
        <div className='grid grid-cols-2 gap-6 w-1/2'>
          <Card>
            <div className='flex flex-col  gap-2'>
              <span className='flex items-center gap-2'>
                <img src={chartBarIcon} alt='icon' className='w-4 h-4' />
                <h2 className='text-xs font-semibold text-[#667085] leading-[30px] tracking-[.5px]'>
                  VS PAST PERIOD
                </h2>
              </span>
              {isLoadingCurrentvspastperiod ? (
                <Loader />
              ) : Object.keys(currentvspastperiodData).length === 0 ? (
                <NoData />
              ) : (
                <>
                  <Barchart
                    id={'vs_past_period'}
                    data={currentvspastperiodData}
                    colors={['#CCFBEF', '#134E48']}
                    line={[]}
                  />
                  <hr />
                  <Legends
                    data={currentvspastperiodData}
                    colors={['#CCFBEF', '#134E48']}
                  />
                </>
              )}
            </div>
          </Card>
          <Card
            style={{
              background: 'linear-gradient(180deg, #15B79F 0%, #0E9382 100%)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <img
              src={ellipse}
              alt='icon'
              className='absolute w-full top-0 left-1/2 opacity-20 transform -translate-x-1/2'
            />
            <img
              src={ellipse}
              alt='icon'
              className='absolute w-full -top-1/3 left-1/2 opacity-20 transform -translate-x-1/2'
            />
            <div className='flex flex-col  gap-6 text-[#ffffff]'>
              <span className='flex items-center gap-2'>
                <img src={chatBlueIcon} alt='icon' className='w-4 h-4' />
                <h2 className='text-xs font-semibold text-[#CCFBEF] leading-[30px] tracking-[.5px]'>
                  FORECAST
                </h2>
              </span>
              {isLoadingForecast ? (
                <Loader />
              ) : forecastData.length === 0 ? (
                <NoData />
              ) : (
                <Forecast data={forecastData} />
              )}
            </div>
          </Card>
        </div>
      </CardBody>
    </div>
  );
};

export default Insights;
