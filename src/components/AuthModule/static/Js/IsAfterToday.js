export default function isDateAfterToday(date) {
	return new Date(date).valueOf() > new Date().valueOf();
}
