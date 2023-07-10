/** @format */

import { CenteredBoxColumn, CirculedNeonButton } from "../../utils.css";
import { FaTimes } from "react-icons/fa";

export default function ScheduleItem({ data }) {
	return (
		<CenteredBoxColumn style={{flexDirection:"row", justifyContent:"center", alignItems:"center"}}>
			<span style={{flexGrow:1}}>{data.time}</span>
            <span style={{position:"relative", width:0, height:"100%", left:'7px'}}>
			<CirculedNeonButton color="rgb(221, 176, 12)" size={2}>
                <FaTimes size={20}/>
            </CirculedNeonButton>
            </span>
		</CenteredBoxColumn>
	);
}
