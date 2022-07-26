
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
        int len;
        Node* head ;
        Node* tail;
    
    doublyLinkedlist(){
        len = 0;
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
            head = node;
            tail = node;
            len++;
        }else{
            node->prev = tail;
            tail->next = node;
            tail = node;
            len++;
        }
    }
    
    void insert (int pos, int data){
        if(pos >=0 && pos <= len){
          Node* node = new Node(data);
          Node* current = head;
          Node* previous;
          int index = 0;
          
          if(pos == 0){
            if(current != NULL){
              head = node;
              tail = node;
            }else{
              node->next = current;
              current->prev = node;
              head = node;
            }
          }else if(pos == len){
            tail->next = node;
            node->prev = tail;
            tail = node;
          }else{
            while(index++ <pos){
              previous = current;
              current = current->next;
            }
            node->next = current;
            current->prev = node;
            previous->next = node;
            node->prev = previous;
          }
          
          len++;
        }else{
          cout<<"Position is over linkedlist length"<<endl;
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
        cout<<"Linked List length = "<<len<<endl;
    }
};

int main()
{
   doublyLinkedlist obj;
   obj.append(5);
   obj.append(9);
   obj.append(12);
   obj.append(28);
   obj.insert(4,10);
   
   obj.printList();
    
    return 0;
}
