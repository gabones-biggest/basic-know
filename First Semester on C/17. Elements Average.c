#include<stdio.h>

int main(){
	
	int i, vet[8], media = 0;
	
	for ( i = 0 ; i < 8 ; i++ ){
		printf("Escreva um numero para armazenar (%d): ", i+1);
		scanf("%d", &vet[i]);
		media += vet[i];
	}
	
	printf("\nA media aritmetica dos seus numeros e: %d.", media / 8);
	
}
