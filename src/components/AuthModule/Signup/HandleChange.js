export default function HandleChange(event, type, setData) {
	switch (type) {
		case "name":
			setData((prev) => {
				return { ...prev, full_name: event.target.value };
			});
			return;
		case "email":
			setData((prev) => {
				return { ...prev, email: event.target.value };
			});
			return;
		case "mobile":
			setData((prev) => {
				return { ...prev, mobile: event.target.value };
			});
			return;
		case "password":
			setData((prev) => {
				return { ...prev, password: event.target.value };
			});
			return;
		case "confirm_password":
			setData((prev) => {
				return { ...prev, confirm_password: event.target.value };
			});
			return;
		case "gender":
			setData((prev) => {
				return { ...prev, gender: event.target.value };
			});
			return;
	}
}
