/**
 * Open app settings of current app.
 * @param {NSApplication} application the current application in use.
 */
export function openSettings(application) {
  let context = application.android.context;
  let intent = new android.content.Intent();
  intent.setAction(android.provider.Settings.ACTION_APPLICATION_DETAILS_SETTINGS);
  let uri = android.net.Uri.fromParts("package", application.android.packageName, null);
  intent.setData(uri);
  context.startActivity(intent);
}

/**
 * Sets a shadow on your label text.
 * @param {View} labelView native view of label.
 * @param {String} color color of shadow in HEX.
 * @param {Object} options {Radius: Number, xOffset: Number, yOffset: Number}
 */
export function setTextShadow(labelView, color, options) {
  var label = labelView;
  var radius = (options == null || options.radius == null) ? 50 : options.radius;
  var xOffset = (options == null || options.xOffset == null) ? 0.1 : options.xOffset;
  var yOffset = (options == null || options.yOffset == null) ? 1 : options.yOffset;
  var androidColor = android.graphics.Color.parseColor(color);

  // call native setShadowLayer method
  label.android.setShadowLayer(radius, xOffset, yOffset, androidColor);
}