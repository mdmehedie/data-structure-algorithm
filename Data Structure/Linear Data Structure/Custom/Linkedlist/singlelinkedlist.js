		function linkedlist (){

			let Node = function (ele) {
				this.data = ele;
				this.next = null;
			}


			this.len = 0;
			this.head = null;

			this.append = (ele) => {

				let node = new Node(ele);
				let current;

				if(this.head === null){
					this.head = node;
				}else{
					current = this.head;
					while(current.next){
						current = current.next;
					}

					current.next = node;
				}

				this.len++;
			}


			this.removeAt = (pos) =>{
				if(pos >-1 && pos < this.len){
					let current = this.head, prev, index = 1;

					if(pos === 1){
						head = current.next;
					}else{
						while(index++ < pos){
							prev = current;
							current = current.next;
						}
						prev.next = current.next;
						this.len --;

						return current.data;
					}

				}else{
					return null;
				}
			}

			this.isEqual = (orginal, clone) =>{
				while(orginal !== null && clone !== null){
					if(orginal.data != clone.data){
						return false;
					}
					orginal = orginal.next;
					clone = clone.next;
				}
				return orginal === null && clone === null;
			}

			this.reverseAndClone = () =>{
				let current = this.head;
				let result = null;
				while(current){
					let n = new Node(current.data); //Clone
					n.next = result;
					result = n;
					current = current.next;
				}
				return result;
			}

			this.isPalindrom = () =>{
				let reverse = this.reverseAndClone ();
				if(this.isEqual(this.head, reverse)){
					console.log("Pelindrom");
				}else{
					console.log("Not Pelindrom");
				}
			}

			this.indexOf = (ele) =>{
				let current = this.head, index = 0;

				while(current){
					if(current.data === ele){
						return ++index;
					}
					index++;
					current = current.next;
				}

				return -1;
			}


			this.removeData = (ele) =>{
				let pos = this.indexOf(ele);

				if(pos !== -1){
					this.removeAt(pos);
				}else{
					console.log(`${ele} Not Found`);
				}
			}


			this.deleteDups = () =>{
				let current = this.head;
				while(current){
					let runner = current;
					while(runner.next){
						if(current.data === runner.next.data){
							runner.next = runner.next.next;
						}else{
							runner = runner.next;
						}
					}
					current = current.next;
				}
			}
			this.print = (current = this.head) =>{
				while(current){
					console.log(current.data);
					current = current.next;
				}
			}


		}

		let ll = new linkedlist();


		ll.append(3);
		ll.append(5);
		ll.append(6);

		ll.print();
		console.log("hey");
		ll.isPalindrom();