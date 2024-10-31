import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';
import { DeleteAccountDialog } from '@/components/UserAccount-components/DeleteAccountDialog';

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
                Account Deletion
              </h1>
              <button className="text-[#3d463d] text-[16px] px-[22px] py-2 border border-[#3d463d] rounded-md font-bold">
                Edit
              </button>
            </div>
            <div>
              <div>
                Once youve deleted your account, you will no longer be able to
                log in to the TaskRabbit site or apps. This action cannot be
                undone.
              </div>
              <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-[#1167b1] border-[#1167b1] cursor-pointer hover:bg-slate-100 mt-6">
                <DeleteAccountDialog />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
