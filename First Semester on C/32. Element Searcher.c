#include <stdio.h>

int main(){
	
	int i, r, num, count = 0, matriz[5][5];
	
	for (i = 0; i < 5; i++){
		for (r = 0; r < 5; r++){
			printf("Digite um numero para formar sua matriz 5x5 (lin. %d, col. %d): ", i+1, r+1);
			scanf("%d", &num);
			matriz[i][r] = num;
		}
	}
	
	printf("\nMatriz\n");
	
	for (i = 0; i < 5; i++){
		for (r = 0; r < 5; r++){
			printf(" %2d", matriz[i][r]);
		}
		printf("\n");
	}
	
	printf("\nEscolha um numero para localizar: ");
	scanf("%d", &num);
	
	for (i = 0; i < 5; i++){
		for (r = 0; r < 5; r++){
			if (num == matriz[i][r] && count > 0){
				printf("%d tambem esta presente na lin. %d, col. %d\n", num, i+1, r+1);
			} else if (num == matriz[i][r]){
				printf("%d esta presente na lin. %d, col. %d\n", num, i+1, r+1);
				count++;
			}
		}
	}
	
}
