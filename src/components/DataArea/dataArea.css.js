/** @format */

import styled from "styled-components";

export const CircularLoading = styled.div`
	display: inline-block;
	width: 50px;
	height: 50px;
	border: 5px solid rgba(255, 255, 255, 0.3);
	border-radius: 50%;
	border-top-color: rgb(221, 176, 12);
	animation: spin 1s ease-in-out infinite;
	-webkit-animation: spin 1s ease-in-out infinite;

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
`;
