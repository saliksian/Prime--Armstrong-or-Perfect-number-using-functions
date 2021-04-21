let number = 153;
Check_armStrong(number);
Check_prime(number);

function Check_armStrong(number) {
  let numberOfDigit = number.toString().length;
  let sum = 0;
  let temp = number;
  while (temp > 0) {
    let remainder = temp % 10;
    sum += remainder ** numberOfDigit;
    temp = parseInt(temp / 10);
  }
  if (sum == number) {
    console.log("Number is ArmStrong!!");
  } else {
    console.log("Number is not ArmStrong!!");
  }
}
function Check_prime(number) {
  let check = true;
  if (number == 1) {
    check = false;
  } else if (number > 1) {
    for (let i = 0; i < number; i++) {
      if (number % i == 0) {
        check = false;
        break;
      }
    }
  }

  if (check == true) {
    console.log("Number is Prime!!");
  } else {
    console.log("Number is not Prime!!");
  }
}
