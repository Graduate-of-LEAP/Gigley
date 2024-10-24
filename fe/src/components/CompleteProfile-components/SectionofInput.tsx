import { Container } from '../assets/Container';
import { Input } from '../ui/input';

export const SectionOfInput = () => {
  return (
    <Container className="bg-white">
      <div className="h-fit  flex flex-col justify-center gap-5">
        <Input placeholder="Description" />
        <Input />
        <Input />
      </div>
    </Container>
  );
};
