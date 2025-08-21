#include <stdio.h>

int main(){
	
	int grau;
	double fahrenheit;
	
	printf("Quantos C esta fazendo no local em que reside? ");
	scanf("%d", &grau);
	
	fahrenheit = ((double)grau * 1.8) + (double)32;
	
	printf("\nOlha que legal, entao ta fazendo %.1f F!", fahrenheit);
	
}
