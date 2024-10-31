import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';
import { IoDownloadSharp } from 'react-icons/io5';

const Page = () => {
  return (
    <div className="w-screen h-screen bg-[#f8fafc]">
      <div className="max-w-screen-lg m-auto p-14">
        <h1 className="text-[32px] font-black text-[#3f453d] ">Your Account</h1>
        <div className="flex border rounded-md bg-white border-[#d5dadd] ">
          <div className="flex ">
            <AccountSideBar />
          </div>
          <div className="flex-1  border-l p-4">
            <div className="flex border-b border-[#d9dbdf] pb-3 justify-between mb-[28px]">
              <h1 className="text-[28px] font-bold text-[#3d463d]">
                Transaction History
              </h1>
            </div>
            <div className="">
              <div className="text-base font-bold text-[#1167b1] hover:text-[#3f453d] cursor-pointer flex items-center text-center justify-center">
                <IoDownloadSharp />
                <div>Download Transaction History</div>
              </div>
              <div className="text-[#3f453d] mt-5 text-center">
                You don’t have any transactions yet. Get started!
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
