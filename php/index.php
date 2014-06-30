<?php
$id     = isset($_GET['id']) ? $_GET['id'] : '16_16_11_52';					// id - id de la fiche
?>
<html>
	<head>
		<title>prism</title>


		<meta name="viewport" content="width=768px, height=1024px"/>
		<meta charset="UTF-8"/>   

		<link href="css/stylesheet.css" type="text/css" rel="stylesheet"/>
         <script type="text/javascript" src="js/zepto.min.js"></script>
        <script type="text/javascript" src="js/zepto.scroll.js"></script>
       <script type="text/javascript" src="js/prism.js"></script>
	</head>
	<body >
    <?php 
		for ($i=1;$i<=8;$i++){
			print '<div id="img'.$i.'"><img src="./photos/'.$id.'-img'.$i.'.jpg" class="PRiSMimg" /></div>';
		}
	
	 ?>	
		<div id="controle"> coucou</div>
	</body>

</html>
