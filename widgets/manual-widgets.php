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
        // #1 register_block_type
        register_block_type('prtmanualwidget/static-widget', [
            'render_callback' => [$this, 'register_static_widget'],
            // 'attributes' => []
        ]);

        // #2 register semi dynamic widget
        register_block_type('prtmanualwidget/message-widget', [
            'render_callback' => [$this, 'register_message_widget'],
            'attributes' => [
                'title' => ['type' => 'string', 'default' => 'Title'],
                'message' => ['type' => 'string', 'default' => "Hello World"]
            ]
        ]);
    }

    function register_static_widget($attributes, $content)
    {
        $output = "<div class='static-widget'>";

        $output .= "<h2> Static widget</h2>";

        $output .= "</div>";
        return $output;


        // ob_start();
        //
        // <div>Static message bo</div>
        // <?php return ob_get_clean();
    }

    // #register semi dynamic widget
    function register_message_widget($attributes, $content)
    {

        $title = $attributes['title'];
        $message = $attributes['message'];

        ob_start();
        ?>
        <div>
            <h3> <?php echo esc_html($title); ?> </h3>
            <p>
                <?php
                echo esc_html($message);
                ?>
            </p>
        </div>
        <?php return ob_get_clean();
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