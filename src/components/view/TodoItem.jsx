import styled from 'styled-components';

const TodoItem = ({ title }) => {
    return <Wrapper>{title}</Wrapper>;
};

export default TodoItem;

const Wrapper = styled.div`
    padding: 12px 12px;
    background-color: #fff;
    border-radius: 20px;
    color: #000;
    font-size: 14px;
`;
