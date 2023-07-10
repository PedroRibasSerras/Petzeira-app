/** @format */
import { ColumnForm } from './forms.css'

export default function Forms({ method, children, onSubmit }) {
	function handleSubmit(e) {
		e.preventDefault();
		// Read the form data
		const form = e.target;
		const formData = new FormData(form);

		const formJson = Object.fromEntries(formData.entries());
		onSubmit(formJson)
	}

	return (
		<ColumnForm
			method={method || "post"}
			onSubmit={handleSubmit}
		>
			{children}
		</ColumnForm>
	);
}
