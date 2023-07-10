/** @format */

export default function List({ children, title }) {
	return (
		<div style={{ width: "100%", overflowY: "auto" }}>
			{title && <h2>{title}</h2>}
			<div style={{ width: "100%" }}>{children}</div>
		</div>
	);
}
