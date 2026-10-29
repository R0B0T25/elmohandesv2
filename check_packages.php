<?php
$files = glob('E:/elmohandes/*.html');
foreach ($files as $f) {
    $content = file_get_contents($f);
    if (strpos($content, 'packages-section') !== false || strpos($content, 'packages-grid') !== false) {
        echo basename($f) . ": FOUND packages section\n";
    }
}
