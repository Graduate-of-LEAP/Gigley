'use client';
import { FaAmazon, FaEbay, FaFacebook, FaInstagram } from 'react-icons/fa';
import { Container } from '../assets/Container';
import { useState } from 'react';

const services = [
  { icon: FaAmazon, name: 'amazon', label: 'AMAZON IS HERE' },
  { icon: FaEbay, name: 'ebay', label: 'NOT HERE' },
  { icon: FaFacebook, name: 'fb', label: 'NOT HERE' },
  { icon: FaInstagram, name: 'ig', label: 'NOT HERE' },
];

const arr = [
  {
    icon: 'icon1',
    text: 'text1',
  },
  {
    icon: 'icon2',
    text: 'text2',
  },
  {
    icon: 'icon3',
    text: 'text3',
  },
];
const arrText = ['icon1', 'icon2', 'icon3'];

export const PopularServices = () => {
  const [taskType, setTaskType] = useState('amazon');
  const [displayText, setDisplayText] = useState(arr[0].text);

  const handleClick = (el) => {
    const filteredArr = arr.find((obj) => obj.icon === el);
    if (filteredArr) {
      setDisplayText(filteredArr.text);
    }
  };

  return (
    <Container className="bg-white">
      <div>
        {arrText.map((el) => (
          <div onClick={() => handleClick(el)}>{el}</div>
        ))}
      </div>
      <div className="mt-4">{displayText && <div>{displayText}</div>}</div>
      <div className="bg-green-400">
        PopularServices
        <div className="flex gap-10 justify-center">
          {/* {services.map((service, index) => {
            return <div key={index}>

            </div>;
          })} */}
          <div>
            <FaAmazon
              onClick={() => setTaskType('amazon')}
              className={`w-14 h-14 ${taskType === 'amazon' ? 'text-purple-500' : ''}`}
            />
          </div>
          <div>
            <FaEbay
              onClick={() => setTaskType('ebay')}
              className={`w-14 h-14 ${taskType === 'ebay' ? 'text-purple-500' : ''}`}
            />
          </div>
          <div>
            <FaFacebook
              onClick={() => setTaskType('fb')}
              className={`w-14 h-14 ${taskType === 'fb' ? 'text-purple-500' : ''}`}
            />
          </div>
          <div>
            <FaInstagram
              onClick={() => setTaskType('ig')}
              className={`w-14 h-14 ${taskType === 'ig' ? 'text-purple-500' : ''}`}
            />
          </div>
        </div>
        <div className="font-bold text-5xl text-center">
          {taskType === 'amazon'
            ? 'AMAZON IS HERE'
            : taskType === 'fb'
              ? 'FACEBOOK IS HERE'
              : 'Ebay is here'}
        </div>
        <div></div>
      </div>
    </Container>
  );
};
