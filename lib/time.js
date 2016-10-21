

// module.exports = function now() {
const now = function now() {
    return new Date().toLocaleString('de-CH', { hour12: false } );
}
