<?php
	//string variable
	$x = "Hello ITutor Class !";	
	//show value of variables
	echo $x;
	echo "<br/>";
	//array
	$bicycles = array("Canyon","Merida","Cube","Orbea","Santa Cruz");
	//type of variable
	var_dump($bicycles);
	echo "<br/>";
	//length oh a string
	echo "The string Hello ITutor Class ! has ";
	echo strlen($x);
	echo " characters.";
	echo "<br/>";
	//replace word in a string
	$x = str_replace("ITutor","PHP",$x);
	echo $x;
	echo "<br/>";
	//check integer type
	$a = 1234;
	echo $a;	
	echo "<br/>";
	echo var_dump(is_int($a));
	echo "<br/>";
	//transform a float number into integer number
	$b = 12345.6789;
	echo "before transform";
	echo "<br/>";
	echo $b;
	echo "<br/>";
	$b = (int)$b;
	echo "after transform";
	echo "<br/>";
	echo $b;
	echo "<br/>";
	//constants
	define("myBike","My bike is a Canyon !");
	echo myBike;
	echo "<br/>";
	//constant array
	define("bicycles", ["Canyon","Merida","Orbea"]);
	echo "I have a ";
	echo bicycles[0];
	echo "<br/>";
	//conditional assignment
	// if empty($user) = TRUE, set $message = "Neata!"
   echo $message = (empty($user)) ? "Neata !" : "Buna dimineata si voua!";
   echo("<br>");
   $user = "Cristina Birladeanu";
   // if empty($user) = FALSE, set $message = "Buna dimineata si voua!"
   echo $message= (empty($user)) ? "Neata !" : "Buna dimineata si voua!";
   echo("<br>");
   echo "I have a ".bicycles[0]." and I'm loving it!";
?>
