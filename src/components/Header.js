import styled from 'styled-components';
import logo from '../assets/logo.png';

const StyledHeader = styled.header`
    background-color: #0055ba;
`;


const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="university logo" />
        </StyledHeader>
    );
};

export default Header;
