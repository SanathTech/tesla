import React from 'react';
import styled from 'styled-components';
import model_s from '../images/model-s.jpg';

function Section() {
    return (
        <Wrap>

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
    background-image: ${props => `url("${model_s}")`};
    //background-image: url("../images/model-s.jpg");
`