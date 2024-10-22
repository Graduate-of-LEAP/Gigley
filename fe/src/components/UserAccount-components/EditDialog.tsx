import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Button } from '../ui/button';

export const EditDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Edit</DialogTrigger>
        <DialogContent className="max-w-[660px] px-10 py-8">
          <DialogHeader>
            <DialogTitle className="text-center text-[#041f22] text-[26px] border-b mb-6 pb-6">
              Authentication Required
            </DialogTitle>
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
            <DialogDescription>
              <div className="flex flex-col items-center gap-y-7 text-[#041f22] text-base">
                <div className="text-center">
                  To keep your account secure, set up two-factor authentication
                  to edit this information. Enter your phone number to receive
                  the security code and activate two-factor authentication.
                </div>
                <div>
                  <select className="border px-4 py-[10px] rounded-md mr-2">
                    <option></option>
                  </select>
                  <input
                    type="number"
                    alt="phonenumber"
                    className="border px-4 py-[10px] rounded-md"
                  ></input>
                </div>
                <div className="px-28 py-3 w-fit bg-[#1167b1] text-white text-base rounded-md font-semibold cursor-pointer">
                  Send Code
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
