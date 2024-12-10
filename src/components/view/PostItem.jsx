import styled from 'styled-components';
import TodoItem from './TodoItem';
const PostItem = ({ post }) => {
    const date = new Date(post.created_at);

    // 날짜 포맷팅
    const day = date.getDate().toString().padStart(2, '0'); // 날짜를 2자리 숫자로
    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' }); // 요일
    const month = date.toLocaleDateString('en-US', { month: 'long' }); // 월
    const year = date.getFullYear(); // 연도
    console.log(post);
    return (
        <Wrapper>
            <DateWrap>
                <div className="num">{day}</div>
                <div className="date">
                    <div className="day">On {weekday}</div>
                    <div className="month-year">
                        in {month} {year}
                    </div>
                </div>
            </DateWrap>
            <Inner>
                <div className="title">{post.title}</div>
                <div className="content">{post.content}</div>
                {post.todo?.map((todo) => (
                    <TodoItem key={todo} title={todo} />
                ))}
            </Inner>
        </Wrapper>
    );
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
