import { Container } from '../assets/Container';
import { FaStar } from 'react-icons/fa';
import { Button } from '@/components/ui/button';

const services = [
  {
    title: 'Appliance Installation & Repairs',
    price: '$92.91',
    rating: '5.0',
    reviews: '15',
    description: 'I have over 10 years of experience',
  },
  {
    title: 'Babyproofing',
    price: '$80.52',
    rating: 'No Reviews',
    reviews: '0',
    description: 'I have experience in that field! Did dozens jobs',
  },
  {
    title: 'Branch & Hedge Trimming',
    price: '$73.30',
    rating: 'No Reviews',
    reviews: '0',
    description:
      'I have experience with different types of yard work, have a lot of tools.',
  },
  {
    title: 'Door, Cabinet, & Furniture Repair',
    price: '$92.91',
    rating: '5.0',
    reviews: '10',
    description: 'I have all tools required for minor repairs.',
  },
  {
    title: 'Electrical Help',
    price: '$134.21',
    rating: '5.0',
    reviews: '71',
    description: 'Hi, I can help you complete your electrical projects.',
  },
];

export const SelectAndContinue = () => {
  return (
    <Container className="bg-white">
      <div className="w-[907px] h-auto  ">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full h-[216px] border mb-6 rounded p-6 flex justify-between"
          >
            <div className="flex flex-col justify-between">
              <h2 className="font-bold">
                {service.title} for {service.price}
              </h2>

              <div className="flex items-center gap-1">
                <FaStar className="text-yellow-400" />
                <p>
                  {service.rating} ({service.reviews} сэтгэгдэл)
                </p>
              </div>

              <p>{service.description}</p>

              <p className="text-green-600">профайл & сэтгэгдэл харах</p>
            </div>

            <Button
              className="bg-green-600 h-[46px] w-[200px] text-white font-bold"
              variant="outline"
            >
              Select & Continue
            </Button>
          </div>
        ))}
      </div>
    </Container>
  );
};
