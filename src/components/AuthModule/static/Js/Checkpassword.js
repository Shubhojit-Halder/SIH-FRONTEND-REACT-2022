export default function check(S, S2) {
	if (S !== S2) return false;
	var format = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
	if (S.length == 0) {
		return false;
	} else if (format.test(S)) {
		var c = 0;
		var n = 0;
		for (let i = 0; i < S.length; i++) {
			if ((S[i] >= "A" && S[i] <= "Z") || (S[i] >= "a" && S[i] <= "z")) {
				c++;
			} else if (S[i] >= "0" && S[i] <= "9") {
				n++;
			}
		}
		if (c < 4 || n == 0 || S.length < 8) {
			return false;
		} else {
			return true;
		}
	} else {
		return false;
	}
}
