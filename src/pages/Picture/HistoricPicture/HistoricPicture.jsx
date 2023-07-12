/** @format */
import Logo from "../../../components/Logo/Logo";
import { PageWrapper, PageContent } from "../../../utils.css";
import DataArea from "../../../components/DataArea/DataArea";
import { useState, useEffect } from "react";
import PetzeiraList from "../../../components/List/PetzeiraList/PetzeiraList";
import { CenteredBoxColumn } from "../../../utils.css";

export default function HistoricPicture({}) {
	const [isLoading, setIsLoading] = useState(true);

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
				<h1 style={{ margin: "0 0 20px 0" }}>Feed Historic</h1>
				<CenteredBoxColumn>
					<span style={{ margin: "10px 0 20px 0", width: "98%" }}>
						<DataArea
							isLoading={isLoading}
							loadingText="Loading historic..."
						>
							<PetzeiraList>
								<img
									src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
									alt="cachorro"
								/>
								<img
									src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
									alt="cachorro"
								/>
								<img
									src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
									alt="cachorro"
								/>
								<img
									src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png"
									alt="cachorro"
								/>
							</PetzeiraList>
						</DataArea>
					</span>
				</CenteredBoxColumn>
			</PageContent>
		</PageWrapper>
	);
}
