export function getPatientData() {
	// braucht ne api
	var fs = require("fs");

	fs.read("../patienten.json", function ok(err, data) {
		if (err) {
			console.log(err);
		}
		return JSON.parse(data);
	});
}
