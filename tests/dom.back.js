import { addDivToBody } from "../src/dom";
test('测试 addDivToBody', () => {
    addDivToBody();
    addDivToBody();
    expect(document.body.querySelectorAll('div').length).toBe(2)
})