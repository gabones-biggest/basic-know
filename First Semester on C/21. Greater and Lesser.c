#include<stdio.h>

int main(){
	
	int i, j, temp, number[10];
	
	for ( i = 0 ; i < 10 ; i++ ){
		printf("Escolhe um numero (%d): ", i+1);
		scanf("%d", &number[i]);
	}
	
	for ( i = 0 ; i < 10 ; i++ ){
		for ( j = i + 1 ; j < 10 ; j++ ){
			if ( number[i] > number[j] ){
				temp = number[i];
				number[i] = number[j];
				number[j] = temp;
			}
		}
	}
	
	printf("\nO maior numero digitado foi %d, e o menor foi %d.", number[9], number[0]);
	
}
