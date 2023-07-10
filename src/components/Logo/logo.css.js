import styled from 'styled-components';
import { GiDogBowl } from 'react-icons/gi';

export const  LogoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: ${props => props.margin? `${props.margin}` : '0 0 50px 0 '};
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