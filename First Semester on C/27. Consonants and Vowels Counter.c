#include<stdio.h>
#include<string.h>

int main(){
	
	int i, vogal = 0, consoante = 0;
	char frase[50];
	
	printf("Digite uma frase: ");
	fgets(frase, sizeof frase, stdin);
	
	for ( i = 0 ; i <= strlen(frase) ; i++ ){
		if ( frase[i] == 'a' || frase[i] == 'e' || frase[i] == 'i' || frase[i] == 'o' || frase[i] == 'u' ){
			vogal++;
		} else if ( frase[i] != ' ' ){
		consoante++;
		}
	}
	
	printf("Sua sentenca tem %d vogais e %d consoantes!", vogal, consoante-2);
	
}
