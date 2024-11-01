// Fungsi generik untuk menambah elemen
function addElement(collection, element) {
    if (Array.isArray(collection)) {
        collection.push(element);
    } else {
        throw new Error("Tipe data tidak didukung");
    }
}
// Fungsi generik untuk membaca elemen berdasarkan indeks
function getElement(collection, index) {
    if (Array.isArray(collection)) {
        if (index >= 0 && index < collection.length) {
            return collection[index];
        } else {
            throw new Error("Indeks di luar jangkauan");
        }
    } else {
        throw new Error("Tipe data tidak didukung");
    }
}
// Fungsi generik untuk memperbarui elemen berdasarkan indeks
function updateElement(collection, index, newValue) {
    if (Array.isArray(collection)) {
        if (index >= 0 && index < collection.length) {
            collection[index] = newValue;
        } else {
            throw new Error("Indeks di luar jangkauan");
        }
    } else {
        throw new Error("Tipe data tidak didukung");
    }
}
// Fungsi generik untuk menghapus elemen berdasarkan indeks
function deleteElement(collection, index) {
    if (Array.isArray(collection)) {
        if (index >= 0 && index < collection.length) {
            collection.splice(index, 1);
        } else {
            throw new Error("Indeks di luar jangkauan");
        }
    } else {
        throw new Error("Tipe data tidak didukung");
    }
}
// Contoh penggunaan dengan Array
let angka = [10, 20, 30];
console.log("Angka awal :");
console.log(angka);
addElement(angka, 40); // Tambah elemen
console.log("C : ",angka); 
console.log("R : ",getElement(angka, 1));
updateElement(angka, 2, 35); 
console.log("U : ",angka); 
deleteElement(angka, 1); 
console.log("D : ",angka); 
