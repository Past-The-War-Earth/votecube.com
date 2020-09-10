import * as mysql from 'mysql'

var con = mysql.createConnection({
	host: 'localhost',
	user: 'votecube',
	password: 'votecube'
})

con.connect(function (err) {
	if (err) throw err
	console.log('Connected!')

	con.query("SELECT * from votecube.factors", function (
		err,
		result
	) {
		if (err) throw err
		console.log('Result: ' + result)
	})
})
