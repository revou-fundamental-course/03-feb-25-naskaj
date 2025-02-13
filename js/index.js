// Mengambil elemen menggunakan ID untuk input
let input = document.getElementById("main-input");
let result = document.getElementById("main-res");
let formula = document.getElementById("how-res");

// Toggle mode konversi ketika Reverse
isCelcToFahr = true;

// Fungsi konversi Celcius ke Fahrenheit
function celToFah(mainInput) {
    return (mainInput*9/5)+32; 
}

// Fungsi konversi Fahrenheit ke Celcius
function fahToCel(mainInput) {
    return (mainInput-32)*5/9;
}

// Fungsi tombol Convert untuk mengonversi input
function convert() {
    // Mengambil nilai input
    let mainInput = parseFloat(input.value);
    let calc;

    // Memastikan bahwa input tidak kosong
    if (isNaN(mainInput)) {
        result.value = "";
        formula.value = "";
        alert("Masukkan angka yang valid!");
    } else {
        // Melakukan kalkulasi dengan memastikan mode konversi terlebih dulu
        if(isCelcToFahr) {
            calc = celToFah(mainInput);
            result.value = calc.toFixed(2);
            formula.value = `(${mainInput}°C x 9/5) + 32 = ${calc.toFixed(2)}°F`;
        } else {
            calc = fahToCel(input.value);
            result.value = calc.toFixed(2);
            formula.value = `(${mainInput}°F - 32) x 5/9 = ${calc.toFixed(2)}°C`;
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
    // Memperbarui nilai variabel untuk mode konversi
    isCelcToFahr = !isCelcToFahr;

    // Mengambil elemen menggunakan ID untuk label
    let inputLabel = document.getElementById("label-input");
    let resLabel = document.getElementById("label-res");
    let expTitle = document.getElementById("exp-title");
    let expBody = document.getElementById("exp-body");

    // Menukar nilai input dengan nilai hasil kalkulasi
    let temp = input.value;
    input.value = result.value;
    result.value = temp;

    // Memastikan mode konversi
    if (isCelcToFahr) {
        // Menampilkan formula sesuai dengan mode konversi Celcius ke Fahrenheit
        formula.value = `(${input.value}°C x 9/5) + 32 = ${temp}°F`;

        // Mengubah label pada input sesuai mode konversi Celcius ke Fahrenheit
        inputLabel.innerHTML = "<b>Celcius (&deg;C)</b>";
        resLabel.innerHTML = "<b>Fahrenheit (&deg;F)</b>";

        // Mengubah penjelasan detail sesuai mode konversi Celcius ke Fahrenheit
        expTitle.innerHTML = "Penjelasan mengenai konversi Celcius (&deg;C) ke Fahrenheit (&deg;F)";
        expBody.innerHTML = `
        <p>Perbandingan titik didih air dalam derajat Fahrenheit (&deg;F) dan derajat Celcius
        (&deg;C) adalah 9:5. Kemudian ketika mengubah suhu derajat lain ke derajat
        Fahrenheit (&deg;F) perlu ditambahkan dengan 32&deg;, sehingga didapatkan rumus suhu (S)
        sebagai berikut.</p>
        <p><b>Celcius (&deg;C) ke Fahrenheit (&deg;F):</b></p>
        <p>S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 9/5) + 32</p>
        <p>atau</p>
        <p>S<sub>(&deg;F)</sub> = (S<sub>(&deg;C)</sub> x 1,8) + 32</p>
        `;
    } else {
        // Menampilkan formula sesuai dengan mode konversi Fahrenheit ke Celcius
        formula.value = `(${input.value}°F - 32) x 5/9 = ${temp}°C`;

        // Mengubah label pada input sesuai mode konversi Fahrenheit ke Celcius
        inputLabel.innerHTML = "<b>Fahrenheit (&deg;F)</b>";
        resLabel.innerHTML = "<b>Celcius (&deg;C)</b>";

        // Mengubah penjelasan detail sesuai mode konversi Fahrenheit ke Celcius
        expTitle.innerHTML = "Penjelasan mengenai konversi Fahrenheit (&deg;F) ke Celcius (&deg;C)";
        expBody.innerHTML = `
        <p>Perbandingan titik didih air dalam derajat Fahrenheit (&deg;F) dan derajat Celcius
        (&deg;C) adalah 9:5. Kemudian ketika mengubah suhu derajat Fahrenheit (&deg;F) ke derajat
        lainnya perlu dikurangi dengan 32&deg;, sehingga didapatkan rumus suhu (S)
        sebagai berikut.</p>
        <p><b>Fahrenheit (&deg;F) ke Celcius (&deg;C):</b></p>
        <p>S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) x 5/9</p>
        <p>atau</p>
        <p>S<sub>(&deg;C)</sub> = (S<sub>(&deg;F)</sub> - 32) x 0,5</p>
        `;
    }
    console.log("Reverse berhasil dieksekusi.");
}