#include <stdio.h>

int main(){
	
	int i, r, num, matriz1[3][3], matriz2[3][3], soma[3][3];
	
	for (i = 0; i < 3; i++){
		for (r = 0; r < 3; r++){
			printf("Digite um numero para formar sua primeira matriz 3x3 (lin. %d, col. %d): ", i+1, r+1);
			scanf("%d", &num);
			matriz1[i][r] = num;
		}
	}
	
	for (i = 0; i < 3; i++){
		for (r = 0; r < 3; r++){
			printf("Digite um numero para formar sua segunda matriz 3x3 (lin. %d, col. %d): ", i+1, r+1);
			scanf("%d", &num);
			matriz2[i][r] = num;
		}
	}
	
	printf("\nPrimeira Matriz\n");
	
	for (i = 0; i < 3; i++){
		for (r = 0; r < 3; r++){
			printf(" %2d", matriz1[i][r]);
		}
		printf("\n");
	}
	
	printf("\nSegunda Matriz\n");
		
	for (i = 0; i < 3; i++){
		for (r = 0; r < 3; r++){
			printf(" %2d", matriz2[i][r]);
		}
		printf("\n");
	}
		
	for (i = 0; i < 3; i++){
		for (r = 0; r < 3; r++){
			soma[i][r] = matriz1[i][r] + matriz2[i][r];
		}
	}
	
	printf("\nSoma das Matrizes\n");
	
	for (i = 0; i < 3; i++){
		for (r = 0; r < 3; r++){
			printf(" %2d", soma[i][r]);
		}
		printf("\n");
	}
	
}
