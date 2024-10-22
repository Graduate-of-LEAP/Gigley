import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';

export default function () {
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
                Notifications
              </h1>
            </div>

            <div className="flex gap-6 items-center border-b w-fit pb-3 border-[#d5dadd]">
              <div className="text-[#3f453d] font-bold pr-10">
                Form of Communication
              </div>
              <div className="text-[#3f453d] font-bold">Email</div>
              <div className="text-[#3f453d] font-bold">SMS</div>
              <div className="text-[#3f453d] font-bold text-center">
                Push <br></br>Notification
              </div>
            </div>

            <div className="flex mt-2">
              <div className="pr-44 text-[#3f453d]">Task Updates</div>
              <div>
                <input type="checkbox" className="mr-10" disabled></input>
                <input type="checkbox" className="mr-16" defaultChecked></input>
                <input type="checkbox" disabled></input>
              </div>
            </div>

            <div className="flex mt-2 items-center">
              <div className="pr-[104px] text-[#3f453d]">
                Promotional Emails and <br></br> Notifications
              </div>
              <div>
                <input type="checkbox" className="mr-10" defaultChecked></input>
                <input type="checkbox" className="mr-16" defaultChecked></input>
                <input type="checkbox" defaultChecked></input>
              </div>
            </div>

            <div className="flex gap-3 mt-7">
              <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-[#3d463d] border-[#3d463d] cursor-pointer hover:bg-slate-100">
                Cancel
              </div>
              <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-white  bg-[#1167b1] cursor-pointer hover:text-white hover:bg-[#0055a5]">
                Save
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
