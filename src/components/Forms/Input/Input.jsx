import { ElipticalInputWrapper, BorderlessInput} from "./input.css"

export default function Input({label, labelText, type, defaultValue, children}) {
    return(
        <ElipticalInputWrapper hasLabelText={!!labelText}>
            {labelText}<BorderlessInput name={label} placeholder={children} type={type} defaultValue={defaultValue} />
        </ElipticalInputWrapper>
    )
}