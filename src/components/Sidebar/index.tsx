import logoIcon from '@/assets/images/logo.svg';
import homeIcon from '@/assets/images/sidebar/home.svg';
import chatIcon from '@/assets/images/sidebar/chat.svg';
import userIcon from '@/assets/images/sidebar/usersFour.svg';
import settingsIcon from '@/assets/images/sidebar/settings.svg';

const Sidebar = () => {
  return (
    <div className='w-[60px] h-screen bg-[#115E56] flex flex-col items-center gap-[30px] px-4 py-6'>
      <div className=''>
        <img className='w-6 h-6' src={logoIcon} alt='Wingman' />
      </div>
      <div className='flex flex-col items-center justify-between h-full'>
        <div className='flex flex-col items-center gap-[22px] '>
          <img className='w-6 h-6 cursor-pointer' src={homeIcon} alt='Home' />
          <img className='w-6 h-6 cursor-pointer' src={chatIcon} alt='Sales' />
          <img className='w-6 h-6 cursor-pointer' src={userIcon} alt='Chats' />
        </div>

        <img className='w-6 h-6 cursor-pointer' src={settingsIcon} alt='Settings' />
      </div>
    </div>
  );
};

export default Sidebar;
