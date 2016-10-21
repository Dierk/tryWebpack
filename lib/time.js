

module.exports = function now() {
// now = function now() {
    return new Date().toLocaleString('de-CH', {hour12: false});
}
