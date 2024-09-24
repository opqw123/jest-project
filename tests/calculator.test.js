import { appendToDisplay, clearDisplay, operate, calculate } from '../src/calculator'

//describe用例分类
describe('操作', () => {
    it('数字是否添加到显示屏上测试', () => {
        const value = '1';
        expect(appendToDisplay(value)).toEqual('1')
    })
    it('小数点是否添加到显示屏上测试', () => {
        const value = '.'
        expect(appendToDisplay(value)).toBe('1.')
    })
    it('清空显示屏测试', () => {
        expect(clearDisplay()).toBe('0')
    })
    it('当前无操作符测试', () => {
        const operator = '+'
        expect(operate(operator)).toBe('+')
    })
    it('当前已有操作符测试', () => {
        const operator = '*'
        expect(operate(operator)).toBe('*')
    })
    //清空显示屏
    afterAll(() => {
        clearDisplay();
    })
})
describe('数值计算', () => {
    test('无操作符计算', () => {
        expect(calculate()).toEqual('0');
    })
    test('加号计算测试', () => {
        appendToDisplay('2.');
        appendToDisplay('1');
        operate('+')
        appendToDisplay('1');
        expect(calculate()).toEqual('3.1')
    })
    test('减号计算测试', () => {
        operate('-')
        appendToDisplay('0.1');
        expect(calculate()).toBe('3');
    })
    test('乘号计算测试', () => {
        operate('*')
        appendToDisplay('10');
        expect(calculate()).toBe('30');
    })
    test('除号计算测试', () => {
        operate('/')
        appendToDisplay('5');
        expect(calculate()).toMatch('6');
    })
    test('其他符号计算测试', () => {
        operate('=')
        expect(calculate()).toBeUndefined();
    })
    test('当前未记录操作符测试', () => {
        let operator = null
        operate(operator)
        expect(calculate()).toBeUndefined();
    })
    test('当前未记录第一操作数测试', () => {
        appendToDisplay(null)
        expect(calculate()).toBeUndefined();
    })
    test('当前第一操作数为空测试', () => {
        appendToDisplay('')
        expect(calculate()).toBeUndefined();
    })

})


