import styled from 'styled-components';
import { supabase } from '../lib/supabase';
import { useEffect, useState } from 'react';

const PostList = () => {
    const [postData, setPostData] = useState([]);

    const getPostData = async () => {
        const { data, error } = await supabase.from('diary').select('*');
        if (error) {
            console.log('error : get Post Data error :', error);
            return;
        }
        setPostData(data);
    };

    useEffect(() => {
        getPostData();
    }, []);
    return (
        <Wrapper>
            {postData.map((post) => (
                <div key={post.id} className="post-item">
                    <div className="title">{post.title}</div>
                    <div className="title">{post.content}</div>
                </div>
            ))}
        </Wrapper>
    );
};

export default PostList;

const Wrapper = styled.div`
    padding: 40px 0px 60px;
`;
