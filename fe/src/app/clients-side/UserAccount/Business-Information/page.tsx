import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';

const Page = () => {
  return (
    <div className="w-screen h-screen bg-[#f8fafc]">
      <div className="max-w-screen-lg m-auto p-14">
        <h1 className="text-[32px] font-black text-[#3f453d]">Your Account</h1>
        <div className="flex border rounded-md bg-white border-[#d5dadd]">
          <div className="flex ">
            <AccountSideBar />
          </div>
          <div className="flex-1 p-4 border-l">
            <div className="text-[#022022]">
              Your information is required to comply with local and federal
              regulations. Failure to provide this information may cause payouts
              on your accounts to be paused until information is received.
            </div>
            <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-white  bg-[#1167b1] cursor-pointer hover:text-white hover:bg-[#0055a5] mt-5">
              Update my info
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
