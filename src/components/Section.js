import React from 'react';
import styled from 'styled-components';
import {models, model3, downarrow} from '../images/index';

function Section() {
    return (
        <Wrap>
            <ItemText>
                <Title>
                    <h1>Model S</h1>
                </Title>
                <p>Description</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                        Left Button
                    </LeftButton>
                    <RightButton>
                        Right Button
                    </RightButton>
                </ButtonGroup>
                <DownArrow src={downarrow} />
            </Buttons>
        </Wrap>
    )
}

export default Section

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: url("${models}");
    display: flex;
    flex-direction: column;
    justify-content: space-between; //vertical
    align-items: center; //horizontal
    @media (max-width: 768px) {
        background-image: url("${models}");;
    }
`

const ItemText = styled.div`
    padding: 15vh;
    text-align: center;
`

const Title = styled.div`
    margin-bottom: 10px;
`

const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 13px;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`

const LeftButton = styled.div`
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width: 256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 100px;
    opacity: 0.99;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 11px;
`

const RightButton = styled(LeftButton)`
    background: white;
    opacity: 0.7;
    color: black;
`

const DownArrow = styled.img`
    filter: invert(100%);
    margin-bottom: 15px;
    height: 45px;
    animation: animateDown infinite 2s;
`

const Buttons = styled.div`

`