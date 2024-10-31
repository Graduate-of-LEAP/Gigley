import { Container } from '../assets/Container';

export const YourTaskLocation = () => {
  return (
    <Container className="bg-white p-8 w-full mx-auto rounded-lg shadow-md">
      <div className="bg-[#f4f7f6] p-6 rounded-lg">
        <h2 className="text-xl font-semibold mb-6">Cleaning Task Location</h2>

        <p className="mb-4 text-sm text-gray-700">
          Enter your full address to help us assign the best Tasker for your
          cleaning needs.
        </p>

        <div className="border-2 border-gray-200 p-6 rounded-lg">
          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="streetAddress"
            >
              Street Address
            </label>
            <input
              id="streetAddress"
              type="text"
              placeholder="Enter street address"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label
              className="block text-gray-600 text-sm mb-2"
              htmlFor="apartmentNumber"
            >
              Apartment Number
            </label>
            <input
              id="apartmentNumber"
              type="text"
              placeholder="Enter apartment number"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="mb-6">
            <label className="block text-gray-600 text-sm mb-2" htmlFor="city">
              City
            </label>
            <input
              id="city"
              type="text"
              placeholder="Enter your city"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Continue
          </button>
        </div>
      </div>
    </Container>
  );
};
