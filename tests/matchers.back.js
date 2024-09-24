// test('toBe匹配器', () => {
//     const a = { num: '007技师' };
//     //toBe 相当于全等===绝对匹配相同
//     expect(a).toBe({ num: '007技师' })
// })
// test('toEqual匹配器', () => {
//     const a = { num: '007技师' };
//     //toEqual 相当于==内容匹配相等
//     expect(a).toEqual({ num: '007技师' })
// })
// test('toBeNull匹配器', () => {
//     const a = null;
//     //toBeNull 相当于只匹配null
//     expect(a).toBeNull()
// })
// test('toBeUndefined匹配器', () => {
//     const a = undefined;
//     //toBeUndefined 相当于只匹配undefined
//     expect(a).toBeUndefined()
// })
// test('toBeDefined匹配器', () => {
//     const a = 1;
//     //toBeDefined 相当于匹配定义过的值
//     expect(a).toBeDefined()
// })
// test('toBeTruthy匹配器', () => {
//     const a = 100;
//     //toBeTruthy 相当于匹配真值
//     expect(a).toBeTruthy()
// })
// test('toBeFalsy匹配器', () => {
//     const a = 0;
//     //toBeTruthy 相当于匹配假值
//     expect(a).toBeFalsy()
// })
// test('toBeGreaterThan匹配器', () => {
//     const a = 10;
//     //toBeGreaterThan 相当于匹配>大于号
//     expect(a).toBeGreaterThan(9)
// })
// test('toBeLessThan匹配器', () => {
//     const a = 10;
//     //toBeLessThan 相当于匹配<小于号
//     expect(a).toBeLessThan(11)
// })
// test('toBeGreaterThanOrEqual匹配器', () => {
//     const a = 10;
//     //toBeGreaterThanOrEqual 相当于匹配>=大于等于号
//     expect(a).toBeGreaterThanOrEqual(10)
// })
// test('toBeLessThanOrEqual匹配器', () => {
//     const a = 10;
//     //toBeLessThanOrEqual 相当于匹配<=小于等于号
//     expect(a).toBeLessThanOrEqual(11)
// })
// test('toBeCloseTo匹配器', () => {
//     const one = 0.1;
//     const two = 0.2;
//     //toBeCloseTo 相当于匹配浮点数
//     expect(one + two).toBeCloseTo(0.3)
// })
// test('toMatch匹配器', () => {
//     const str = '张三，李四，王二麻子'
//     //toMatch 相当于includes匹配字符串
//     expect(str).toMatch('李四')
// })
// test('toContain匹配器', () => {
//     const arr = ['张三', '李四', '王二麻子'];
//     //toContain 相当于匹配数组
//     expect(arr).toContain('王二麻子')
// })
// test('toContain匹配器', () => {
//     const arr = ['张三', '李四', '王二麻子'];
//     const data = new Set(arr);
//     //toContain 相当于匹配数组
//     expect(data).toContain('王二麻子')
// })
// const throwNewErrorFunc = () => {
//     throw new Error('this is Error')
// }
// test('toThrow匹配器', () => {
//     //toThrow 相当于匹配抛出异常
//     expect(throwNewErrorFunc).toThrow('this is Error')
// })
const throwNewNotErrorFunc = () => {
    // throw new Error('this is Error')
}
test('toThrow匹配器', () => {
    //toThrow 相当于匹配抛出异常 加上not相当于不抛出异常
    expect(throwNewNotErrorFunc).not.toThrow()
})