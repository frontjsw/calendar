import { useState } from 'react';

const Input = ({ placeholder, value, onChange }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return <input type="text" placeholder={placeholder} value={inputValue} onChange={handleChange} />;
};

export default Input;
