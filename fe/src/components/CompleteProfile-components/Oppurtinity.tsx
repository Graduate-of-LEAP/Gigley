import { Container } from '../assets/Container';
import { FaEnvelope } from 'react-icons/fa';
import { FaUser } from 'react-icons/fa';
import { FaShieldAlt } from 'react-icons/fa';

export const OpportunitySection = () => {
  return (
    <Container className="bg-white">
      <div className="flex flex-col items-center justify-center min-h-screen py-10 bg-gray-50">
        <div className="max-w-xl p-6 bg-white shadow-lg rounded-lg">
          {/* Header */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">
            Hey Tuguldurbayr. Ready for your next big opportunity?
          </h1>

          {/* List of options */}
          <ul className="space-y-4 mb-6">
            <li className="flex items-center space-x-3">
              <FaUser className="text-xl text-gray-600" />
              <span className="text-gray-700">
                Answer a few questions and start building your profile
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaEnvelope className="text-xl text-gray-600" />
              <span className="text-gray-700">
                Apply for open roles or list services for clients to buy
              </span>
            </li>
            <li className="flex items-center space-x-3">
              <FaShieldAlt className="text-xl text-gray-600" />
              <span className="text-gray-700">
                Get paid safely and know we're here to help
              </span>
            </li>
          </ul>

          {/* Button */}
          <button className="bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-600 transition">
            Get started
          </button>

          {/* Footer */}
          <p className="text-sm text-gray-500 mt-4">
            It only takes 5-10 minutes and you can edit it later. We’ll save as
            you go.
          </p>
        </div>
      </div>
    </Container>
  );
};
