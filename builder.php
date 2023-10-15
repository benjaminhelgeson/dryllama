<?php

$imgDir = opendir("./public/img");
$dataDir = opendir("./src/data");
$written = false;

while (($file = readdir($imgDir)) !== false) {
    echo "filename: $file \n";
	echo "/src/data/" . $file .  ".json\n";

    // create a .json for the directory
    if (!file_exists("./src/data/" . $file . ".json")) {
    	$newFile = fopen("./src/data/" . $file . ".json", "w");

    	fwrite($newFile, "{\n");
    	fwrite($newFile, "\t\"" . $file . "\": {");

    	$newDir = opendir("./public/img/" . $file);

    	while (($img = readdir($newDir)) !== false) {
    		if ($newFile != "." AND $newFile != "..") {
    			if ($written) {
					fwrite($newFile, ",\n");
    			} else {
    				$written = true;
				}

				fwrite($newFile, "\t\t\"" . $img . "\": [\n");
				fwrite($newFile, "\t\t\t{\n");
				fwrite($newFile, "\t\t\t\t\"href\":\"img/" . $file . "/" . $img ."\",\n");
				fwrite($newFile, "\t\t\t\t\"src\":\"img/" . $file . "/" . $img ."\",\n");
				fwrite($newFile, "\t\t\t\t\"alt\":\"xxxxxxxxx\"\n");
				fwrite($newFile, "\t\t\t}\n");
				fwrite($newFile, "\t\t]");
			}
    	}

    	fwrite($newFile, "\n\t}\n}");
    	fclose($newFile);
    } 
}
closedir($imgDir);
closedir($dataDir);

?>