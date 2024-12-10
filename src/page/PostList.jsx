import { useEffect, useState } from 'react';
import { supabase } from '../supabaseClient';
import PostItem from '../components/view/PostItem';
import styled from 'styled-components';

const PostList = () => {
    const [postList, setPostList] = useState([]);

    // 일기 데이터 저장
    const getPostList = async () => {
        const { data, error } = await supabase.from('diary').select('*');

        if (error) {
            console.error('Error inserting data:', error);
        } else {
            console.log('Insert success:', data);
            setPostList(data);
        }
    };

    useEffect(() => {
        getPostList();
    }, []);

    return (
        <Wrapper>
            {postList.map((post) => (
                <PostItem key={post.id} post={{ title: post.title, content: post.content, created_at: post.created_at, todo: post.todo }} />
            ))}
        </Wrapper>
    );
};

export default PostList;

const Wrapper = styled.div`
    padding: 40px 0px 60px;
`;
