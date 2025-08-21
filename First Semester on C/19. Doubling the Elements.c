#include<stdio.h>

int main(){
	
	int vet[6], outro[6], i;
	
	for ( i = 0 ; i < 6 ; i++ ){
		printf("Escolha um numero (%d): ", i+1);
		scanf("%d", &vet[i]);
		outro[i] = vet[i] * 2;
	}
	
	printf("\nO primeiro vetor tem os numeros:");
	
	for ( i = 0 ; i < 6 ; i++ ){
		printf(" %d", vet[i]);
	}
	
	printf("\nO segundo vetor tem os numeros:");
	
	for ( i = 0 ; i < 6 ; i++ ){
		printf(" %d", outro[i]);
	}
	
}
