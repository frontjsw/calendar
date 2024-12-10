import { faFolder, faHouse, faList, faPen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
const Appbar = () => {
    const location = useLocation();

    return (
        <Wrapper>
            <MenuBtn to="/" $isActive={location.pathname === '/'}>
                <div className="icon">
                    <FontAwesomeIcon icon={faHouse} />
                </div>
            </MenuBtn>
            <MenuBtn to="/post" $isActive={location.pathname === '/post'}>
                <div className="icon">
                    <FontAwesomeIcon icon={faPen} />
                </div>
            </MenuBtn>
            <MenuBtn to="/list" $isActive={location.pathname === '/list'}>
                <div className="icon">
                    <FontAwesomeIcon icon={faList} />
                </div>
            </MenuBtn>
            <MenuBtn to="/allList" $isActive={location.pathname === '/allList'}>
                <div className="icon">
                    <FontAwesomeIcon icon={faFolder} />
                </div>
            </MenuBtn>
        </Wrapper>
    );
};

export default Appbar;

const Wrapper = styled.div`
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 24px 24px 24px;
    background-color: #303134;
    border-radius: 20px 20px 0 0;
    box-shadow: 0px -4px 4px 0px rgba(0, 0, 0, 0.25);
`;

const MenuBtn = styled(Link)`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 6px 0;
    text-decoration: none;
    color: ${(props) => (props.$isActive ? '#4285f4' : '#fff')};
    .icon {
        font-size: 18px;
    }
`;
