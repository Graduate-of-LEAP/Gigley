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
                Account Balance
              </h1>
            </div>
            <div>
              <div className="flex gap-1">
                <div className="text-base font-bold text-[#3d463d]">
                  Available account balance:
                </div>
                <div>$0</div>
              </div>

              <div>
                *Account balances are automatically applied when a task is
                <br></br>
                completed.
              </div>

              <div className="flex flex-col mt-6 mb-6">
                <label>Enter a redemption code:</label>
                <input className="border px-4 py-2 rounded-md w-[500px]"></input>
              </div>

              <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-white  bg-[#1167b1] cursor-pointer hover:text-white hover:bg-[#0055a5]">
                Apply
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Page;
