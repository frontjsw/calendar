import { useEffect } from 'react';
import usePostStore from '../store/usePostStore';
import PostItem from '../components/view/PostItem';
import styled from 'styled-components';

const PostList = () => {
    const posts = usePostStore((state) => state.posts);
    const getPosts = usePostStore((state) => state.getPosts);

    useEffect(() => {
        getPosts();
    }, []);

    return (
        <Wrapper>
            {posts.map((post) => (
                <PostItem key={post.id} post={post} />
            ))}
        </Wrapper>
    );
};

export default PostList;

const Wrapper = styled.div`
    padding: 40px 0px 60px;
`;
