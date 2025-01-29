import styled from 'styled-components';

const Main = () => {
    return (
        <Wrapper>
            <Title>{`조승원님\n행복을 기록하세요.`}</Title>
            <CalendarWrap>캘린더 영역 슬라이드</CalendarWrap>
            <TodoListWrap>
                <div className="title">오늘의 행복할일</div>
            </TodoListWrap>
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px 0px;
    width: 100%;
    height: 100%;
    padding: 24px 0;
`;

const Title = styled.div`
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
    letter-spacing: -0.02em;
    color: #fff;
    white-space: pre-line;
`;

const CalendarWrap = styled.div`
    padding: 16px;
    background-color: #303134;
    border-radius: 20px;
    // 임시 높이
    height: 240px;
    color: #fff;
`;

const TodoListWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 12px 0;
    height: 100%;
    padding: 16px;
    background-color: #303134;
    border-radius: 20px;
    color: #fff;
    .title {
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 12px;
    }
`;
