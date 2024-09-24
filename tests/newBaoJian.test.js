import NewBaoJian from "../src/newBaoJian.js";
const baojian = new NewBaoJian();
test('测试 大脚足疗 方法', () => {
    baojian.gongzhu(1);
    baojian.anjiao();
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('大脚走进房间为你足疗')
})
test('测试 刘英按摩 方法', () => {
    baojian.gongzhu(2);
    baojian.anmo();
    console.log(baojian.fuwu)
    expect(baojian.fuwu).toEqual('刘英走进房间为你按摩')
})