import { fetchData, fetchTwoData, fetchThreeData, fetchFourData } from "../src/fetchData.js";

// test('FetchData 方法测试', (done) => {
//     fetchData((data) => {
//         expect(data).toEqual({
//             success: true
//         })
//         done()
//     })
// })
// test('FetchTwoData 测试', () => {
//     return fetchTwoData().then((response) => {
//         expect(response.data).toEqual({
//             success: true
//         })
//     })
// })
test('FetchThreeData 测试', () => {
    expect.assertions(1) //断言，必须执行一次expect
    return fetchThreeData().catch((e) => {
        // console.log(e.toString())
        expect(e.toString().indexOf('404') > -1).toBe(true)
    })
})
test('FetchFourData 测试', async () => {
    const response = await fetchFourData();
    expect(response.data).toEqual({
        success: true
    })
})