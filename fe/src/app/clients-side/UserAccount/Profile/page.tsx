'use client';
import { AccountSideBar } from '@/components/UserAccount-components/AccountSideBar';
import Image from 'next/image';
import { ImUser } from 'react-icons/im';
import { AiOutlineMail } from 'react-icons/ai';
import { RiPhoneFill } from 'react-icons/ri';
import { EditDialog } from '@/components/UserAccount-components/EditDialog';
import { useAuth } from '@/components/context/auth.customerProvider';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function () {
  const { user, setUser } = useAuth();
  const router = useRouter();
  const logOut = async () => {
    try {
      localStorage.removeItem('token');
      setUser(undefined);
      toast.error('Амжилттай гарлаа');
      router.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-screen h-screen  bg-[#f8fafc] ">
      <div className="max-w-screen-lg m-auto p-14 ">
        <h1 className="text-[32px] font-black text-[#3f453d]">Your Account</h1>
        <div className="flex border rounded-md bg-white border-[#d5dadd]">
          <div className="flex ">
            <AccountSideBar />
          </div>
          <div className="flex-1 p-4 border-l ">
            <div className="flex border-b border-[#d9dbdf] pb-3 justify-between mb-[28px]">
              <h1 className="text-[28px] font-bold text-[#3d463d]">Account</h1>
              <div className="text-[#3d463d] text-[16px] px-[22px] py-2 border border-[#3d463d] rounded-md font-bold">
                <EditDialog />
              </div>
            </div>
            <div>
              <div className="flex gap-x-4 items-center">
                <div className="px-9">
                  <div className="relative w-[142px] h-[142px] rounded-full border ">
                    {/* <Image
                      src={item.img}
                      fill
                      alt="profilePhoto"
                      className="rounded-full "
                    /> */}
                  </div>
                </div>

                <div className="text-[#3d463d] space-y-[10px] flex-1">
                  <div className="flex text-[20px] items-center font-bold gap-x-2">
                    <ImUser />
                    <div>
                      {user?.userName} {user?.lastName}
                    </div>
                  </div>
                  <div className="flex text-[20px] items-center font-bold gap-x-2">
                    <AiOutlineMail />
                    <div>{user?.email}</div>
                  </div>
                  <div className="flex text-[20px] items-center font-bold gap-x-2">
                    <RiPhoneFill />
                    <div>{user?.phone}</div>
                  </div>
                  <button
                    onClick={logOut}
                    className="text-[#3d463d] text-[16px] px-[22px] py-2 border border-[#3d463d] rounded-md font-bold"
                  >
                    Log Out
                  </button>
                </div>
              </div>

              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
