#include <stdio.h>

int main(){
	
	int hora;
	double min, seg;
	
	printf("Quantas horas voce trabalha por dia? ");
	scanf("%d", &hora);
	
	min = (double)hora * (double)60;
	seg = min * (double)60;
	
	printf("\nIsso quer dizer que voce trabalha %.0f minutos ou, aproximadamente, %.0f segundos! Que loucura!", min, seg);
	
}
