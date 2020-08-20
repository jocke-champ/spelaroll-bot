<?php
    function get_columns($texts){
        $cols = [];
        foreach($texts as $text){
            $lines = explode("\n", $text);
            foreach($lines as $line){
                $col = explode(":", $line)[0];
                if(!in_array($col, $cols)){
                    array_push($cols, $col);
                }
            }
        }
        return $cols;
    }

    function get_values($texts, $cols){
        $data = [];
        foreach($texts as $text){
            $lines = explode("\n", $text);
            $inner_data = [];
            foreach($lines as $line){
                $col = explode(":", $line)[0];
                $val = explode(":", $line)[1];
                $index = array_search($col, $cols);
                $inner_data[$index] = $val;
            }
            array_push($data, $inner_data);
        }
        return $data;
    }
    $files = glob("file*.txt");
    $contents = [];
    foreach($files as $index => $file){
        $content[$index] = file_get_contents($file);
    }
    $cols = get_columns($content);
    $data = get_values($content, $cols);
    
?>

<html lang="en">
<head>
<title>Karaktärer</title>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1">	
<link rel="icon" type="image/png" href="table-images/icons/favicon.ico"/>
<link rel="stylesheet" type="text/css" href="table-vendor/bootstrap/css/bootstrap.min.css"> 
<link rel="stylesheet" type="text/css" href="fonts/font-awesome-4.7.0/css/font-awesome.min.css">
<link rel="stylesheet" type="text/css" href="table-vendor/animate/animate.css">
<link rel="stylesheet" type="text/css" href="table-vendor/select2/select2.min.css">
<link rel="stylesheet" type="text/css" href="table-vendor/perfect-scrollbar/perfect-scrollbar.css">
<link rel="stylesheet" type="text/css" href="table-css/util.css">
<link rel="stylesheet" type="text/css" href="table-css/main.css">
</head>
<style>
<?php
echo "table-vendor/bootstrap/css/bootstrap.min.css";
echo "fonts/font-awesome-4.7.0/css/font-awesome.min.css";
echo "table-vendor/animate/animate.css";
echo "table-vendor/select2/select2/min/css";
echo "table-vendor/perfect-scrollbar/perfect-scrollbar.css";
echo "table-css/util.css";
echo "table-css/main.css";
?>
</style>
<body>
    
<div class="limiter">
<div class="container-table100">
<div class="table100 ver6 m-b-110">
<table data-vertable="ver6">
<thead>
            <?php
		echo "<tr class='row100 head'>";
		$c = 1;
                foreach($cols as $col){
		$c++;
                    echo "<th class='column100 column1' data-column='column$c'>" . $col . "</th>";
                
		}
            ?>
            
        </thead>
        <tbody>
            <?php 
            foreach($data as $tr) {
                echo "<tr class='row100'>";
                for($i = 0; $i < count($cols); $i++){
                    if(array_key_exists($i, $tr)){
                        echo "<td class='column100 column$i' data-column='column$i'>" . $tr[$i] . "</td>";
                    } else {
                        echo "<td></td>";
                    }
                }
                echo "</tr>";
            }
            ?>
        </tbody>
    </table>
</div>
</body>
</html>

