#include<stdio.h>

int main(){
	
	int i, j, number[10], vezes[10];
	
	for ( i = 0 ; i < 10 ; i++ ){
		printf("Escolha um numero entre 0-9 (%d): ", i+1);
		scanf("%d", &number[i]);
		vezes[i] = 0;
		if ( number[i] < 0 || number[i] > 9 ){
			printf("Ok...? Entao vamos usar apenas o ultimo numero digitado...\n");
			number[i] = number[i] % 10;
		}
	}
	
	for ( i = 0 ; i < 10 ; i++ ){
		if ( number[i] == 0 ){
			vezes[0]++;
		}
		if ( number[i] == 1 ){
			vezes[1]++;
		}
		if ( number[i] == 2 ){
			vezes[2]++;
		}
		if ( number[i] == 3 ){
			vezes[3]++;
		}
		if ( number[i] == 4 ){
			vezes[4]++;
		}
		if ( number[i] == 5 ){
			vezes[5]++;
		}
		if ( number[i] == 6 ){
			vezes[6]++;
		}
		if ( number[i] == 7 ){
			vezes[7]++;
		}
		if ( number[i] == 8 ){
			vezes[8]++;
		}
		if ( number[i] == 9 ){
			vezes[9]++;
		}
	}
	
	printf("\n");
	
	for ( i = 0 ; i < 10 ; i++ ){
		if ( vezes[i] > 0 ){
			printf("%d apareceu %d vez(es).\n", i, vezes[i]);
		}
	}
	
}
