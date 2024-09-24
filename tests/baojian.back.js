import { baojianOne, baojianTwo } from '../src/baojian.js';
test('保健1-100元', () => {
    expect(baojianOne(300)).toBe('至尊服务');
})
test('保健2-2000元', () => {
    expect(baojianTwo(2000)).toBe('双人服务');
})
//babel -jest yarn test 