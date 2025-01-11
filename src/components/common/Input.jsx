import { useState } from 'react';
import styled from 'styled-components';

const Input = ({ variant, placeholder, value, onChange, onRemove }) => {
    const [inputValue, setInputValue] = useState(value || '');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        if (onChange) {
            onChange(e.target.value);
        }
    };

    return (
        <Wrapper>
            <input type="text" placeholder={placeholder} value={inputValue} onChange={handleChange} />
            {variant === 'todo' && <RemoveBtn onClick={onRemove}>X</RemoveBtn>}
        </Wrapper>
    );
};

export default Input;
const Wrapper = styled.div`
    position: relative;
    width: 100%;
    input {
        width: 100%;
    }
`;

const RemoveBtn = styled.button`
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    font-size: 12px;
`;
