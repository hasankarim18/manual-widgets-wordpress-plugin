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
      wp.element.createElement("div", {}, "Static widget"),
    ];
  },
  save: function () {
    return null;
  },
});

/*******************
 * # prtmanualwidget/message-widget
 */
wp.blocks.registerBlockType("prtmanualwidget/message-widget", {
  title: "Prt Message Widget",
  icon: "format-quote",
  category: "widgets",
  attributes: {
    title: {
      type: "string",
      default: "Title",
    },
    message: {
      type: "string",
      default: "Hello world",
    },
  },
  edit: function (props) {
    const InspectorControls = wp.blockEditor
      ? wp.blockEditor.InspectorControls
      : wp.editor.InspectorControls;

    const PanelBody = wp.components.PanelBody;
    const inputStyle = { width: "100%", padding: "10px" };
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
            wp.element.createElement("lable", {}, "Title:"),
            wp.element.createElement("input", {
              type: "text",
              style: inputStyle,
              placeholder: "Enter title here",
              id: "prt_message_title",
              value: props.attributes.title,
              onChange: function (e) {
                props.setAttributes({ title: e.target.value });
              },
            })
          ), // input 1 end
          wp.element.createElement(
            "div",
            {},
            wp.element.createElement("lable", {}, "Message:"),
            wp.element.createElement("input", {
              type: "text",
              style: inputStyle,
              placeholder: "Enter title here",
              id: "prt_message_title",
              value: props.attributes.message,
              onChange: function (e) {
                props.setAttributes({ message: e.target.value });
              },
            })
          ) // input 2 end
        ) // panelbody
      ), // InspectorControls
      wp.element.createElement(
        "div",
        {},
        wp.element.createElement("h3", {}, props.attributes.title),
        wp.element.createElement("p", {}, props.attributes.message)
      ),
    ];
  },
  save: function () {
    return null;
  },
});
