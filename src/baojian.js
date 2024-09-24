export function baojianOne(money) {
    return money >= 300 ? '至尊服务' : '普通服务';
}
export function baojianTwo(money) {
    return money >= 1000 ? '双人服务' : '单人服务';
}