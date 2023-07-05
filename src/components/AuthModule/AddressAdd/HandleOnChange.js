export default function HandleChange(event, name, setData) {
	switch (name) {
		case "pin_code":
			setData((prev) => {
				return { ...prev, pin_code: event.target.value };
			});
			break;
		case "dob":
			setData((prev) => {
				return { ...prev, dob: event.target.value };
			});
			break;

		default:
			break;
	}
}
