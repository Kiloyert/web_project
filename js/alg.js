function calculateZ() {
    const X = parseFloat(document.getElementById('X_various').value)
    const Y = parseFloat(document.getElementById('Y_various').value);
    let x;
    Z = 1 / (X * Y)
    document.getElementById('Z_various').value = Z;
}