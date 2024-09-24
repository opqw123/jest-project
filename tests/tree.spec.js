import { treeNode, preorder, inorder, postorder } from '../src/tree.js'
describe('二叉树定义', () => {
    let val, left, right
    beforeEach(() => {
        val = 'A';
        left = 'B';
        right = 'C';
    })
    test('根节点未定义测试', () => {
        val = undefined
        expect(treeNode(val, left, right).valNode).toEqual(0)
    })
    test('根节点有值测试', () => {
        expect(treeNode(val, left, right).valNode).toBe(val)
    })
    test('左节点未定义测试', () => {
        left = undefined
        expect(treeNode(val, left, right).leftNode).toBeNull()
    })
    test('左节点有值测试', () => {
        expect(treeNode(val, left, right).leftNode).toMatch(left)
    })
    test('右节点未定义测试', () => {
        right = undefined
        expect(treeNode(val, left, right).rightNode).toBeNull()
    })
    test('右节点节点有值测试', () => {
        expect(treeNode(val, left, right).rightNode).toMatch(right)
    })
})
describe('二叉树遍历测试', () => {
    let bt
    beforeEach(() => {
        bt = {
            val: 'A',
            left: {
                val: 'B',
                left: { val: 'D', left: null, right: null },
                right: { val: 'E', left: null, right: null },
            },
            right: {
                val: 'C',
                left: {
                    val: 'F',
                    left: { val: 'H', left: null, right: null },
                    right: { val: 'I', left: null, right: null },
                },
                right: { val: 'G', left: null, right: null },
            },

        }
    })
    it('先序遍历树有标准数据测试', () => {
        let arr = [
            'A', 'B', 'D',
            'E', 'C', 'F',
            'H', 'I', 'G'
        ]
        expect(preorder(bt)).toEqual(arr)
    })
    it('先序遍历树数据为空测试', () => {
        //直接return 返回underfined
        bt = null;
        expect(preorder(bt)).toBeUndefined()
    })
    it('中序遍历树有标准数据测试', () => {
        let arr = [
            'D', 'B', 'E',
            'A', 'H', 'F',
            'I', 'C', 'G'
        ]
        expect(inorder(bt)).toEqual(arr)
    })
    it('中序遍历树数据为空测试', () => {
        bt = null;
        expect(inorder(bt)).toBeUndefined()
    })
    it('后序遍历树有标准数据测试', () => {
        let arr = [
            'D', 'E', 'B',
            'H', 'I', 'F',
            'G', 'C', 'A'
        ]
        expect(postorder(bt)).toEqual(arr)
    })
    it('后序遍历树数据为空测试', () => {
        bt = null
        expect(postorder(bt)).toBeUndefined()
    })
})