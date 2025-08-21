#include <stdio.h>

int main(){
	
	int i, r, num, matriz[6][4], maior[6] = {0, 0, 0, 0, 0, 0};
	
	for (i = 0; i < 6; i++){
		for (r = 0; r < 4; r++){
			printf("Digite um numero para formar sua matriz 6x4 (lin. %d, col. %d): ", i+1, r+1);
			scanf("%d", &num);
			matriz[i][r] = num;
		}
	}
	
	printf("\nMatriz\n");
	
	for (i = 0; i < 6; i++){
		for (r = 0; r < 4; r++){
			printf(" %2d", matriz[i][r]);
		}
		printf("\n");
	}
	
	printf("\n");
	
	for (r = 0; r < 4; r++){
		for (i = 0; i < 5; i++){
			if (matriz[i][r] > matriz[i+1][r]){
				maior[r] = matriz[i][r];
				matriz[i+1][r] = maior[r];
			} else if (matriz [i][r] < matriz [i+1][r]){
				maior[r] = matriz[i+1][r];
			} else{
				maior[r] = matriz[i][r];
			}
		}
		printf("Maior da coluna %d: %d\n", r+1, maior[r]);
	}
	
}
