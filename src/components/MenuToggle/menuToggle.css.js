import styled from 'styled-components';
import { SquareButton } from '../../utils.css'

export const  MenuToggleButton = styled(SquareButton)`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: solid 2px ${props => props.color};
    color: ${props => props.color};
` ;