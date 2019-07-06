import axios from "axios";

export function getPatienten() {
	axios.get("http://127.0.0.1:4000/api/patienten/").then(response => {
		const baum = response.data;
		return baum;
	});
}
