import styled from 'styled-components';
import { PageContent } from '../../utils.css';

export const LoginContent = styled(PageContent)`
    background-color: rgb(33, 33, 33);
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;

    label, button{
        margin-top: 20px;
    }
` ;