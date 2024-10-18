import { Container } from '../assets/Container';
import { ComfirmDetails } from './ComfirmDetails';
import { OrderDetails } from './OrderDetails';

export const ComfirmDetailsAndOrderDetails = () => {
  return (
    <Container className="bg-white">
      <div className="h-10 bg-purple-800">
        <ComfirmDetails />
        <OrderDetails />
      </div>
    </Container>
  );
};
