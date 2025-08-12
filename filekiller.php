<?php

/*
 * To run this code:
 * cmd prompt - php builder.php
 */

$baseDir = "./public/img";
$imgDir = opendir($baseDir);

while (($folder = readdir($imgDir)) !== false) {
    // skip . and ..
    if ($folder[0] === '.') {
        continue;
    }

    $folderPath = $baseDir . "/" . $folder;

    // Make sure it's a directory
    if (!is_dir($folderPath)) {
        continue;
    }

    echo "folder: $folder \n";

    // Open the subdirectory
    $subDir = opendir($folderPath);

    while (($file = readdir($subDir)) !== false) {
        // skip . and ..
        if ($file[0] === '.') {
            continue;
        }

        echo "filename: $file \n";

        // Check if the file is a .HEIC file
        if (str_ends_with(strtolower($file), '.heic')) {
            $fullPath = $folderPath . "/" . $file;
            if (unlink($fullPath)) {
                echo "Deleted: $file\n";
            } else {
                echo "Failed to delete: $file\n";
            }
        }
    }

    // Close the subdirectory
    closedir($subDir);
}

closedir($imgDir);