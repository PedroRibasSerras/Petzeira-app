/** @format */
import Logo from "../../../components/Logo/Logo";
import { PageWrapper, PageContent } from "../../../utils.css";
import DataArea from "../../../components/DataArea/DataArea";
import { useState, useEffect } from "react";
import PetzeiraList from "../../../components/List/PetzeiraList/PetzeiraList";
import Input from "../../../components/Forms/Input/Input";
import Forms from "../../../components/Forms/Forms";
import SubmitButton from "../../../components/Forms/SubmitButton/SubmitButton";
import { CenteredBoxColumn } from "../../../utils.css";
import ScheduleItem from "../../../components/ScheduleItem/ScheduleItem";

export default function HistoricFeed({}) {
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
								{[
                                    "Alimentação instantânea - 14:07",
                                    "Foto Requisitada - 11:05",
									"Medida Recebida 100g - 10:03",
                                    "Foto Recebida - 10:04",
									"Medida Recebida 10g - 10:05",
                                    "Foto Agendada - 10:04",
									"Medida Recebida 30g - 11:03",
									"Medida Recebida 12g - 09:22",
								].map((data) => (
									<div>{data}</div>
								))}
							</PetzeiraList>
						</DataArea>
					</span>
				</CenteredBoxColumn>
			</PageContent>
		</PageWrapper>
	);
}
