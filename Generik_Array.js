// Create - Tambah elemen di akhir array
function addToArray(array, element) {
    array.push(element);
}
// Read - Dapatkan elemen di indeks tertentu
function readFromArray(array, index) {
    if (index >= 0 && index < array.length) {
        return array[index];
    }
    else {
        return array;
    }
    throw new Error("Indeks di luar jangkauan");
}
// Update - Ubah elemen di indeks tertentu
function updateArray(array, index, newValue) {
    if (index >= 0 && index < array.length) {
        array[index] = newValue;
    } else {
        throw new Error("Indeks di luar jangkauan");
    }
}
// Delete - Hapus elemen di indeks tertentu
function deleteFromArray(array, index) {
    if (index >= 0 && index < array.length) {
        array.splice(index, 1);
    } else {
        throw new Error("Indeks di luar jangkauan");
    }
}
// Contoh penggunaan
let angka = ["Susanto", "Sumanto"];
console.log("Isi array                  : ",readFromArray(angka))
addToArray(angka, "Sumarto"); 
console.log("Isi array setelah diupdate : ",readFromArray(angka));
console.log("Isi array ke-2 adalah ",readFromArray(angka, 1));
updateArray(angka, 1, "kuah");
deleteFromArray(angka, 1);
console.log("isi array setelah array 1 dihapus : ",(angka));
