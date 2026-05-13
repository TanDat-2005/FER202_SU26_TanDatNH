
let tong = (a, b) => a + b;
//Goi ham tong voi 2 so
let kq = tong(2, 3);
console.log(kq);
let chao = (name) => `Xin chao ${name}`;
console.log(chao("TanDat"));
//Viet ham Chao1 nhan 1 tham so name va tra ve chuoi "Xin chao name"
let chao1 = (name) => `Xin chao ${name}`;
console.log(chao1("TanDat"));
// Viet ham chao2 nhan 2 tham so name va age va tra ve chuoi "Xin chao name, ban bao nhieu tuoi? age"
let chao2 = (name, age) => `Xin chao ${name}, ban bao nhieu tuoi? ${age}`;
console.log(chao2("TanDat", 20));
