var regex = /[^\u0000-\u00ff]/; // Small performance gain from pre-compiling the regex
export default function containsDoubleByte(str) {
	if (!str) return false;
	if (!str.length) return false;
	if (str.charCodeAt(0) > 255) return true;
	return regex.test(str);
}
