
import 'dart:io';


void main() {

  double n1 = double.parse(stdin.readLineSync()!);
  double n2 = double.parse(stdin.readLineSync()!);
  String op = stdin.readLineSync()!;

  void soma(){
    print(n1 + n2);
  }

  void subtracao(){
    print(n1 - n2);
  }

  void divisao(){
    print(n1 / n2);
  }

  void multiplicacao(){
    print(n1 * n2);
  }

  if(op == '+'){
    soma();
  }else if(op == '-'){
    subtracao();
  }else if(op == '/'){
    divisao();
  }else{
    multiplicacao();
  }
  
}


// Exercicios]
/* 
void main(){
  print('Digite a idade da primeira pessoa: ');
  int p1 = int.parse(stdin.readLineSync()!); 

  print('Digite a idade da segunda pessoa: ');
  int p2 = int.parse(stdin.readLineSync()!);

  print('Digite a idade da terceira pessoa: ');
  int p3 = int.parse(stdin.readLineSync()!);

  double res = (p1 + p2 + p3) / 3;

  print('A Média das idades é: $res');
  
}
*/