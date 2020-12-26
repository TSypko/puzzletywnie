import React from 'react';
import { connect, styled } from "frontity";

const Hero = ({ state }) => {
    const data = state.source.get(state.router.link);

    return (
        <HeroCover>
            <HeroContent>
              test
            </HeroContent>
        </HeroCover>

    )
};

export default connect(Hero);

const HeroCover = styled.div`
    background: linear-gradient(0deg, rgba(0,0,0,1) 2%, rgba(56,253,255,0) 50%, rgba(0,0,0,1) 99%);
    background-color: #00000055;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
`;


const HeroContent = styled.div`
    width: 1024px;
    margin: 24px;
    max-width: 100%;
    padding: 12px;
    color: #fff;
`;
