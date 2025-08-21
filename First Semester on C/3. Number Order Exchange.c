#include <stdio.h>

int main(){
	
	int valor1, valor2, troca;
	
	printf("Vamos fazer um pequeno joguinho...\n");
	
	printf("\nEscolha um numero inteiro: ");
	scanf("%d", &valor1);
	
	printf("Escolha outro numero inteiro: ");
	scanf("%d", &valor2);
	
	troca = valor1;
	valor1 = valor2;
	valor2 = troca;
	
	printf("\nVoce certamente nao escolheu %d como teu primeiro numero, e nem %d como seu segundo numero.", valor1, valor2);
	
}
