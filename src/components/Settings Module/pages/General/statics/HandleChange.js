export default function HandleChange(event, name, setData) {
	switch (name) {
		case "name":
			setData((prev) => {
				return { ...prev, name: event.target.value };
			});
			break;
		case "email":
			setData((prev) => {
				return { ...prev, email: event.target.value };
			});
			break;
		case "mobile":
			setData((prev) => {
				return { ...prev, mobile: event.target.value };
			});
		default:
			break;
	}
}
