import { useState } from 'react';
import styled from 'styled-components';
import { supabase } from '../lib/supabase';
const PostCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const handleSubmit = async (e) => {
        e.preventDefault();
        const { data, error } = await supabase.from('diary').insert({ title: title, content: content });
    };
    return (
        <Wrapper>
            <form onSubmit={handleSubmit}>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="title" />
                <input type="text" value={content} onChange={(e) => setContent(e.target.value)} placeholder="content" />
                <button type="submit">등록</button>
            </form>
        </Wrapper>
    );
};

export default PostCreate;

const Wrapper = styled.div`
    padding: 40px 0px 60px;
`;
