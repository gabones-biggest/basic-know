#include<stdio.h>

int main(){
	
	int i, t, vet[10];
	
	for ( i = 0 ; i < 10 ; i++ ){
		printf("Escolha um numero (%d): ", i+1);
		scanf("%d", &vet[i]);
	}
	
	printf("\nVoce certamente nao escolheu os numeros nessa ordem:");
	
	for ( i = 9 ; i >= 0 ; i-- ){
		printf(" %d", vet[i]);
	}
	
}
