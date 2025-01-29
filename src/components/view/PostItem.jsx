import styled from 'styled-components';
const PostItem = ({ post }) => {
    return <Wrapper></Wrapper>;
};

export default PostItem;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px 0px;
    width: 100%;
    padding: 24px;
    border-radius: 10px;
    background-color: #303134;
    & + & {
        margin-top: 36px;
    }
`;

const DateWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 0 12px;
    color: #fff;
    .num {
        flex: 0 0 auto;
        width: 50px;
        font-size: 36px;
        font-weight: 700;
    }
    .date {
        display: flex;
        flex-direction: column;
        gap: 4px 0px;
        width: 100%;
        font-size: 14px;
    }
`;

const Inner = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px 0;
    padding-left: 62px;
    color: #fff;
    .title {
        font-size: 24px;
        font-weight: 700;
        letter-spacing: -0.02em;
    }
    .content {
        font-size: 16px;
        line-height: 1.5;
    }
`;
