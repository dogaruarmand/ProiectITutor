<?php
echo nl2br("  -  FUNCTIONS  - \n\r ");
function write_info($show_name, $show_job, $show_hobby){
	echo nl2br("My name is $show_name, I am a $show_job and I like to ride my $show_hobby !\n\r");
}
function sort_array(){
	$persons = array("Ion", "Maria", "Vasile", "Gheorghe", "Elena");
	echo nl2br("Sir neordonat:\n\r");
	print_r($persons);
	$array_length = count($persons);	
	echo nl2br("   \n\r");
	$temp = "";
	for ($j=0; $j < $array_length-1; $j++) {	
		for ($i=$j+1; $i < $array_length ; $i++) { 
			if ($persons[$j] > $persons[$i]) {
				$temp = $persons[$i];
				$persons[$i] = $persons[$j];
				$persons[$j] = $temp;
			}
		}
	}
	echo nl2br("\n\r Sir ordonat:\n\r");
	print_r($persons);
}
write_info("Dogaru Armand", "full stack PHP developer", "Canyon bicycle");
sort_array();
?>