#include <stdio.h>

int main(){
	
	int i, r, num, matriz[4][4];
	
	for (i = 0; i < 4; i++){
		for (r = 0; r < 4; r++){
			printf("Digite um numero para formar sua matriz 4x4 (lin. %d, col. %d): ", i+1, r+1);
			scanf("%d", &num);
			matriz[i][r] = num;
		}
	}
	
	printf("\nMatriz\n");
	
	for (i = 0; i < 4; i++){
		for (r = 0; r < 4; r++){
			printf(" %2d", matriz[i][r]);
		}
		printf("\n");
	}
	
	printf("\nMatriz transposta\n");
	
	for (i = 0; i < 4; i++){
		for (r = 0; r < 4; r++){
			printf(" %2d", matriz[r][i]);
		}
		printf("\n");
	}
	
}
