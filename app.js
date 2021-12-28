let mysql = require('mysql')

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'12345678',
    database: 'logins'
})

connection.connect(function(err) {
    if (err) {
      console.error('error: ' + err.message);
      return;
    }
   
    console.log('connected');
  });

// connection.query(`ALTER TABLE login MODIFY COLUMN nickname varchar(12) not null UNIQUE;`, function(err, results) {
//     if(err) console.log(err);
//     console.log(results);
// }); 

connection.query(`INSERT INTO login(nickname, email, pass) VALUES('gg', 'gg@gmail.com', 'gg1d23')`, function(err, results) {
  if (err) {
    if(err.errno==1062)
      console.log('Такое имя или почта уже существует!');
    else
    console.log('Ошибка на сервере!');
  } 
}); 

// connection.query(`SELECT * FROM login WHERE nickname='gg'`, function(err, results) {
//   if(err) console.log(err);
//   console.log(results[0].email);
// });

  
  
connection.end(function(err) {
    if (err) {
      return console.log('error:' + err.message);
    }
    console.log('Close the database connection.');
});
  