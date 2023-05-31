import styled from 'styled-components';
import { SquareButton } from '../../utils.css'

export const  MenuToggleButton = styled(SquareButton)`
    position: absolute;
    top: 7px;
    right: 7px;
    background-color: transparent;
    border: solid 2px ${props => props.color};
    color: ${props => props.color};
` ;