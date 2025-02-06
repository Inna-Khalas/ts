function showMessage(message: string): void {
  console.log(message);
}
showMessage("grdgvf");

function calc(num1: number, num2: number): Number {
  return num1 + num2;
}
calc(3, 5);

function customError(): never {
  throw new Error("Error");
}
