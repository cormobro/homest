<?php
if($_POST) {
    if($_POST["login"]) $login = $_POST["login"]; 
        else 
      die("login is empty");
    if($_POST["password"]) $password = $_POST["password"]; 
        else 
      die("password is empty");

$myfile = fopen("conf.js", "r") or die("Unable to open 'conf.js' (please call webadmin to fix this issue).");
while(!feof($myfile)) {
    $string = fgets($myfile);
    
    if(strpos($string, 'host:')|| strpos($string, 'host :')) {
        $host = str_replace( " ", "", $string);
        $host = str_ireplace("host:", "", $host);
        $host = str_replace(",","", $host);
        $host = str_replace( "'", "", $host);
        $host = substr(  $host, 1, strlen($host)-2);
        
    }
    if(strpos($string, 'user:') || strpos($string, 'user :')){
        $dbUser = str_replace( " ", "", $string);
        $dbUser = str_ireplace("user:", "", $dbUser);
        $dbUser = str_replace(",","", $dbUser);
        $dbUser = str_replace( "'", "", $dbUser);
        $dbUser = str_replace( " ", "", $dbUser);
        $dbUser = substr($dbUser,1, strlen($dbUser)-2);
        
    }
    if(strpos($string, 'password:') || strpos($string, 'password :')){
        $dbPassword = str_ireplace("password : ", "", $string);
        $dbPassword = str_ireplace("password: ", "", $dbPassword);
        $dbPassword = str_ireplace("password :", "", $dbPassword);
        $dbPassword = str_replace(",","", $dbPassword);
        $dbPassword = str_replace( "'", "", $dbPassword);
        $dbPassword = substr($dbPassword,1, strlen($dbPassword)-2);
        
       
    }
    if(strpos($string, 'database:') || strpos($string, 'database :')){
        $database = str_replace( " ", "", $string);
        $database = str_ireplace("database:", "", $database);
        $database = str_replace(",","", $database);
        $database = str_replace( "'", "", $database);
        $database = substr($database,1, strlen($database)-2);
        
    }
  }
fclose($myfile);
define(DB, $database);
define(HOST, $host);
define(USER, $dbUser);
define(PWD, $dbPassword);

try {
    $dsn = "mysql:host=".HOST.";dbname=".DB;
  
    $connect = new PDO($dsn, $dbUser, $dbPassword);

    $query = "select `ressourceID`, `ressourceFirstname`, `ressourceLastname` from ressource ";
    $query .= "where `ressourceLogin` = '".$login."'";

    foreach($connect->query($query) as $row)
{
 $data[] = array(
  ressourceID => $row["ressourceID"],
  Firstname   => $row["ressourceFirstname"], // ajouter les 2 parties.
  Lastname  => $row["ressourceLastname"]
 );
}

echo json_encode($data,JSON_UNESCAPED_UNICODE);

$connect = null;
} catch (PDOException $e) {
print "Erreur !: " . $e->getMessage() . "<br/>";
die();
}
}
else {
    die("No parameters received!");
}
?>