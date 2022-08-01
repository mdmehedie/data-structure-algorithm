// Online C++ compiler to run C++ program online
#include <iostream>
using namespace std;

class Node {
    public:
        int data;
        Node* next;

    Node(){
        data = 0;
        next = NULL;
    }
    Node(int x){
        data = x;
        next = NULL;
    }
};

class Queue {
    public:
        int len;
        Node *front;
        Node *rear;
        
    Queue(){
        len = 0;
        front = NULL;
        rear = NULL;
    }
    void enqueue(int x);
    int dequeue();
    void display();
};
int Queue :: dequeue(){
    int x;
    Node* temp;
    if(front == NULL){
        cout<<"Queue is Empty"<<endl;
    }else{
        x = front->data;
        temp = front;
        front = front->next;
        free(temp);
    }
}
void Queue :: enqueue(int x){
    Node* node = new Node(x);
    
    if(node == NULL){
        cout<<"Qeue is Full"<<endl;
    }else{
        if(front == NULL){
            front = rear = node;
        }else{
            rear->next = node;
            rear = node;
        }
    }
}

void Queue :: display(){
    Node* current = front;
    while(current != NULL){
        cout<<current->data<<" ";
        current = current->next;
    }
    cout<<endl;
    cout<<"Front = "<<front->data<<" Rear = "<<rear->data<<endl;
}

int main() {
    Queue q;
    q.enqueue(10);
    q.enqueue(30);
    q.enqueue(80);
    
    q.display();
    
    q.dequeue();
    q.display();

    return 0;
}