import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';
import { EditDialog } from '@/components/UserAccount-components/EditDialog';

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
            <div className="flex border-b border-[#d9dbdf] pb-3 justify-between mb-[28px]">
              <h1 className="text-[28px] font-bold text-[#3d463d]">
                Change Password
              </h1>
              <div className="text-[#3d463d] text-[16px] px-[22px] py-2 border border-[#3d463d] rounded-md font-bold">
                <EditDialog />
              </div>
            </div>
            <div className="font-bold text-[#3d463d] text-base">
              Current Password: *****
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
