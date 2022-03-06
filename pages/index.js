import styled from "styled-components";
import baku from '../public/baku.jpg';
import { DEFAULT_CATEGORY_IMG_URL, DEFAULT_PRODUCT_HOME_IMG_URL } from "../src/constants/urls";
import Image from "../src/image";
import Link from 'next/link'


const StyledButton = styled.button`
    position: relative;
    color: #fff;
    z-index: 2;
    line-height: 40px;
    padding: 0;
    width: 160px;
    height: 40px;
    padding: 10px 25px;
    border: 2px solid #fff;
    font-family: 'Lato', sans-serif;
    font-weight: 500;
    background: transparent;
    cursor: pointer;
    transition: all 0.3s ease;
    position: relative;
    display: inline-block;
    &:focus {
        outline: none;
    }
    box-sizing: content-box;
    font-size: 20px;
    &:hover{
    border: 2px solid transparent;
    }
    &:before,
    &:after {
    position: absolute;
    content: "";
    width: 0%;
    height: 0%;
    border: 2px solid;
    z-index: -1;
    transition: all 0.3s ease;
    }
    &:before {
    top: 0;
    left: 0;
    border-bottom-color: transparent;
    border-right-color: transparent;
    border-top-color: #fff;
    border-left-color: #fff;
    }
    &:after{
    bottom: 0;
    right: 0;
    border-top-color: transparent;
    border-left-color: transparent;
    border-bottom-color: #fff;
    border-right-color: #fff;
    }
    &:hover:before,
    &:hover:after {
        border-color: #fff;
        height: 100%;
        width: 100%;
    }
`;

const StyledWrapper = styled.div`
  position: relative;
  flex-grow: 1;
  max-width: 100%;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  .bgWrap {
        position: fixed;
        height: 100vh;
        width: 100vw;
        overflow: hidden;
        z-index: -1;
        &:after {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgb(18 18 18 / 87%);
        }
  }
  .item {
      /* width: 400px;
      height: 400px; */
      position: relative;
      overflow: hidden;
      color: #EAC8C6;
    .title {
        position: absolute;
        top: 50%;
        left: 50%;
        font-size: 50px;
        /* font-weight: 600; */
        font-style: italic;
        z-index: 2;
        transform: translateX(-50%) translateY(-50%);
        text-align: center;
        font-family: 'Arizonia', cursive;
        text-shadow: 0px 0px 8px rgba(150, 150, 150, 1);
    }
    
      ${StyledButton} {
          transition: 200ms linear all;
          position: absolute;
          top: 50%;
          left: 50%;
          /* border: 1px solid #EAC8C6; */
          z-index: 10;
          display: inline-block;
          /* padding: 2px 16px; */
          /* border-radius: 20px; */
          font-size: 30px;
          transform: translateX(-1500%) translateY(-50%);
      }

      &:hover {
          img {
              z-index: 2;
              clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        ${StyledButton} {
            transform: translateX(-50%) translateY(-50%)
        }

      }
      img {
        z-index: 1;
        max-width: 100%;
        clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        transform: scale(1);
        transition: all .25s;
        position: relative;
    
        &:hover {
        /* transform: scale(1.2); */
        }
      }
  }
`;



const Main = () => (
    <StyledWrapper>
        <div className={'bgWrap'}>
            <Image
                className="object-cover h-40 md:h-64"
                layout="fill"
                containerClassNames="w-96 h-full"
                sourceUrl={baku}
                defaultImgUrl={DEFAULT_CATEGORY_IMG_URL}
                altText={''}
            />
        </div>
        <div className="item">
            <span className="title">Lully's pastry</span>
            <Link href="/pastry">
                <StyledButton>Explore</StyledButton>
            </Link>
            <img src="https://source.unsplash.com/random/600x600?water" alt="" />
        </div>
        <div className="item">
            <span className="title">Lully's kulinariya</span>
            <Link href="/pastry">
                <StyledButton>Explore</StyledButton>
            </Link>
            <img src="https://source.unsplash.com/random/600x600?water" alt="" />
        </div>
        <div className="item">
            <span className="title">Lully's kids zone</span>
            <Link href="/pastry">
                <StyledButton>Explore</StyledButton>
            </Link>
            <img src="https://source.unsplash.com/random/600x600?water" alt="" />
        </div>
    </StyledWrapper>
);

export default Main;
