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
            <div className="flex border-b border-[#d9dbdf] pb-3 justify-between mb-[28px]">
              <h1 className="text-[28px] font-bold text-[#3d463d]">
                Edit Billing Info
              </h1>
            </div>
            <div>
              <input
                type="number"
                placeholder="Card number"
                className="border px-2 py-2 rounded-md w-[500px]"
              ></input>
              <div className="flex gap-3 mt-7">
                <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-[#3d463d] border-[#3d463d] cursor-pointer hover:bg-slate-100">
                  Cancel
                </div>
                <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-[#9ea1a0] border-[#9ea1a0] bg-[#eef1f0] cursor-auto hover:text-white hover:bg-slate-600">
                  Save
                </div>
              </div>
              <div className="mt-6 text-gray-500">
                Payment method will update for all tasks, including the ones
                currently open.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
