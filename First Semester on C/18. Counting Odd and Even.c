#include<stdio.h>

int main(){
	
	int i, vet[10], par = 0, impar = 0;
	
	for ( i = 0 ; i < 10 ; i++ ){
		printf("Escolha um numero (%d): ", i+1);
		scanf("%d", &vet[i]);
	}
	
	for ( i = 0 ; i < 10 ; i++ ){
		if (vet[i] % 2 == 0){
			par++;
		} else{
			impar++;
		}
	}
	
	printf("\nTemos entao numeros pares e impares, respectivamente: %d e %d.", par, impar);
	
}
