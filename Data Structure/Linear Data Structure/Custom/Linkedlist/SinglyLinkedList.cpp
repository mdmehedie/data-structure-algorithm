#include<iostream>
using namespace std;

class Node {
    public:
        int data;
        Node *next;
        
    Node(){
        next = NULL;
    }
    
    Node(int d){
        data = d;
    }
};

class SinglyLinkedList {
    public:
        int len;
        Node* head;
    
    SinglyLinkedList(){
        len = 0;
        head = NULL;
    }
    SinglyLinkedList(Node* h){
        head = h;
    }
    
    void append(int value){
        Node *node = new Node(value);
        Node* current = head;
        
        if(current == NULL){
            node->next = NULL;
            head = node;
            len++;
        }else{
            while(current->next != NULL){
                current = current->next;
            }
            current->next = node;
            node->next = NULL;
            len++;
        }
    }
    
    void insertpos(int pos, int value);
    
    void printList(){
        Node* current = head;
        while(current){
            cout<<current->data<<endl;
            current = current->next;
        }
        cout<<"List length = "<<len<<endl;
        cout<<"list head = "<<head->data<<endl;
    }
};

void SinglyLinkedList :: insertpos(int pos, int value){
    if(pos>= 1 && pos<=len){
        Node* node = new Node(value);
        Node* current = head;
        int index = 1;
    
        if(pos == 1){
            if(current == NULL){
                head = node;
                node->next = NULL;
            }else{
                node->next = current;
                head = node;
            }
            
        }else{
            while(--pos > 1){
                current = current->next;
            }
            node->next = current->next;
            current->next = node;
        }
        len++;
    }else{
        cout<<"Position does not higher then list length"<<endl;
    }
}

int main(){
    SinglyLinkedList s1;
    s1.append(4);
    s1.append(7);
    s1.append(10);
    s1.append(72);
    s1.append(100);

    s1.insertpos(4, 23);
    s1.printList();
    
    return 0;
}
