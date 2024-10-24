import { SelectItemText } from '@radix-ui/react-select';

export const SortedBy = () => {
  const sortedData = [
    {
      sortName: 'Recommended',
    },
    {
      sortName: 'Price (Lowest to Highest)',
    },
    {
      sortName: 'Price (Highest to Lowest)',
    },
    {
      sortName: 'Positive Reviews',
    },
    {
      sortName: '#Of Completed Tasks',
    },
  ];
  return (
    <div className="flex gap-x-2 items-center justify-end pr-14 py-6">
      <div className=" text-[#1e1e1e] font-bold">Sorted By:</div>

      <div className="px-3 py-2 border bg-white rounded-full border-[#848484]">
        <select className="">
          {sortedData.map((item, index) => {
            return <option key={index}>{item.sortName}</option>;
          })}
        </select>
      </div>
    </div>
  );
};
