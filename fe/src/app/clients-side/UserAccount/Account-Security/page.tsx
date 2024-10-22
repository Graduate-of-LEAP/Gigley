import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';
import { TbPasswordMobilePhone } from 'react-icons/tb';

export default function () {
  return (
    <div className="w-screen h-screen bg-[#f8fafc]">
      <div className="max-w-screen-lg m-auto p-14">
        <h1 className="text-[32px] font-bold text-[#3f453d]">Your Account</h1>
        <div className="flex border rounded-md bg-white border-[#d5dadd]">
          <div className="flex ">
            <AccountSideBar />
          </div>
          <div className="flex-1 p-4 border-l">
            <div className="flex border-b border-[#d9dbdf] pb-3 justify-between mb-[28px]">
              <h1 className="text-[28px] font-bold text-[#3d463d]">
                Account Security
              </h1>
            </div>
            <div className="flex gap-8">
              <div className="w-[56px] h-[56px] text-[56px]">
                <TbPasswordMobilePhone />
              </div>
              <div>
                <h1 className="text-[20px] font-semibold text-[#3f453d] mb-2">
                  Two-factor authentication
                </h1>
                <div>
                  To keep your account secure, set up two-factor <br></br>
                  authentication. Enter your phone number to receive the
                  <br></br>
                  security code and activate two-factor authentication.
                </div>
                <div className="px-16 py-3 bg-[#1167b1] rounded-md text-white w-fit text-base font-semibold mt-8">
                  Activate
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
