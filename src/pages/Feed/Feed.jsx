/** @format */

import Logo from "../../components/Logo/Logo";
import { BigButton, PageWrapper, PageContent } from "../../utils.css";
import DataArea from "../../components/DataArea/DataArea";
import { useState, useEffect } from "react";

export default function Feed({}) {
	const [isLoading, setIsLoading] = useState(true);
    
    function handleFeed(){
        setIsLoading(true)
        setInterval(() => {
			setIsLoading(false);
		}, 5000);
    }
    function formatDate(){
        let options = { day: 'numeric', year: 'numeric', month: 'numeric', day: 'numeric', hour:'numeric', minute:'numeric', second:'numeric' };
        let formatter = new Intl.DateTimeFormat('en', options);
        return formatter.format(Date.now())
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
                    size={200}
					enableImage={true}
					margin={"0"}
				/>
				<h1 style={{ margin: "0 0 20px 0" }}>Feed your pet</h1>
				<span style={{ margin: "0 0 20px 0" }}>
					<DataArea isLoading={isLoading} loadingText="Loading last time fed...">
						Last time fed: {formatDate()}
					</DataArea>
				</span>
				<BigButton
					onClick={handleFeed}
				>
					Feed
				</BigButton>
			</PageContent>
		</PageWrapper>
	);
}
