import { Container } from '../assets/Container';

export const TellUsDetails = () => {
  return (
    <Container className="bg-white p-6 max-w-lg mx-auto rounded-lg shadow-md">
      <div className="mb-6">
        <h2 className="text-lg font-semibold mb-2">
          Tell Us the Details of Your Task
        </h2>
        <p className="text-sm text-gray-700">
          Start the conversation and tell your Tasker what you need done. This
          helps us show you only qualified and available Taskers for the job.
          Don’t worry, you can edit this later.
        </p>
      </div>

      <div className="mb-6">
        <label
          htmlFor="taskDetails"
          className="text-sm font-medium text-gray-700 mb-2 block"
        >
          Task Details
        </label>
        <textarea
          id="taskDetails"
          placeholder="Describe the task you need help with..."
          className="w-full p-3 border border-gray-300 rounded-lg resize-none focus:outline-none focus:border-blue-500"
        ></textarea>
        <p className="text-xs text-gray-500 mt-2">
          If you need two or more Taskers, please post additional tasks for each
          Tasker needed.
        </p>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        See Taskers & Prices
      </button>
    </Container>
  );
};
