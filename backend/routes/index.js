var express = require('express');
var router = express.Router();
const connection = require('./conf');
const bodyParser = require('body-parser');

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({
	extended: true
}));


/* GET home page. */
router.get('/api/detail/:id', (req, res) => {
  const date = req.params.id;
  let end;
  let mois = (Number(date.slice(5, 7)) + 2).toString();
  if (date.slice(5, 7) == 12) {
    end = (date.slice(0, 5) + 1) + "02" + date.slice(7, 10); 
  }
  else if (date.slice(5, 7) == 11) {
    end = date.slice(0, 5) + "01" + date.slice(7, 10);
  }
  else {
    end = date.slice(0, 5) + mois + date.slice(7, 10);
  }
  let query = "SELECT * FROM disponibility WHERE disponibilityDay BETWEEN '" + date + "' AND '" + end +"'";
	connection.query(query , [date], function (error, results) {
		if (error) {
      console.log(error);
			res.status(500).send("Erreur lors de la récupération des données");
		} else {
			res.json(results);
		}
	});	
});

router.get('/api/activeressources', (req, res) => {
	connection.query('SELECT ressourceID, ressourceFirstname FROM ressource WHERE ressourceStatus = "active"' , function (error, results) {
		if (error) {
			res.status(500).send("Erreur lors de la récupération de la liste des employés actifs");
		} else {
			res.json(results);
		}
	});	
});

router.post('/api/newclient', function (req, res, next) {
  var firstname  = req.body.firstname;
  var name = req.body.name;
  var phone = req.body.phonenumber;
  var mail = req.body.email;
  var adress = req.body.adress;
  var bien = req.body.bien;
  var rooms = req.body.rooms;
  var status = req.body.status;
  var message = req.body.message;

  connection.query('INSERT INTO client (clientFirstname, clientLastname, clientPhone, clientMail, clientAdress, clientMessage, clientBuildingtype, clientRooms, clientStatus) VALUES ("' + firstname + '", "' + name + '", "' + phone + '", "' + mail + '", "' + adress + '", "' + message + '", "' + bien + '", ' + rooms + ', "' + status + '")', function (error, results) {
   if (error) {
     throw error;
   } else {
     res.sendStatus(200);
     next();
   }
 });
});

router.all('/api/newclient', function(req, res, next){
  connection.query('SELECT MAX(clientID) FROM client', function(error, results){
    if (error) {
      throw error;
    } else {
      let string = JSON.stringify(results);
      var json =  JSON.parse(string);
      let objet = Object.values(json[0]);
      let id = objet[0];
      connection.query('INSERT INTO meeting (meetingDate, meetingHours, ressourceID, clientID) VALUES ("' + req.body.date + '", "' + req.body.time + '", 1, "' + id + '")', function (error, results) {
        if (error) {
          throw error;
        } else {
          let horaire;
          if(req.body.time.slice(0,2) === "09") {
            horaire = "disponibilityH1";
          }
          else if (req.body.time.slice(0,2) === "12") {
            horaire = "disponibilityH2";
          } else {
            horaire = "disponibilityH3";
          }
          connection.query('UPDATE disponibility SET `' + horaire + '` = "1" WHERE disponibilityDay = "' + req.body.date + '"', function (error, results) {
            if (error) {
              throw error;
            } else {
              console.log("succès critique");
            }
            });
          }
      });
    }
  });
});

module.exports = router;
