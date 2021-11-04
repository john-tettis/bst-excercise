class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration.
   * 
   * start at root
   * if node = val => return tree
   * if greater=> current=left
   * else => current = right
   * if null prev.
   *  */

  insert(val) {
    const node = new Node(val)
    if(this.root===null) {
      this.root=node;
      return this;
    }
      let current=this.root;
      let prev=null;
      let inserted=false;
    
    while(!inserted){
      if(current===null){
        val > prev.val ? prev.right=node:prev.left=node;
        inserted=true;
      }
      else if(val> current.val){
        prev =current;
        current=current.right;
      }
      else if(val < current.val){
        prev =current;
        current = current.left;
      }
      else{
        return this;
      }
    }
    return this;

  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val,node) {
    const iNode = node ? node:new Node(val);
    if(this.root===null){
      this.root= iNode;
      return this;
    }

    function recurse(node=this.root, prev){
      if(node===null){
        val > prev.val ? prev.right=iNode:prev.left=iNode;
        return true
      }
      else if(node.val > val){
        return recurse(node.left,node)
      }
      else if(node.val < val){
        return recurse(node.right,node)
      }
      else{
        return true
      }
    }
    recurse.call(this);
      return this;
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let current=this.root;
    let found;

    while(current!=null && !found){
      if(current.val===val){
        found = current
      }
      else if(current.val>val){
        current=current.left;
      }
      else{
        current=current.right;
      }
    }
    return found
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val) {
    function recurse(node=this.root){
      if(node===null || node.val===val){
        return node
      }
      else if(node.val > val){
        return recurse(node.left)
      }
      else if(node.val < val){
        return recurse(node.right)
      }
    }
    let res = recurse.call(this);
    return res===null ? undefined:res;


  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    function dfsHelper(node){
      if(node===null){ 
        return []
      }
      else{
        return [node.val,...dfsHelper(node.left),...dfsHelper(node.right)]
      }
    }
    return dfsHelper(this.root)
      
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

   dfsInOrder() {
    function dfsHelper(node){
      if(node===null){ 
        return []
      }
      else{
        return [...dfsHelper(node.left),node.val,...dfsHelper(node.right)]
      }
    }
    return dfsHelper(this.root)
      
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    function dfsHelper(node){
      if(node===null){ 
        return []
      }
      else{
        return [...dfsHelper(node.left),...dfsHelper(node.right),node.val]
      }
    }
    return dfsHelper(this.root)
      
  }
  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes.
   * 
   * 
   * 
   * 
   *  */

  bfs() {
    if(this.root===null){
      return null;
    }
    let q=[this.root];
    let index=0;
    while(index<q.length){
      let current = q[index];
      current.left ? q.push(current.left): null;
      current.right ? q.push(current.right): null;
      index++;
    }
    return q.map(el=>el.val);
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. 
   * */

  remove(val) {
    if(this.root===null){
      return undefined;
    }
    
    let children=[];
    function recurse(node, prev){
      if(node===null){
        return 
      }
      if(node.val===val){
        children = [node.right,node.left]
        prev.val>val ? prev.left=null:prev.right=null;
      }
      
      else if(node.val > val){
        return recurse(node.left,node)
      }
      else if(node.val < val){
        return recurse(node.right,node)
      }
      
    }
    recurse(this.root);
    children.forEach(child=> child? this.insertRecursively(child.val,child):null)
  }
  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {
    
  }
}
let binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);
  binarySearchTree.remove(10)
module.exports = BinarySearchTree;
