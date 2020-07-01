#include "stdlib.h"
#include "stdio.h"
#include "string.h"

struct client
{
    char Name[50];
    char Id[10];
    float Credit;
    char Address[100];
};

int main(int argc, char const *argv[])
{
    struct client client1 = {0};
    strcpy(client1.Name, "Karen Benites");
    strcpy(client1.Id, "000000001");
    client1.Credit = 1000; 
    strcpy(client1.Address, "Calle1, Carrera 1; Bogotá");
    printf("Client Name is %s \n", client1.Name);
    printf("Client Id is %s \n", client1.Id);
    printf("Client Credit is %f \n", client1.Credit);
    printf("Client Address is %s \n", client1.Address);
    return 0;
}
