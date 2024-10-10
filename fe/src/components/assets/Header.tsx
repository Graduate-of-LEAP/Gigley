import { Container } from './Container';

export const Header = () => {
  return (
    <Container className="bg-white ">
      <div className="h-[70px]  flex justify-between items-center  border-b border-gray-500">
        <p className='font-bold text-3xl'>GiGley</p>
        <div className='flex items-center gap-4 font-medium'>
          <p>Үйлчилгээ</p>
        <div className='flex items-center gap-2 font-medium'>
          <p>Sign Up /</p>
          <p>Login</p>
        </div>
        <button className='border border-[#0d7a5f] rounded-lg text-[#0d7a5f] px-7 py-2'>Ажил олгогчоор бүртгүүлэх</button>
        </div>
        
      </div>
    </Container>
  );
};
