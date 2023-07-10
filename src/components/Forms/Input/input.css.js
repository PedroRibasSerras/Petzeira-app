/** @format */

import styled from "styled-components";

export const ElipticalInputWrapper = styled.label`
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 25px;
	height: 40px;
	font-size: 20px;
	padding: ${(props) => (props.hasLabelText ? `5px 5px 5px 20px` : "5px 5px 5px 5px")};

	svg {
		color: rgb(221, 176, 12);
	}

	// background-color: white;
	border: solid 2px rgb(221, 176, 12);
`;

export const BorderlessInput = styled.input`
	border: none;
	outline: none;

	background: transparent;
	height: 50px;
	width: 100%;
	font-size: 1.4rem;
	font-weight: 500;

	margin-left: 10px;
	padding: 5px 10px;

    color: rgb(221, 176, 12);

	::placeholder {
		/* Chrome, Firefox, Opera, Safari 10.1+ */
		color: rgb(221, 176, 12);
		opacity: 0.4;
	}

	:-ms-input-placeholder {
		/* Internet Explorer 10-11 */
		color: rgb(221, 176, 12);
        opacity: 0.4;
	}

	::-ms-input-placeholder {
		/* Microsoft Edge */
		color: rgb(221, 176, 12);
        opacity: 0.4;
	}

	:-webkit-autofill{
		-webkit-text-fill-color: rgb(221, 176, 12) !important;
		-webkit-background-clip: text;
	}

	&[type="time"]::-webkit-calendar-picker-indicator {
		background-color: rgb(221, 176, 12) !important;
		border-radius:50%;
	}
`;
