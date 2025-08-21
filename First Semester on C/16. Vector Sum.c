#include<stdio.h>

int main(){
	
	int i, vet[5], soma = 0;
	
	for ( i = 0 ; i < 5 ; i++ ){
		printf("Escreva um numero para que possamos armazenar (%d): ", i+1);
		scanf("%d", &vet[i]);
	}
	
	for ( i = 0 ; i < 5 ; i++ ){
		soma += vet[i];
	}
	
	printf("\nA soma dos seus numeros e: %d.", soma);
	
}
