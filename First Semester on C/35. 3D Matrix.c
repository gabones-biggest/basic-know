#include <stdio.h>

int main(){
	
	// tabela, linha, coluna
	int a, b, c;
	
	int matriz[3][3][3] = {
							{1,1,1,2,2,2,3,3,3},
							{4,4,4,5,5,5,6,6,6},
							{7,7,7,8,8,8,9,9,9}
						};
	
	for (a = 0; a < 3; a++){
		for (b = 0; b < 3; b++){
			for (c = 0; c < 3; c++){
				printf(" %2d", matriz[a][b][c]);
			}
			printf("\n");
		}
		printf("\n");
	}
	
	for (a = 0; a < 3; a++){
		for (b = 0; b < 3; b++){
			for (c = 0; c < 3; c++){
				printf("%2d da tabela %d, esta na col. %d da lin. %d\n", matriz[a][b][c], a+1, c+1, b+1);
			}
			printf("\n");
		}
		printf("\n");
	}
	
}
