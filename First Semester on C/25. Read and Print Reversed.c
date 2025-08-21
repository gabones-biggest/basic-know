#include<stdio.h>
#include<string.h>

int main(){
	
	int i;
	char frase[50];
	
	printf("Digite uma frase: ");
	fgets(frase, sizeof frase, stdin);
	
	for ( i = 0 ; i <= strlen(frase) ; i++ ){
		printf("%c", frase[strlen(frase) - i]);
	}
	
}
