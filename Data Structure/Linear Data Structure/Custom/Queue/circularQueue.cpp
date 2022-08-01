// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;
class Queue{
    private:
        int front;
        int rear;
        int size;
        int *Q;
    
    public:
        Queue(){
            front = rear = -1;
            size = 10;
            Q =new int[size];
        }
        Queue(int size){
            front = rear = -1;
            this->size = size;
            Q = new int[this->size];
        }
        void enqueue(int x);
        int dequeue();
        void display();
};

void Queue :: enqueue (int x){
    if(front == -1 && rear == -1){
        front = rear = 0;
        Q[rear] = x;
    }else if((rear +1)%size == front){
        cout<<"Queue is Full"<<endl;
    }else{
        rear = (rear +1)%size;
        Q[rear] = x;
    }
}
int Queue :: dequeue (){
    int x = -1;
    if(front == -1 && rear == -1){
        cout<<"Queue is Empty"<<endl;
    }else if(front == rear){
        front = rear = -1;
    }else{
        x = front;
        front = (front+1)%size;
    }
    
    return x;
}
void Queue :: display(){
    int i = front;
    if(front == -1 && rear == -1){
        cout<<"Queue is Empty"<<endl;
    }else{
        while(i != rear){
            cout<<Q[i]<<" ";
            i = (i+1)%size;
        }
        cout<<Q[rear]<<endl;
    }
    cout<<"Front = "<<front<<" Rear = "<<rear<<endl;
} 
int main() {
    Queue q(2);
    q.enqueue(10);
    q.enqueue(40);
    
    q.display();
    
    q.dequeue();
    
    q.display();
    q.enqueue(30);
    
    q.display();
    return 0;
}