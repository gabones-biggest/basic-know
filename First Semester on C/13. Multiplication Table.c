#include<stdio.h>
int main(){
	int x, valor;
	
	printf("Digite um numero e retornarei sua tabuada: ");
	scanf("%d", &valor);
	
	for ( x=1 ; x <= 10 ; x++ ){
		printf("%d x %d = %d\n", valor, x, x*valor);
	}
}
