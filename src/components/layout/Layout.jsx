import { Outlet } from 'react-router-dom';
import styled from 'styled-components';
import Header from './Header';
import Appbar from './Appbar';

const Layout = () => {
    return (
        <Wrapper>
            <Header />
            <Inner>
                <Outlet />
            </Inner>
            <Appbar />
        </Wrapper>
    );
};

export default Layout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
`;
const Inner = styled.div`
    width: 100%;
    height: 100%;
    padding: 0 24px;
    overflow-y: auto;
`;
