import { BigButton } from "../../../utils.css"

export default function SubmitButton({children}) {
    return (
        <BigButton type="submit" >{children || "Submit"}</BigButton>
    )
}