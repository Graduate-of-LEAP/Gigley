import { Container } from '../assets/Container';
import { ComfirmDetails } from './ComfirmDetails';
import { OrderDetails } from './OrderDetails';

export const ComfirmDetailsAndOrderDetails = () => {
  return (
    <Container className="bg-white">
      <div className="h-[1091px] w-[1100px] flex justify-center gap-20 bg-white ">
        <ComfirmDetails />
        <OrderDetails />
      </div>
    </Container>
  );
};
