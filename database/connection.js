var mysql = require('mysql2')

let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'movies'
})

connection.connect((err) => {
  if (err) {
    return console.error('error: ' + err.message)
  }
  console.log('Connected to the MySQL server')
})

module.exports = connection