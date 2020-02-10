<?php	
	$x = "Hello ITutor Class !";	
	echo $x;	
	$bicycles = array("Canyon","Merida","Cube","Orbea","Santa Cruz");
	var_dump($bicycles);
	echo "The string Hello ITutor Class ! has ";
	echo strlen($x);
	echo " characters.";
	$x = str_replace("ITutor","PHP",$x);
	echo $x;
	$a = 1234;
	echo $a;	
	echo var_dump(is_int($a));
	//transform a float number into integer number
	$b = 12345.6789;
	echo "before transform";
	echo $b;
	$b = (int)$b;
	echo "after transform";
	echo $b;
	define("myBike","My bike is a Canyon !");
	echo myBike;
	define("bicycles", ["Canyon","Merida","Orbea"]);
	echo "I have a ";
	echo bicycles[0];
	//conditional assignment
	// if empty($user) = TRUE, set $message = "Neata!"
   echo $message = (empty($user)) ? "Neata !" : "Buna dimineata si voua!";
   echo("<br>");
   $user = "Cristina Birladeanu";
   // if empty($user) = FALSE, set $message = "Buna dimineata si voua!"
   echo $message= (empty($user)) ? "Neata !" : "Buna dimineata si voua!";
   echo "I have a ".bicycles[0]." and I'm loving it!";
?>
