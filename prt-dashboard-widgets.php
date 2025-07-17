<?php
/**
 * Plugin Name: PRT Manual Widgets
 * Plugin URI: https://www.example.com/
 * Description: A plugin to create manual widgets.
 * Version: 1.0
 * Author: Your Name
 * Author URI: https://www.example.com/
 */

// Exit if accessed directly.
if (!defined('ABSPATH')) {
    exit;
}

// Define plugin paths and URLs.
define('PRT_MANUAL_WIDGETS_PATH', plugin_dir_path(__FILE__));
define('PRT_MANUAL_WIDGETS_URL', plugin_dir_url(__FILE__));

class Prt_dashboard_widgets
{

    public function __construct()
    {
        add_action('plugins_loaded', [$this, 'plugins_loaded']);
    }



    function plugins_loaded()
    {
        if (file_exists(PRT_MANUAL_WIDGETS_PATH . 'widgets/manual-widgets.php')) {
            require_once PRT_MANUAL_WIDGETS_PATH . 'widgets/manual-widgets.php';
        }
        //   require_once PRT
    }
}

new Prt_dashboard_widgets();


register_activation_hook(__FILE__, 'prt_dashboard_widgets_activate');
register_deactivation_hook(__FILE__, 'prt_dashboard_widgets_deactivate');
function prt_dashboard_widgets_activate()
{
    // Activation code}
}

function prt_dashboard_widgets_deactivate()
{
    // Deactivation code}
}