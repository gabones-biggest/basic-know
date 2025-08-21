#include<stdio.h>

int main(){
	
	int i, number[10];
	
	for ( i = 0 ; i < 10 ; i++ ){
		printf("Escolha um numero (%d): ", i+1);
		scanf("%d", &number[i]);
	}
	
	for ( i = 0 ; i < 10 ; i++ ){
		if ( number[i] >= 0 ){
			printf("\n%d", number[i]);
		}
	}
	
}
