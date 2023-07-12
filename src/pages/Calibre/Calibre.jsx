/** @format */

import Logo from "../../components/Logo/Logo";
import { BigButton, PageWrapper, PageContent } from "../../utils.css";
import DataArea from "../../components/DataArea/DataArea";
import { useState, useEffect, useContext } from "react";
import { PetzeiraContext } from "../../contexts/PetzeiraContext";
import CurrentModuleSelect from "../../components/CurrentModuleSelect/CurrentModuleSelect";
export default function Calibre({}) {
	const [isLoading, setIsLoading] = useState(true);
	const { requestCalibre, events } = useContext(PetzeiraContext);

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
				<h1 style={{ margin: "0 0 20px 0" }}>Calibre</h1>
				<CurrentModuleSelect />
				<span style={{ margin: "0 0 20px 0" }}>
					{events.length > 0 ? (
						<DataArea
							isLoading={false}
							loadingText="Loading last time fed..."
						>
							Last time fed:{" "}
							{events.filter((event) => {
								if (event.event == "calibre") return true;
								else return false;
							})[0].createdAt || "never"}
						</DataArea>
					) : (
						"Last time fed: never"
					)}
				</span>
				<BigButton onClick={requestCalibre}>Calibre</BigButton>
			</PageContent>
		</PageWrapper>
	);
}
