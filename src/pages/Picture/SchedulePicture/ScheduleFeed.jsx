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

export default function SchedulePicture({}) {
	const [isLoading, setIsLoading] = useState(true);

	function handleSchedulePicture() {
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
				<h1 style={{ margin: "0 0 20px 0" }}>Schedule take a picture of your pet</h1>
				<CenteredBoxColumn>
					<span style={{ margin: "10px 0 20px 0", width: "98%" }}>
						<DataArea
							isLoading={isLoading}
							loadingText="Loading schedules..."
						>
							<PetzeiraList>
								{[{ time: "12:00" }, { time: "18:00" }, { time: "22:00" }].map(
									(data) => 
										<ScheduleItem data={data} />
								)}
							</PetzeiraList>
						</DataArea>
					</span>
					<Forms
						onSubmit={(data) => {
							handleSchedulePicture()
							console.log(data);
						}}
					>
						<Input
							type="time"
							label="time"
						></Input>
						<div style={{ padding: "10px" }}></div>
						<SubmitButton>Schedule new time</SubmitButton>
					</Forms>
				</CenteredBoxColumn>
			</PageContent>
		</PageWrapper>
	);
}
