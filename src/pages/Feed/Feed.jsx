/** @format */

import Logo from "../../components/Logo/Logo";
import { BigButton, PageWrapper, PageContent } from "../../utils.css";
import DataArea from "../../components/DataArea/DataArea";
import { useState, useEffect, useContext } from "react";
import { PetzeiraContext } from "../../contexts/PetzeiraContext";
import CurrentModuleSelect from "../../components/CurrentModuleSelect/CurrentModuleSelect";
export default function Feed({}) {
	const [isLoading, setIsLoading] = useState(true);
	const { fed, requestFed } = useContext(PetzeiraContext);

	useEffect(() => {
		setInterval(() => {
			setIsLoading(false);
		}, 5000);
	});
	return (
		<PageWrapper>
			<PageContent>
				<Logo
					size={200}
					enableImage={true}
					margin={"0"}
				/>
				<h1 style={{ margin: "0 0 20px 0" }}>Feed your pet</h1>
				<CurrentModuleSelect />
				<span style={{ margin: "0 0 20px 0" }}>
					{fed.length && (
						<DataArea
							isLoading={false}
							loadingText="Loading last time fed..."
						>
							Last time fed: {fed[0].createdAt}
						</DataArea>
					)}
				</span>
				<BigButton onClick={requestFed}>Feed</BigButton>
			</PageContent>
		</PageWrapper>
	);
}
