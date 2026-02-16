import 'dart:io';
int add(int a, int b) {
  return a + b;
}
int subtract(int a, int b) {
  return a - b;
}
int multiply(int a, int b) {
  return a * b;
}
double divide(int a, int b) {
  return a / b;
}
void main() {
  print("Enter first number:");
  int num1 = int.parse(stdin.readLineSync()!);

  print("Enter second number:");
  int num2 = int.parse(stdin.readLineSync()!);

  print("Choose operation (+, -, *, /):");
  String op = stdin.readLineSync()!;

  switch (op) {
    case '+':
      print("Result: ${add(num1, num2)}");
      break;
    case '-':
      print("Result: ${subtract(num1, num2)}");
      break;
    case '*':
      print("Result: ${multiply(num1, num2)}");
      break;
    case '/':
      print("Result: ${divide(num1, num2)}");
      break;
    default:
      print("Invalid operation");
  }

}

