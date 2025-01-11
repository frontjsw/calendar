import { useState } from 'react';
import usePostStore from '../store/usePostStore';
import Input from '../components/common/Input';
import styled from 'styled-components';

const PostNote = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [todo, setTodo] = useState([]);

    const savePost = usePostStore((state) => state.savePost);

    const saveDiary = () => {
        savePost({ title, content, todo });
    };

    const addTodoInput = () => {
        setTodo([...todo, '']);
    };

    const removeTodoInput = (index) => {
        setTodo(todo.filter((_, i) => i !== index));
    };

    const handleTodoChange = (value, index) => {
        const newTodo = [...todo];
        newTodo[index] = value;
        setTodo(newTodo);
    };

    return (
        <Wrapper>
            <Input placeholder="제목" value={title} onChange={(value) => setTitle(value)} />
            <Input placeholder="내용" value={content} onChange={(value) => setContent(value)} />
            {todo.map((todoItem, index) => (
                <Input key={index} variant="todo" placeholder="todo" value={todoItem} onChange={(value) => handleTodoChange(value, index)} onRemove={() => removeTodoInput(index)} />
            ))}
            <button type="button" onClick={addTodoInput}>
                할일 추가
            </button>
            <button type="button" onClick={saveDiary}>
                저장
            </button>
        </Wrapper>
    );
};

export default PostNote;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px 0;
`;
