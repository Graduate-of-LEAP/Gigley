import { Container } from '../assets/Container';
import { HiOutlineUsers } from 'react-icons/hi2';

export const DescriptionOfSecond = () => {
  return (
    <Container className="bg-white flex border border-[#848484]">
      <div className="flex items-center justify-center p-4 gap-6">
        <div className="text-3xl">
          <HiOutlineUsers />
        </div>
        <div className="h-10">
          Filter and sort to find your Tasker Then view their availability to
          request your <br></br> date and time.
        </div>
      </div>
    </Container>
  );
};
