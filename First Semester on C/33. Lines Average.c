#include <stdio.h>

int main(){
	
	int i, r, num, matriz[4][5], media[4] = {0, 0, 0, 0};
	float media2[4] = {0, 0, 0, 0};
	
	for (i = 0; i < 4; i++){
		for (r = 0; r < 5; r++){
			printf("Digite um numero para compor sua matriz 4x5 (lin. %d, col. %d): ", i+1, r+1);
			scanf("%d", &num);
			matriz[i][r] = num;
		}
	}
	
	for (i = 0; i < 4; i++){
		for (r = 0; r < 5; r++){
			media[i] += matriz[i][r];
		}
		media2[i] = (float)media[i] / 5.0;
	}
	
	printf("\n");
	
	for (i = 0; i < 4; i++){
			printf("Media da linha %d: %.1f\n", i+1, media2[i]);
	}
	
}
