

import pieSliceIcon from '@/assets/images/topbar/pieSlice.svg'
import chatIcon from '@/assets/images/topbar/chat.svg'
import tagIcon from '@/assets/images/topbar/tag.svg'
const Topbar = () => {
  return (
    <div className="px-10 py-6 border-b border-[#DCDFE4] w-full h-[94px]">
        <ul className="flex gap-3">
            <li>
              
                <a className="cursor-pointer flex gap-2 justify-center items-center text-lg text-[#8A94A6] font-medium p-3 rounded-3xl hover:bg-[#CCFBEF] transition-all duration-300 bg-[#CCFBEF]">
                    <img src={pieSliceIcon} alt="Summary" />
                    Summary</a>
            </li>
            <li>
                <a className="cursor-pointer flex gap-2 justify-center items-center text-lg text-[#8A94A6] font-medium p-3 rounded-3xl hover:bg-[#CCFBEF] transition-all duration-300 " >
                    <img src={tagIcon} alt="Sales" />
                    Sales</a>
            </li>
            <li>
                <a className="cursor-pointer flex gap-2 justify-center items-center text-lg text-[#8A94A6] font-medium p-3 rounded-3xl hover:bg-[#CCFBEF] transition-all duration-300 " >
                    <img src={chatIcon} alt="Sales" />
                    Chats</a>
            </li>
        </ul>
    </div>
  )
}

export default Topbar