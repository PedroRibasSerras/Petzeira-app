/** @format */

import styled from "styled-components";
import { CenteredBoxColumn } from "../../../utils.css";

export const PetzeiraListWrapper = styled(CenteredBoxColumn)`
	
`;

export const PetzeiraListItem = styled.div`
	 		border: solid rgb(221, 176, 12) 0;
		border-width: 0 1px 1px 1px;
		padding: 10px 50px;
		color: rgb(221, 176, 12);
	&:last-child {
		border-radius: 0 0 5px 5px;
	}

	&:first-child {
		border-top-width: 1px;
		border-radius: 5px 5px 0 0;
	}
`;
