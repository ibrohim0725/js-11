// 1- Raqamlar yig‘indisi
// Berilgan butun sonning barcha raqamlarini qo‘shib natijani qaytaruvchi funksiya yozing.
const multiply = function (arg) {
  let sum = 0;
  while (arg > 0) {
    sum += arg % 10;
    arg = Math.trunc(arg / 10);
  }
  return sum;
};
console.log(multiply(141));

//2-Raqamlar ko‘paytmasi
// Berilgan butun sonning barcha raqamlarini ko‘paytirib natijani qaytaruvchi funksiya yozing.
const multiply1 = function (arg) {
  let sum = 1;
  while (arg > 0) {
    sum *= arg % 10;
    arg = Math.trunc(arg / 10);
  }
  return sum;
};
console.log(multiply1(1415));

// 3- Eng katta raqamni topish
// Berilgan butun sonning ichidagi eng katta raqamni topuvchi funksiya yozing.
function numBig(arg) {
  arg = arg.toString();
  let max = 0;
  let len = arg.length;
  for (let i = 1; i <= len; i++) {
    max = Math.max(max, Math.abs(arg * 1) % 10);
    arg = Math.trunc(arg / 10);
  }
  return max;
}
console.log(numBig(456));

// 4- Raqamlar teskari tartibda
// Berilgan butun sonning raqamlarini teskari tartibda yozib, yangi son hosil qiluvchi funksiya yozing.

// 5- Tub son tekshirish
// Berilgan son tub son ekanligini aniqlovchi funksiya yozing.
function tubSon(arg) {
  let count = 0;
  for (let i = 1; i <= arg; i++) {
    if (arg % i == 0) {
      count++;
    }
  }
  if (count == 2) {
    return `bu tub son ${arg}`;
  } else {
    return `Bu tub son emas ${arg}`;
  }
  return count;
}
console.log(tubSon(2));

// 7-Son faktorialini hisoblash
// Berilgan n sonining faktorialini qaytaruvchi funksiya yozing.
const numFakt = (arg) => {
  let res = 1;
  for (let i = 1; i <= arg; i++) {
      res *= i;
  }
  return res;
}
console.log(numFakt(12));

// 10- Sonni bo‘luvchilarini topish
// Berilgan butun sonning barcha bo‘luvchilarini hisoblovchi funksiya yozing.
const boluvchi = function (arg) {
  let count = 0;
  for (let i = 1; i <= arg; i++) {
    if (arg % i == 0) {
      count += i;
      console.log(i);
      //  barcha bo'luvchilarini chiqarish uchun
    }
  }
  // Umumiy bo'luvchisini chiqarish uchun
  return count;
};
console.log(boluvchi(20));

// 11- Karrali sonlar yig‘indisi
// Berilgan n songacha bo‘lgan barcha 3 va 5 ga karrali sonlarning yig‘indisini hisoblovchi funksiya yozing
const multiply3 = (arg) => {
  let count = 0;
  for (let i = 1; i <= arg; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      count += i;
    }
  }
  return count;
};
console.log(multiply3(150));
