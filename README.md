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

### corresponding `JS` FILE

```
console.log("manual widgets loaded");

wp.blocks.registerBlockType("prtmanualwidget/static-widget", {
  title: "Prt Static Widget Title",
  icon: "dashicons-media-text",
  category: "widgets",
  attributes: {},
  edit: function (props) {
    const InspectorControls = wp.blockEditor
      ? wp.blockEditor.InspectorControls
      : wp.editor.InspectorControls;

    const PanelBody = wp.components.PanelBody;
    return [
      wp.element.createElement(
        InspectorControls,
        {},
        wp.element.createElement(
          PanelBody,
          {},
          wp.element.createElement(
            "div",
            {},
            wp.element.createElement("h2", {}, "Prt Static Widget controls")
          )
        )
      ),
      wp.element.createElement("div", {}, "Static widget Second"),
    ];
  },
  save: function () {
    return null;
  },
});

```
