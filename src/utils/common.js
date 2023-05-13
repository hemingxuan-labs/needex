import { ElMessage } from 'element-plus'
// 结构请求参数
export const objToUrl = (obj) => {
    const tempArray = []
    for (const item in obj) {
        if (item) {
            tempArray.push(`${item}=${obj[item]}`)
        }
    }
    return `?${tempArray.join('&')}`
}
// 获取某一个参数值
export function getQueryString(name) {
    var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
    var r = window.location.search.substr(1).match(reg)
    if (r != null) {
        return unescape(r[2])
    }
    return null
}
// 复制方法
export const copyMethod = (texts) => {
    var oInput = document.createElement('input') //创建一个input
    oInput.setAttribute('readonly', 'readonly') //设置只读，否则移动端使用复制功能时可能会造成软件盘弹出
    oInput.value = texts
    document.body.appendChild(oInput) //将input插入到body
    oInput.select() // 选择对象
    document.execCommand('Copy') // 执行浏览器复制命令
    oInput.style.display = 'none' // 将input隐藏
    oInput.remove() // 将input销毁
    ElMessage('Successfully copied')
}

/**
 * 加法 用来得到精确的加法结果
 * @param number
 * @returns number
 */
function accuracyAdd(num1 = 0, num2 = 0) {
    let r1 // num1的小数部分长度
    let r2 // num2的小数部分长度
    try {
        r1 = num1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = num2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    // 要放大的倍数
    const commonMultiple = Math.pow(10, Math.max(r1, r2))
    // 把num1, num2 放大commonMultiple倍
    const maxMultiple = Math.max(r1, r2)
    const tempNum1 = Number(num1.toString().replace('.', '') + '0'.repeat(maxMultiple - r1))
    const tempNum2 = Number(num2.toString().replace('.', '') + '0'.repeat(maxMultiple - r2))

    // 整数之间的除法没有问题
    return (tempNum1 + tempNum2) / commonMultiple
}

/**
 * 减法 用来得到精确的减法结果
 * 返回值：arg1减去arg2的精确结果
 */
function accSubtr(arg1, arg2) {
    var r1, r2, m, n
    try {
        r1 = arg1.toString().split('.')[1].length
    } catch (e) {
        r1 = 0
    }
    try {
        r2 = arg2.toString().split('.')[1].length
    } catch (e) {
        r2 = 0
    }
    m = Math.pow(10, Math.max(r1, r2))
    //动态控制精度长度
    n = r1 >= r2 ? r1 : r2
    return ((arg1 * m - arg2 * m) / m).toFixed(n)
}
//给Number类型增加一个subtr 方法，调用起来更加方便。
Number.prototype.subtr = function (arg) {
    return accSubtr(arg, this)
}

/**
 * 乘法 用来得到精确的乘法结果
 * @param number
 * @returns number
 */
function accuracySub(arg1 = 0, arg2 = 0) {
    // arg1、arg2小数部分长度和
    let m = 0
    const s1 = arg1.toString()
    const s2 = arg2.toString()

    try {
        m += s1.split('.')[1].length
    } catch (e) {
        console.log(e)
    }
    try {
        m += s2.split('.')[1].length
    } catch (e) {
        console.log(e)
    }
    return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m)
}

/**
 * 除法 用来得到精确的除法结果
 * 返回值：arg1除以arg2的精确结果
 */
export function accDiv(arg1, arg2) {
    var t1 = 0,
        t2 = 0,
        r1,
        r2
    try {
        t1 = arg1.toString().split('.')[1].length
    } catch (e) {}
    try {
        t2 = arg2.toString().split('.')[1].length
    } catch (e) {}
    // with (Math) {
    r1 = Number(arg1.toString().replace('.', ''))
    r2 = Number(arg2.toString().replace('.', ''))
    return (r1 / r2) * pow(10, t2 - t1)
    // }
}
//给Number类型增加一个div方法，调用起来更加方便。
export const addNumberPrototype = () => {
    Number.prototype.div = function (arg) {
        return accDiv(this, arg)
    }
}
