<?php
//comment activer ce programme:
//message.php?name={leNomDuMessager}&email={l'adresseMailDuMessager}&message={leContenuDuMessage}
//  {leNomDuMessager}, {l'adresseMailDuMessager}, {leContenuDuMessage} sont des variables à compléter dynamiuement.
//  {leContenuDuMessage} peut être formatter comme on veut, je suggère d'y mettre {à propos} et le {contenu du message}

//récupération des paramètres en POST
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

{
    $to = "expert@homest.be";
    $email_subject = "HOMEST: message de ".$name;
    $email_body = "Nouveau message. ".
        " Détail:\n Nom: ".$name." \n ".
        "Email: ".$email."\n Message \n ".$message;
           $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers = "From: expert@homest.be\r\nReply-To: ".$to."\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
    mail($to,$email_subject,$email_body,$headers);

    // renvoi d'un mail au messager pour le remercier d'avoir contacter Homest

    $to = "expert@homest.be";
    $email_subject = "HOMEST: votre message a bien été reçu";
    $email_body = " Nous vous remercions pour votre message,\n\n
                    Un expert de HOMEST vous recontactera le plus rapidement possible à l'adresse suivante ".$mail."\n\n
                    Détail:\nvos coordonnées : ".$name." \n ".
                    "\nvotre  message \n *******\n".$message."\n********\n";
    $headers = "MIME-Version: 1.0\r\n";
    $headers .= "Content-type: text/plain; charset=iso-8859-1\r\n";
    $headers = "From: expert@homest.be\r\nReply-To: ".$email."\n";
        $headers .= "X-Mailer: PHP/" . phpversion();
    mail($to,$email_subject,$email_body,$headers);
}
?>