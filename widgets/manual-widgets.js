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
