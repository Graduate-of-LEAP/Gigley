import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';

export default function () {
  return (
    <div className="w-screen h-screen bg-[#f8fafc]">
      <div className="max-w-screen-lg m-auto p-14">
        <h1 className="text-[32px] font-black text-[#3f453d]">Your Account</h1>
        <div className="flex border rounded-md bg-white border-[#d5dadd]">
          <div className="flex border-r ">
            <AccountSideBar />
          </div>
          <div className="flex-1 p-4 border-l">
            <div className="flex border-b border-[#d9dbdf] pb-3 justify-between mb-[28px]">
              <h1 className="text-[28px] font-bold text-[#3d463d]">
                Cancel a Task
              </h1>
            </div>
            <div className="text-base text-[#022022] pr-2">
              To cancel a task, go to your tasks and select the circle with
              three dots in the upper right corner of the task card. This will
              reveal the 'Cancel Task' button. Select 'Cancel Task' to cancel
              all appointments for that task.
            </div>
            <div className="px-12 py-3 bg-[#1167b1] rounded-md text-white w-fit text-base font-semibold mt-8">
              Go to My Tasks
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
