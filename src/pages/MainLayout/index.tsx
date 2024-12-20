import Glance from '../../components/Glance';
import Insights from '../../components/Insights';
import Orders from '../../components/Orders';

const MainLayout = () => {
  return (
    <div className='w-full h-full p-10'>
      <div className='w-full h-full p-4 border border-[#DCDFE4] rounded-3xl'>
        <Glance />
        <Insights />
        <Orders />
      </div>
    </div>
  );
};

export default MainLayout;
