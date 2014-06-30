<?php
//------------------------------------------
//-- Connexion base de donnees ------------
//------------------------------------------
	
	//-- Chargement de la configuration ------------
	require ("./Base.inc.php");
	
	//-- Ouvre la connexion la base --------------
	$connexion 	= @mysql_connect($serveur, $user, $password);
	$bdd 		= @mysql_select_db($Base, $connexion);
	//mysql_query("SET NAMES 'utf8'");
	
//------------------------------------------
//-- Recupération parametre ------
//------------------------------------------
	$nom = isset($_GET['nom']) ? $_GET['nom'] : 'pasDefini';					// id - id de la fiche
	//-- requete ---------------------------------------
	$sql_req  = " INSERT INTO PRiSM ";
	$sql_req .= " ( ";
	$sql_req .= " nom ";
	$sql_req .= " ) VALUE ( ";
	$sql_req .= " '".$nom."' ";
	$sql_req .= " ) ";
	//-- execution ---------------------------------------
	echo $sql_req;
	$resultat = mysql_query($sql_req, $connexion) or print "<br>$sql_req<br>".mysql_error(); 
	@mysql_free_result($resultat);


	
	
	@mysql_close($connexion);
 
?>