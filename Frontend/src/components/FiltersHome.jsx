import { useState } from 'react';
import { Chip } from '@material-tailwind/react';
import { useNavigate } from "react-router-dom";

export function ChipPills() {
  const navigate = useNavigate();
  const [selectedChips, setSelectedChips] = useState([]);

  const handleFilterClick = (value) => {
    setSelectedChips(value);
    navigate(`/search/${value}`, { state: value });
    // Update the state with the modified tags array
  };

  return (
    <div className='m-4 flex flex-row flex-wrap place-content-evenly'>
      {filterWordsData.map((filter) => (
        <Chip
          key={filter.label}
          variant="ghost"
          value={filter.label}
          className={`rounded-full cursor-pointer  ${
            selectedChips.includes(filter.label) ? 'bg-black text-white' : ''
          }`}
          onClick={() => {
            handleFilterClick(filter.value);
          }}
        >
          {filter.label}
        </Chip>
      ))}
    </div>
  );
}

const filterWordsData = [
  {
    label: "Insights Explorer",
    value: "Insights Explorer"
  },
  {
    label: "Smart Living Tech",
    value: "Smart Living"
  },
  {
    label: "Health Innovator",
    value:"Health"
  },
  {
    label: "AI Solutions",
    value :"AI"
  },
  {
    label: "Quantum Tech",
    value: "quantum"
  },
  {
    label: "IoT & Energy Innovator",
    value :"iot"
  },
  {
    label: "Data & Harmony",
    value: "Data"
  },
];

export default ChipPills;
