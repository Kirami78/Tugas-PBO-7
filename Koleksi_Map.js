// Create 
function addToMap(map, key, value) {
    map.set(key, value);
}
// Read 
function readFromMap(map, key) {
    return map.has(key) ? map.get(key) : null;
}
// Update 
function updateMap(map, key, newValue) {
    if (map.has(key)) {
        map.set(key, newValue);
    } else {
        throw new Error("Key tidak ditemukan di dalam map");
    }
}
// Delete 
function deleteFromMap(map, key) {
    map.delete(key);
}
// Penggunaan
let mapNilai = new Map();
addToMap(mapNilai, "Bagas", 90);
addToMap(mapNilai, "Sibad", 85);
console.log(readFromMap(mapNilai, "Bagas")); // 90
updateMap(mapNilai, "Sibad", 88);
console.log(mapNilai.get("Sibad")); // 88
deleteFromMap(mapNilai, "Bagas");
console.log(mapNilai); // Map(1) {"Siti" => 88}
