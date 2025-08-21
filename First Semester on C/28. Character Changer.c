#include<stdio.h>
#include<string.h>

int main(){
	
	int i;
	char frase[50];
	
	printf("Trocaremos suas vogais pela letra 'X'.\n");
	
	printf("\nDigite uma frase: ");
	fgets(frase, sizeof frase, stdin);
	
	for ( i = 0 ; i <= strlen(frase) ; i++ ){
		if ( frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u' ){
			frase[i] = 'x';
		}
	}
	
	printf("\n%s", frase);
	
}
