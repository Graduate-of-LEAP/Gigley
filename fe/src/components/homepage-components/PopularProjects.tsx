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
    <div className="border-2 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-transform transform hover:scale-105">
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
        'https://t3.ftcdn.net/jpg/08/48/12/26/240_F_848122654_OXH1uBhbgn7W4Xy7aUUepq9uxD1tbBpf.jpg',
      title: 'Тавилга зөөнө',
      price: 'үнэ: цагийн 50,000 төгрөг',
    },
    {
      imageSrc:
        'https://t4.ftcdn.net/jpg/02/41/70/32/240_F_241703248_5bFuTXMtO9YZB7QcD9jbWBjcDB3gT07z.jpg',
      title: 'Сангийн ажил',
      price: 'Үнэ: 75,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://t3.ftcdn.net/jpg/02/26/87/45/240_F_226874572_oWORxTe8djCE94uHmHiAMqxrSxCbfsH3.jpg',
      title: 'Цахилгааны ажил',
      price: 'Үнэ: 100,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://t4.ftcdn.net/jpg/02/17/77/96/240_F_217779684_5e5ocGGDoHMNLL2dmXpA7HAvOxlQsJa3.jpg',
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
        'https://t4.ftcdn.net/jpg/02/71/43/67/240_F_271436744_CCyve7a2CSe5KsxQuEzUmCO0HxxXuD7B.jpg',
      title: 'Ханын болон тохьжилтийн зураг',
      price: 'Үнэ: 50,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://t3.ftcdn.net/jpg/02/71/68/50/240_F_271685015_gvEnHSis35gIRYXPZbWljchhTYhF14T8.jpg',
      title: 'Дээвэр засвар',
      price: 'Үнэ: 500,000₮ эхэлнэ',
    },
    {
      imageSrc:
        'https://t4.ftcdn.net/jpg/02/46/89/14/240_F_246891418_0aBcMZtE4oC6vNPjBxHWjoOB6G3jKHWE.jpg',
      title: 'Зурагт тогтооно',
      price: 'Үнэ: 50,000₮ эхэлнэ',
    },
  ];

  return (
    <Container className="bg-white py-12">
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
