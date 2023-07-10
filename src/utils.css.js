/** @format */

import { Link } from "react-router-dom";
import styled from "styled-components";

export const CenteredBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const CenteredBoxColumn = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
`;

export const TextAlignerBox = styled.div`
	display: flex;
	align-items: center;
`;

export const BasicButton = styled.button`
	color: white;
	font-weight: bold;
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
	height: 50px;
	padding: 20px 70px;
	text-decoration: none;
	box-sizing: border-box;
`;

export const CircularButton = styled(BasicButton)`
	height: ${(props) => (props.size ? `${props.size}rem` : "5rem")};
	width: ${(props) => (props.size ? `${props.size}rem` : "5rem")};
	padding: ${(props) => (props.size ? `${0.2 * props.size}rem` : "1rem")};
	font-size: ${(props) => (props.size ? `${0.3 * props.size}rem` : "1.5rem")};
`;

export const SquareButton = styled(CircularButton)`
	border-radius: ${(props) =>
		props.size ? `${0.05 * props.size}rem` : "0.25rem"};
`;

export const AvatarWrapper = styled.div`
	width: ${(props) => (props.size ? `${props.size}px` : "30px")};
	height: ${(props) => (props.size ? `${props.size}px` : "30px")};
	border-radius: 100%;
	background: white;
	margin-left: 4px;
`;

export const AvatarImage = styled.img`
	width: 100%;
`;

export const LinkPetzeira = styled(Link)`
	color: #f5efed;
	text-decoration: none;
	font-weight: 600;
	transition: 0.5s;
	&:hover {
		color: #275dad;
	}
`;

export const PageWrapper = styled.div`
	flex-grow: 1;
	overflow: auto;
	text-align: center;

	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: rgb(33, 33, 33);
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: rgb(221, 176, 12);
		border:solid 2px rgb(33, 33, 33);
		border-radius: 10px;
	}

	/* Handle on hover */
	::-webkit-scrollbar-thumb:hover {
		background: #d1a60a;
		border:none;
	}
`;

export const PageContent = styled.div`
	background-color: rgb(33, 33, 33);
	min-height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	font-size: calc(10px + 2vmin);
	color: white;
`;

export const PageFormWrapper = styled(PageContent)`
	label,
	button {
		margin-top: 20px;
	}
`;

export const CirculedNeonButton = styled(CircularButton)`
	background-color: transparent;
	border: solid 2px ${(props) => props.color};
	color: ${(props) => props.color};
	padding: ${(props) => (props.size ? `${0.05 * props.size}rem` : "1rem")};
`;
