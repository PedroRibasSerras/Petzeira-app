/** @format */

import { CircularLoading } from "./dataArea.css";
import { CenteredBoxColumn } from "../../utils.css";

export default function DataArea({ isLoading, children, loadingText }) {
	return (
		<>
			{isLoading ? (
				<CenteredBoxColumn>
                    <span style={{margin: '0 0 10px 0'}}>
                        {loadingText}
                    </span>
					<CircularLoading />
				</CenteredBoxColumn>
			) : (
				children
			)}
		</>
	);
}
