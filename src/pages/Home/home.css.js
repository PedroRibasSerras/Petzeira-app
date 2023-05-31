import styled from 'styled-components';
import { GiDogBowl } from 'react-icons/gi';
import { SquareButton } from '../../utils.css'

export const HomeWrapper = styled.div`
    flex-grow: 1;
    overflow: auto;
    text-align: center;
`;

export const HomeContent = styled.div`
    background-color: rgb(33, 33, 33);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
` ;

export const  Logo = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 50px;
` ;
  
  
export const  LogoImg = styled(GiDogBowl)`
    pointer-events: none;
    color: rgb(221, 176, 12);
` ;

export const  LogoName = styled.span`
    color: rgb(221, 176, 12);
    font-size: 3rem;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: 800;
    top: -255px;
    margin-top:10px;
    margin-bottom:0px;
` ;

export const  LogoSubtitle = styled.span`
    color: #f5efed;
    margin-top:0px;
` ;