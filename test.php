<?php
$data = [ 'a', 'b', 'c' ];

header('Content-type: application/json');
echo json_encode( $data );



?>