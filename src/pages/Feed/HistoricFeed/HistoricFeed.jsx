/** @format */
import Logo from "../../../components/Logo/Logo";
import { PageWrapper, PageContent } from "../../../utils.css";
import DataArea from "../../../components/DataArea/DataArea";
import { useState, useEffect, useContext } from "react";
import { PetzeiraContext } from "../../../contexts/PetzeiraContext";
import CurrentModuleSelect from "../../../components/CurrentModuleSelect/CurrentModuleSelect";
import PetzeiraList from "../../../components/List/PetzeiraList/PetzeiraList";
import { CenteredBoxColumn } from "../../../utils.css";

export default function HistoricFeed({}) {
	const [isLoading, setIsLoading] = useState(true);
	const { events } = useContext(PetzeiraContext);

	function handleFeed() {
		setIsLoading(true);
		setInterval(() => {
			setIsLoading(false);
		}, 5000);
	}
	function formatDate() {
		let options = {
			day: "numeric",
			year: "numeric",
			month: "numeric",
			day: "numeric",
			hour: "numeric",
			minute: "numeric",
			second: "numeric",
		};
		let formatter = new Intl.DateTimeFormat("en", options);
		return formatter.format(Date.now());
	}

	useEffect(() => {
		setInterval(() => {
			setIsLoading(false);
		}, 5000);
	});
	return (
		<PageWrapper>
			<PageContent>
				<Logo
					enableImage={true}
					size={200}
					margin={"0"}
				/>
				<h1 style={{ margin: "0 0 20px 0" }}>Historic</h1>
				<CurrentModuleSelect></CurrentModuleSelect>
				<CenteredBoxColumn>
					<span style={{ margin: "10px 0 20px 0", width: "98%" }}>
						{events.length > 0 ?
							<DataArea
								isLoading={false}
								loadingText="Loading historic..."
							>
								<PetzeiraList>
									{events.map((data) => (
										<div>{data.event} - {data.createdAt}</div>
									))}
								</PetzeiraList>
							</DataArea>
							: "No event"

						}
					</span>
				</CenteredBoxColumn>
			</PageContent>
		</PageWrapper>
	);
}
