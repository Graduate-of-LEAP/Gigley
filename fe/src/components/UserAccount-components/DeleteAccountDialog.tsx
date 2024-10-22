import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

export const DeleteAccountDialog = () => {
  return (
    <div>
      <Dialog>
        <DialogTrigger>Delete Account</DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <div className="flex gap-2">
              <div className="flex">
                Confirm your <br></br> decision
              </div>
              <div className="flex-1 ">
                <div>Are you sure you want to delete your account?</div>
                <div className=" gap-y-3 mt-7">
                  <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-white  bg-[#1167b1] cursor-pointer hover:text-white hover:bg-[#0055a5]">
                    Yes, I'm sure
                  </div>
                  <div className="px-8 py-2 border rounded-md w-fit text-lg font-semibold text-[#3d463d] border-[#3d463d] cursor-pointer hover:bg-slate-100 mt-5">
                    Never mind
                  </div>
                </div>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};
