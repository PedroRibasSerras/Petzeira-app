/** @format */

import Logo from "../../components/Logo/Logo";
import { BigButton, PageWrapper, PageContent } from "../../utils.css";
import DataArea from "../../components/DataArea/DataArea";
import { useState, useContext } from "react";
import PetzeiraList from "../../components/List/PetzeiraList/PetzeiraList";
import { PetzeiraContext } from "../../contexts/PetzeiraContext";

export default function Modules({}) {
	const {modules} = useContext(PetzeiraContext);

	return (
		<PageWrapper>
			<PageContent>
				<Logo
					size={200}
					enableImage={true}
					margin={"0"}
				/>
				<h1 style={{ margin: "0 0 20px 0" }}>Modules</h1>
				<PetzeiraList>
					{modules.map((data) => (
						<>
							<div>Name: {data.name}</div>
							<div>Serial: {data.serial}</div>
							<div>Type: {data.type}</div>
						</>
					))}
				</PetzeiraList>
			</PageContent>
		</PageWrapper>
	);
}
