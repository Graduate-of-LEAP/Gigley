import { Container } from '../assets/Container';
import { Checkbox } from '@/components/ui/checkbox';

export const TaskOptions = () => {
  return (
    <Container className="bg-white p-6 max-w-md mx-auto rounded-lg shadow-md">
      <h2 className="text-lg font-semibold mb-4">Task Options</h2>

      <p className="text-sm text-gray-700 mb-4">
        Select the approximate size of your task:
      </p>

      <div className="space-y-4 mb-6">
        <div className="flex items-center space-x-3">
          <Checkbox id="smallTask" />
          <label
            htmlFor="smallTask"
            className="text-sm font-medium text-gray-700"
          >
            Small - Est. 1 hr
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox id="mediumTask" />
          <label
            htmlFor="mediumTask"
            className="text-sm font-medium text-gray-700"
          >
            Medium - Est. 2-3 hrs
          </label>
        </div>

        <div className="flex items-center space-x-3">
          <Checkbox id="largeTask" />
          <label
            htmlFor="largeTask"
            className="text-sm font-medium text-gray-700"
          >
            Large - Est. 4+ hrs
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="w-full bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition duration-200"
      >
        Continue
      </button>
    </Container>
  );
};
