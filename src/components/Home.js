import React from 'react';
import styled from 'styled-components';
import Section from './Section';
import * as img from '../images/index';

function Home() {
    return (
        <Container>
            <Section
                title="Model S"
                description="Order Online for Touchless Delivery"
                backgroundImg={img.models}
                backgroundImgMob={img.modelsmob}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
                downArrow = {img.downarrow}
            />
            <Section 
                title="Model Y"
                description="Order Online for Touchless Delivery"
                backgroundImg={img.modely}
                backgroundImgMob={img.modelymob}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section
                title="Model 3"
                description="Order Online for Touchless Delivery"
                backgroundImg={img.model3}
                backgroundImgMob={img.model3mob}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Model X"
                description="Order Online for Touchless Delivery"
                backgroundImg={img.modelx}
                backgroundImgMob={img.modelxmob}
                leftBtnText="Custom order"
                rightBtnText="Existing inventory"
            />
            <Section 
                title="Solar Panels"
                description="Lowest Cost Solar Panels in America"
                backgroundImg={img.solarpanel}
                backgroundImgMob={img.solarpanelmob}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Solar Roof"
                description="Produce Clean Energy From Your Roof"
                backgroundImg={img.solarroof}
                backgroundImgMob={img.solarroofmob}
                leftBtnText="Order now"
                rightBtnText="Learn more"
            />
            <Section 
                title="Accessories"
                description=""
                backgroundImg={img.accessories}
                backgroundImgMob={img.accessoriesmob}
                leftBtnText="Shop now"
            />
        </Container>
    )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index: -1;
    position: relative;
`