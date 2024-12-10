import { faBookOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const Header = () => {
    return (
        <Wrapper>
            <div className="logo">
                행복일기 <FontAwesomeIcon icon={faBookOpen} />
            </div>
            <div className="menu"></div>
        </Wrapper>
    );
};

export default Header;

const Wrapper = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 42px;
    padding: 0 24px;
    .logo {
        font-size: 18px;
        font-weight: 700;
        color: #fff;
    }
    .menu {
        display: flex;
        align-items: center;
        gap: 10px;
    }
`;
