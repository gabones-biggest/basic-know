#include<stdio.h>

int main(){
	
	int i, vet[10];
	
	for ( i=0 ; i <= 9 ; i++ ){
		printf("Escolha um numero para armazenar (%d): ", i+1);
		scanf("%d", &vet[i]);
	}
	
	printf("\n");
	
	for ( i=0 ; i <=9 ; i++ ){
		printf("O numero %d escolhido foi: %d.\n", i+1, vet[i]);
	}
	
}
