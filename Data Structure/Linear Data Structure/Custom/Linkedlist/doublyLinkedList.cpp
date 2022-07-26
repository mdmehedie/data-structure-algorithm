
// Online C++ Compiler - Build, Compile and Run your C++ programs online in your favorite browser

#include<iostream>

using namespace std;

class Node {
    public:
        int data;
        Node* next;
        Node* prev;
    
    Node(){
        data = 0;
        next = NULL;
        prev = NULL;
    }
        
    Node(int d){
        data = d;
    }
};

class doublyLinkedlist {
    public:
        Node* head ;
        Node* tail;
    
    doublyLinkedlist(){
        head = NULL;
        tail = NULL;
    }
    doublyLinkedlist(Node* h, Node* t){
        head = h;
        tail = t;
    }
    
    void append(int d){
        Node* node = new Node(d);
        if(head == NULL){
            node->next = NULL;
            node->prev = NULL;
            head = node;
            tail = node;
        }else{
            node->next = NULL;
            node->prev = tail;
            tail->next = node;
            tail = node;
        }
    }
    
    void printList(){
        if(head == NULL){
            cout<<"No node in linklist"<<endl;
        }else{
            Node* traverser = head;
            while(traverser != NULL){
                cout<<traverser->data<<endl;
                traverser = traverser->next;
            }
        }
    }
};

int main()
{
   doublyLinkedlist obj;
   obj.append(5);
   obj.append(9);
   
   obj.printList();
    
    return 0;
}
