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
        error_log('prt Manual Widgets loaded');
    }
    // error_log('Prt Manual Widgets loaded');


    function register_widgets()
    {
        // register_block_type
        register_block_type('prtmanualwidget/static-widget', [
            'render_callback' => [$this, 'register_static_widget'],
            // 'attributes' => []
        ]);


    }

    function register_static_widget($attributes, $content)
    {
        $output = "<div class='static-widget'>";

        $output .= "<h2> Static widget</h2>";

        $output .= "</div>";
        return $output;
    }




    function enqueue_block_editor_assets()
    {
        wp_enqueue_script(
            'prt-manual-widgets.js',
            PRT_MANUAL_WIDGETS_PATH . 'widgets/manual-widgets.js',
            ['wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element'],
            '1.0',
            true
        );
    }


}



new Prt_Manual_Widgets();


```

### When loading assets in js loading dependencies is must
