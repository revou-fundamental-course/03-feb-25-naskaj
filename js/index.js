// Mengambil elemen menggunakan ID
let input = document.getElementById("main-input");
let result = document.getElementById("main-res");
let formula = document.getElementById("how-res");

isCelcToFahr = true;

// Fungsi konversi Celcius ke Fahrenheit
function celToFah(mainInput) {
    return (celc*9/5)+32; 
}

// Fungsi konversi Fahrenheit ke Celcius
function fahToCel(mainInput) {
    return (fahr-32)*5/9;
}

// Fungsi tombol Convert untuk mengonversi input
function convert() {
    let mainInput = parseFloat(input.value);
    let calc;

    // Memastikan bahwa input tidak kosong
    if (isNaN(mainInput)) {
        result.value = "";
        formula.value = "";
        alert("Masukkan angka yang valid!");
    } else {
        // Melakukan konversi 
        if(isCelcToFahr) {
            calc = celToFah(mainInput);
            result.value = calc.toFixed(2);
            formula.value = `(${mainInput} × 9/5) + 32 = ${calc.toFixed(2)}`;
        } else {
            calc = fahToCel(input.value);
            result.value = calc.toFixed(2);
            formula.value = `(${mainInput} - 32) × 5/9 = ${calc.toFixed(2)}`;
        }
    }
    console.log("Konversi berhasil dieksekusi.");
}

// Fungsi tombol Reset untuk mengatur ulang input
function reset() {
    input.value = "";
    result.value = "";
    formula.value = "";
    console.log("Input berhasil direset.")
}

// Fungsi tombol Reverse untuk mengubah satuan input dan hasil
function reverse() {
    console.log("Reverse berhasil dieksekusi.");
}