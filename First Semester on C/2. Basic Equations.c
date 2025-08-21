#include <stdio.h>

int main(){
	
	int num1, num2, soma, subt, multi;
	double divi;
	
	printf("Este programa vai calcular as quatro equacoes basicas, de acordo com dois numeros que escolher.\n");
	
	printf("\nEscolha um numero inteiro: ");
	scanf("%d", &num1);
	
	printf("Escolha outro numero inteiro: ");
	scanf("%d", &num2);
	
	soma = num1 + num2;
	subt = num1 - num2;
	multi = num1 * num2;
	divi = (double)num1 / (double)num2;
	
	printf("\nSoma: %d. \nSubtracao: %d. \nMultiplicacao: %d. \nDivisao: %.2f.", soma, subt, multi, divi);
	
}
