import { FC } from 'react';
import { Container } from '../assets/Container';

// Define the prop types for ProjectCard
interface ProjectCardProps {
  imageSrc: string;
  title: string;
  price: string;
}

// ProjectCard component with typed props
const ProjectCard: FC<ProjectCardProps> = ({ imageSrc, title, price }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
      <figure className="h-[200px] overflow-hidden">
        <img
          className="w-full h-full object-cover"
          src={imageSrc}
          alt={`${title} project`}
        />
      </figure>
      <div className="bg-gray-100 p-4 text-center h-full">
        <p className="text-lg font-semibold text-gray-800">{title}</p>
        <p className="text-sm text-gray-600 mt-2">{price}</p>
      </div>
    </div>
  );
};

// Define the project type
interface Project {
  imageSrc: string;
  title: string;
  price: string;
}

// PopularProjects component
export const PopularProjects: FC = () => {
  const projects: Project[] = [
    {
      imageSrc:
        'https://images.ctfassets.net/vwt5n1ljn95x/run4IoZvybxDk65keaoAg/82975826e5988498faa92db72ba9a590/dolly-apartment-move-tile.jpg?w=750&q=75&fm=webp',
      title: 'Тавилга зөөнө',
      price: 'үнэ: цагийн 50,000 төгрөг',
    },
    {
      imageSrc:
        'https://images.ctfassets.net/vwt5n1ljn95x/2vw8Ct7BWBT12032WBzVyf/1b38538e7d8f28fcf03dc2a8a4a31554/Plumbing_Help.jpeg?w=750&q=75&fm=webp',
      title: 'Сангийн ажил',
      price: 'Үнэ: 75,000₮ эхэлнэ',
    },
    {
      imageSrc: '/picture/electricity.jpg',
      title: 'Цахилгааны ажил',
      price: 'Үнэ: 100,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://images.ctfassets.net/vwt5n1ljn95x/15JB3WRwRtvEsf5rcVKmnK/610c440541b1cca93bee3534037379e7/Furniture_Assembly.jpeg?w=750&q=75&fm=webp',
      title: 'Тавилга угсралт ажил',
      price: 'Үнэ: 50,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://t3.ftcdn.net/jpg/01/68/20/89/240_F_168208917_xuQIgF55aHkMFHOkJNT4vT3qHBdS4hAO.jpg',
      title: 'Тохижуулалтын ажил',
      price: 'Үнэ: 50,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://images.ctfassets.net/vwt5n1ljn95x/3sbIHOfdhBhVilGyaApius/829a05b423c4aff40b3bb007668e85cb/Hang_Pictures.jpeg?w=750&q=75&fm=webp',
      title: 'Ханын болон тохьжилтийн зураг',
      price: 'Үнэ: 50,000₮ эхэлнэ',
    },
    {
      imageSrc: '/picture/roof.jpg',
      title: 'Дээвэр засвар',
      price: 'Үнэ: 500,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://images.ctfassets.net/vwt5n1ljn95x/3yZJxfcMurN3fYgm2VIw3v/1f0aee924e621fd5e2684f01f92ca7b2/Mount_TV.jpg?w=750&q=75&fm=webp',
      title: 'Зурагт тогтооно',
      price: 'Үнэ: 50,000₮ эхэлнэ',
    },
  ];

  return (
    <Container className="bg-[#ecf4f1] py-12 ">
      <h2 className="text-4xl font-bold px-4 mb-12 text-gray-900">
        Popular Projects
      </h2>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center px-4">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            imageSrc={project.imageSrc}
            title={project.title}
            price={project.price}
          />
        ))}
      </div>
    </Container>
  );
};
