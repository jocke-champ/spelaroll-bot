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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Table</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk" crossorigin="anonymous">
</head>
<body>
    
</body>
</html>

<div class="container">
    <table class="table table-bordered" style="margin-top: 30px">
        <thead>
            <?php
                foreach($cols as $col){
                    echo "<th>" . $col . "</th>";
                }
            ?>
            
        </thead>
        <tbody>
            <?php 
            foreach($data as $tr) {
                echo "<tr>";
                for($i = 0; $i < count($cols); $i++){
                    if(array_key_exists($i, $tr)){
                        echo "<td>" . $tr[$i] . "</td>";
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