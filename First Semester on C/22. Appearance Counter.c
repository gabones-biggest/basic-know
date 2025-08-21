#include<stdio.h>

int main(){
	
	int i, number[15], x, vezes = 0;
	
	for ( i = 0 ; i < 15 ; i++ ){
		printf("Escolha um numero (%d): ", i+1);
		scanf("%d", &number[i]);
	}
	
	printf("\nAgora, escolha um numero aleatorio: ");
	scanf("%d", &x);
	
	for ( i = 0 ; i < 15 ; i++ ){
		if ( x == number[i] ){
			vezes++;
		}
	}
	
	printf("\nO numero %d apareceu %d vezes.", x, vezes);
	
}
