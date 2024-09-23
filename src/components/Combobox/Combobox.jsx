import { useState } from 'react';
import PropTypes from 'prop-types';

const ComboBox = ({ inputValue, name, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const options = ['UAH', 'EUR', 'USD'];


  return (
    <div className="relative">
      <input
        type="text"
        name={name}
        value={inputValue}
        onChange={onChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
        className="border border-gray-300 rounded p-2 w-full"
        placeholder="Currency..."
      />
      {isOpen && options.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded w-full mt-1 z-10">
          {options.map((option, index) => (
            <li
              key={index}
              onMouseDown={() => {
                onChange({ target: { name, value: option } });
                setIsOpen(false);
              }}
              className="p-2 hover:bg-gray-200 cursor-pointer"
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

ComboBox.propTypes = {
  inputValue: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ComboBox;
