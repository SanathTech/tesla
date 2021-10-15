import React, {useState} from 'react';
import styled from 'styled-components';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';
import Fade from 'react-reveal/Fade';
import logo from '../images/logo.svg';

function Header() {
    const [burgerStatus, setBurgerStatus] = useState(false);
    const cars = useSelector(selectCars);
    console.log(cars);

    return (
        <Fade>
            <Container>
                <Logo>
                    <a href="#">
                        <img src={logo} alt="" />
                    </a>
                </Logo>
                <Menu>
                    {cars && cars.map((car, index) => (
                        <a key={index} href="#">{car}</a>
                    ))}
                </Menu>
                <RightMenu>
                    <RightMenuFull>
                        <a href="#">Shop</a>
                        <a href="#">Account</a>
                    </RightMenuFull>
                    <CustomMenu onClick={() => setBurgerStatus(true)}/>
                </RightMenu>
                <BurgerNav show={burgerStatus}>
                    <CloseWrapper>
                        <CustomClose onClick={() => setBurgerStatus(false)}/>
                    </CloseWrapper>
                    <ScrollWrapper>
                        <CarsWrapper>
                            {cars && cars.map((car, index) => (
                                <li key={index}><a href="#">{car}</a></li>
                            ))}
                        </CarsWrapper>
                        <li><a href="#">Existing Inventory</a></li>
                        <li><a href="#">Used Inventory</a></li>
                        <li><a href="#">Trade-In</a></li>
                        <li><a href="#">Test Drive</a></li>
                        <li><a href="#">Cybertruck</a></li>
                        <li><a href="#">Roadster</a></li>
                        <li><a href="#">Semi</a></li>
                        <li><a href="#">Charging</a></li>
                        <li><a href="#">Powerwall</a></li>
                        <li><a href="#">Commercial Energy</a></li>
                        <li><a href="#">Utilities</a></li>
                        <li><a href="#">Find Us</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <RightMenuBurger>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Account</a></li>
                        </RightMenuBurger>
                    </ScrollWrapper>
                </BurgerNav>
            </Container>
        </Fade>
    )
}

export default Header

const Logo = styled.div`
    padding: 0 40px;

    @media(max-width: 1000px) {
        padding: 0 0px;
    }
`

const Container = styled.div`
    min-height: 55px;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    top: 0;
    left: 0;
    right: 0;
`

const Menu = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;

    a {
        padding: 0 16px;
        color: rgb(24, 27, 33);
    }

    @media(max-width: 1000px) {
        display: none;
    }
`

const RightMenu = styled.div`
display: flex;
align-items: center;

    a {
        padding: 0 12px;
        margin-right: 10px;
    }
`

const RightMenuFull = styled.div`
    @media (max-width: 768px) {
        display: none;
    }
`

const CustomMenu = styled(MenuIcon)`
    cursor: pointer;
`

const BurgerNav = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    background: white;
    width: 290px;
    list-style: none;
    // padding: 70px 20px;
    padding: 70px 0px;
    display: flex;
    flex-direction: column;
    text-align: start;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.5s;
    li {
        padding: 11px 20px;
    }
`

const CustomClose = styled(CloseIcon)`
    cursor: pointer;
`

const CloseWrapper = styled.div`
    margin-top: -40px;
    margin-bottom: 25px;
    display: flex;
    justify-content: flex-end;
    padding-right: 25px;
`

const CarsWrapper = styled.div`
    @media(min-width: 1001px) {
        display: none;
    }
`

const ScrollWrapper = styled.div`
    height: 100%;
    width: 100%;
    overflow-y: auto;
    padding: 0 20px;
`

const RightMenuBurger = styled.div`
    @media (min-width: 769px) {
        display: none;
    }
`