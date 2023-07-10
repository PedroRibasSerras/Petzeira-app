/** @format */

import List from "../List";
import { PetzeiraListWrapper, PetzeiraListItem } from "./petzeiraList.css";

export default function PetzeiraList({ children, title }) {
	return (
		<PetzeiraListWrapper>
			<List title={title}>
				{children.map((item) => (
					<PetzeiraListItem> {item}</PetzeiraListItem>
				))}
			</List>
		</PetzeiraListWrapper>
	);
}
