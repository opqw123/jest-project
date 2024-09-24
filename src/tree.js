//二叉树的定义
function treeNode(val, left, right) {
    let valNode = (val === undefined ? 0 : val);
    let leftNode = (left === undefined ? null : left);
    let rightNode = (right === undefined ? null : right);
    let obj = {
        valNode, leftNode, rightNode
    }
    return obj;
}

//非递归 二叉树的先序遍历 中左右
//1.创建队列，把根节点入队
//2.把对头出队并访问
//3.把队头的left和right依次入队
//4.重复执行2、3步，直到队列为空
function preorder(root) {
    if (!root) return
    //存放元素
    const res = [];
    // 定义一个栈，用于存储数据
    const stack = [root]
    while (stack.length) {
        //移除最后一个数组元素
        const node = stack.pop()
        res.push(node.val);
        /* 由于栈存在先入后出的特性，所以需要先入右子树才能保证先出左子树 */
        //&&是JavaScript中的一个逻辑运算符，如果左操作数是真数，则返回右操作数，否则返回左操作数。
        node.right && stack.push(node.right)
        node.left && stack.push(node.left)
    }
    return res;
}

//二叉树的中序遍历 左中右 与前序遍历相同，位置换一下
// 先将根节点入栈，找到所有左节点入栈，直到没有左节点为止
// 然后出栈存入结果数组，每出一个，对比该根节点的右子节点是否有左节点，若有则入栈，否则继续出栈
function inorder(root) {
    if (!root) return
    const res = []
    const stack = []
    // 定义一个指针
    let p = root
    // 如果栈中有数据或者p不是null，则继续遍历
    while (stack.length || p) {
        // 如果p存在则一致将p入栈并移动指针
        while (p) {
            // 将 p 入栈，并以移动指针
            stack.push(p)
            p = p.left
        }
        //出栈，存放根节点
        const node = stack.pop()
        res.push(node.val);
        p = node.right
    }
    return res
}

//二叉树的后序遍历 左右中
//按照与前序相似的方法（前序压栈的顺序是先右后左，这里是先左后右），先得到一个结果，然后对结果倒序一下。
function postorder(root) {
    if (!root) return
    const res = [];
    const outputStack = []
    const stack = [root]
    while (stack.length) {
        const node = stack.pop()
        outputStack.push(node)
        // 这里先入left需要保证left后出，在stack中后出，就是在outputStack栈中先出
        node.left && stack.push(node.left)
        node.right && stack.push(node.right)
    }
    while (outputStack.length) {
        const node = outputStack.pop()
        res.push(node.val);
    }
    return res
}
// //进栈（增加节点）
// function push(value) {

// }
// //出栈（删除节点）
// function remove(value) {

// }
export { treeNode, preorder, inorder, postorder }