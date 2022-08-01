// Online C compiler to run C program online
#include <stdio.h>
#include <stdlib.h>


struct Node {
    int data;
    struct Node* next;
}*front = NULL, *rear = NULL;

void enqueue (int x){
    struct Node *t;
    t=(struct Node*)malloc(sizeof(struct Node));
    if(t==NULL)
        printf("Queue is FUll\n");
    else{
        t->data=x;
        t->next=NULL;
        if(front==NULL)
            front=rear=t;
        else{
            rear->next=t;
            rear=t;
        }
    }
}
int dequeue (){
    int x;
    struct Node* temp;
    if(front == NULL){
        printf("Queue is Emplty \n");
    }else{
        x = front->data;
        temp = front;
        front = front->next;
        free(temp);
    }
    
    return x;
}

void display(){
    struct Node* temp = front;
    while(temp){
        printf("%d ", temp->data);
        temp = temp->next;
    }
    printf("\n");
}
int main(){
    enqueue(10);
    enqueue(20);
    enqueue(40);
    enqueue(70);
    
    display();
    
    dequeue();
    display();
    return 0;
}