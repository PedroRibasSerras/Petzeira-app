/** @format */
import { useContext } from "react";
import { PetzeiraContext } from "../../contexts/PetzeiraContext";

export default function CurrentModuleSelect() {

    const { modules, currentModule, setCurrentModule } = useContext(PetzeiraContext)

    return (
		<select
			defaultValue={currentModule}
			onChange={(e) => {
				setCurrentModule(e.target.value);
			}}
		>
			{modules.map((value, index) => {
				return (
					<option
						key={index}
						value={index}
					>
						{value.name}
					</option>
				);
			})}
		</select>
	);
}
