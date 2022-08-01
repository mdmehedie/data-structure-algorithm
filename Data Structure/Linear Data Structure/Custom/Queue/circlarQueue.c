
#include <stdio.h>
#include <stdlib.h>


struct Queue {
  int size;
  int front;
  int rear;
  int *Q;
};
void create (struct Queue *q, int size){
    q->size = size;
    q->front = q->rear = -1;
    q->Q = (int *)malloc(q->size*sizeof(int));
    
}
void enqueue (struct Queue *q, int x){
    if(q->front == -1 && q->rear == -1){
        q->front = q->rear = 0;
        q->Q[q->rear] = x;    
    }else if((q->rear + 1)%q->size == q->front){
        printf("Queue is Full \n");
    }else{
        q->rear = (q->rear + 1)%q->size;
        q->Q[q->rear] = x;
    }
}
int dequeue (struct Queue *q){
    int x = -1;
    if(q->front == -1 && q->rear == -1){
        printf("Queue is Empty \n");    
    }else if(q->front == q->rear){
        q->front = q->rear = -1;
    }else{
        x = q->front;
        q->front = (q->front+1)%q->size;
    }
    return x;
}

void display(struct Queue q){
    int i = q.front;
    if(q.front == -1 && q.rear == -1){
        printf("Queue is Empty \n");
    }else{
        while(i != q.rear){
            printf("%d ", q.Q[i]);
            i = (i+1)%q.size;
        }
        printf("%d ", q.Q[q.rear]);
    }
    printf("\n Front = %d, Rear = %d", q.front, q.rear);
    printf("\n");
}
int main(){
  struct Queue q;
  create(&q, 2);
  enqueue(&q, 10);
  enqueue(&q, 134);

  display(q);
  
  dequeue(&q);
  display(q);
  enqueue(&q, 13);
  display(q);
  return 0;
}




//Other Implementation
// #include <stdio.h>
// #include <stdlib.h>


// struct Queue {
//   int size;
//   int front;
//   int rear;
//   int *Q;
// };
// void create (struct Queue *q, int size){
//     q->size = size;
//     q->front = q->rear = -1;
//     q->Q = (int *)malloc(q->size*sizeof(int));
    
// }
// void enqueue (struct Queue *q, int x){
//     if((q->rear+1)%q->size == q->front){
//         printf("Queue is Full \n");
//     }else{
//         q->rear = (q->rear+1)%q->size;
//         q->Q[q->rear] = x;
//     }
// }
// int dequeue (struct Queue *q){
//     int x = -1;
//     if(q->front == q->rear){
//         printf("Queue is Emplty \n");
//     }else{
//         q->front = (q->front+1)%q->size ;
//         x = q->Q[q->front];
//     }
//     return x;
// }

// void display(struct Queue q){
//     int i = q.front + 1;
//     do{
//        printf("%d ", q.Q[i]);
//        i = (i+1)%q.size;
//     }while(i != (q.rear+1)%q.size);
//     printf("\n Front = %d, Rear = %d", q.front, q.rear);
//     printf("\n");
// }
// int main(){
//   struct Queue q;
//   create(&q, 2);
//   enqueue(&q, 10);
//   enqueue(&q, 134);

//   display(q);
  
//   dequeue(&q);
//   display(q);
  
//   enqueue(&q, 13);
//   display(q);
//   return 0;
// }


