import { useState, useEffect } from 'react';
import { fetchOrderData } from '../../api';
import CardBody from '../../pages/Cards/CardBody';
import CardHeader from '../../pages/Cards/CardHeader';
import Table from '../../widgets/Table';
import Loader from '../../widgets/Loader';
import NoData from '../../widgets/NoData';
interface OrderData {
  columns: string[];
  values: any[];
}
const Orders = () => {
  const [orderData, setOrderData] = useState<OrderData>({ columns: [], values: [] });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getOrderData = async () => {
      setIsLoading(true);
      const data = await fetchOrderData();
      setOrderData(data as OrderData);
      setIsLoading(false);
    };
    getOrderData();
  }, []);

  return (
    <div>
      <CardHeader title='Orders' />
      <CardBody className='gap-6'>
        {isLoading ? <Loader /> : 
          orderData.values.length === 0 ? <NoData /> : <Table data={orderData} />
        }
      </CardBody>
    </div>
  );
};

export default Orders;
