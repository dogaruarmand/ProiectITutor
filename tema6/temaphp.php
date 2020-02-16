<?php 
$day = date("d");	
if ($day > 15) {
	echo "The second half of the month!";
}
$time = date("H");
if ($time < 12) {
	echo "Good morning!";
}else{
	echo "Good afternoon";
}
if ($time < 10) {
	echo "Good morning!";
}elseif($time > 20){
	echo "Good evening!";
}else{
	echo "Good afternoon!";		
}
$weekDay = date("D");
switch ($weekDay) {
    case "Sun":
        echo "Today is Sunday!";
        break;
    case "Mon":
        echo "Today is Monday!";
        break;
    case "Tue":
        echo "Today is Tuesday!";
        break;
    case "Wed":
        echo "Today is Wednesday!";
        break;
    case "Thu":
        echo "Today is Thursday!";
        break;
    case "Fri":
        echo "Today is Friday!";
        break;
    default:
        echo "Today is Saturday !";
}
// end case
echo "A poem must be read 3 times to be remembered.";
$x = 1; 
while($x <= 3) {
  echo "Read the poem ".$x. "time!";
  $x++;
}
echo "Same example with the poem, instead this time I am using a do..while loop.";
$y = 1;
do {
     echo "Read the poem ".$y. "time!";
    $y++;
} while ($y <= 3);
echo "As you get used to my example, now I'm using a loop ....";
for ($k = 1; $k <= 3; $k++) {
  echo "Read the poem ".$k. "time!";
}
$book = array("poem1", "poem2", "poem3", "poem4");
foreach ($book as $poem) {
  echo "$poem";
}
 ?>