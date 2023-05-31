import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CenteredBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const TextAlignerBox = styled.div`
    display: flex;
    align-items: center;
`;

export const BasicButton = styled.button`
    color: #f5efed;
    border: none;
    border-radius: 60px;
    background-color: rgb(221, 176, 12);
    display: flex;
    justify-content: center;
    align-items: center;
    transition: 0.3s;

    &:hover {
        background-color: #f5efed; 
        color: rgb(221, 176, 12);
        cursor: pointer;
        transform: scale(1.1);
    }
`;

export const BigButton = styled(BasicButton)`
    font-size: 1.5rem;
    padding: 20px 70px;
`

export const CircularButton = styled(BasicButton)`
    height: ${props => props.size? `${props.size}rem` : "5rem"};
    width: ${props => props.size? `${props.size}rem` : "5rem"};
    padding: ${props => props.size? `${0.2*props.size}rem` : "1rem"};
    font-size: ${props => props.size? `${0.3*props.size}rem` : "1.5rem"};
`

export const SquareButton = styled(CircularButton)`
    border-radius: ${props => props.size? `${0.05*props.size}rem` : "0.25rem"};
`

export const AvatarWrapper = styled.div`
    width: ${props => props.size? `${props.size}px` : "30px"};
    height: ${props => props.size? `${props.size}px` : "30px"};
    border-radius: 100%;
    background: white;
    margin-left: 4px;
`

export const AvatarImage = styled.img`
    width:100%;
`

export const LinkPetzeira = styled(Link)`
    color: #F5EFED;
    text-decoration: none;
    font-weight: 600;
    transition: 0.5s;
    &:hover {
        color: #275dad; 
    }
`
