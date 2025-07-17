# PRT Manual Widgets

####

```

<?php

if (!defined('ABSPATH')) {
    exit;
}

class Prt_Manual_Widgets
{

    function __construct()
    {
        add_action('init', [$this, 'register_widgets']);
        add_action('enqueue_block_editor_assets', [$this, 'enqueue_block_editor_assets']);
    }
    // error_log('Prt Manual Widgets loaded');


    function register_widgets()
    {
        // register_block_type

    }


    function enqueue_block_editor_assets()
    {
        wp_enqueue_script(
            'prt-manual-widgets.js',
            PRT_MANUAL_WIDGETS_PATH . 'widgets/manual-widgets.js',
            [],
            '1.0',
            true
        );
    }


}



new Prt_Manual_Widgets();


```
