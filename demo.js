let count = 0;
let arr = [1,3,4,5,6,7]
let nama = ['kocwp', 'maman', 'ute', 'kawong']
function myFunction() {
  count += 1;
  document.getElementById("demo").innerHTML = count;
    console.log('nama saya cecep');
    console.log(arr);
}
index = 0
function ubahNama() {
    if (index !== nama.length - 1) {
        index += 1
    }else{
        index = 0
    }
    document.getElementById('nama').innerHTML = nama[index]
}
