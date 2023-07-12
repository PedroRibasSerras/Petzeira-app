/** @format */

import Logo from "../../components/Logo/Logo";
import { BigButton, PageWrapper, PageContent } from "../../utils.css";
import DataArea from "../../components/DataArea/DataArea";
import { useState, useEffect } from "react";

export default function Picture({}) {
	const [isLoading, setIsLoading] = useState(true);
    
    function handleTakePicture(){
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
				<h1 style={{ margin: "0 0 20px 0" }}>Take a picture of your pet</h1>
				<span style={{ margin: "0 0 20px 0" }}>
					<DataArea isLoading={isLoading} loadingText="Loading last picture...">
						<img src="https://love.doghero.com.br/wp-content/uploads/2018/12/golden-retriever-1.png" alt="cachorro" />
					</DataArea>
				</span>
				<BigButton
					onClick={handleTakePicture}
				>
					Take a picture
				</BigButton>
			</PageContent>
		</PageWrapper>
	);
}
