
     // ***************** Buffer.alloc(size[, fill[, encoding]]) **********************

// 指定了fill 
const alloc = Buffer.alloc(5,"webxiaoma",'utf8');

// 输出 webxi
console.log(alloc.toString())


// 未指定 fill (博客中没有写)
const alloc2 = Buffer.alloc(10);
console.log(alloc2,alloc2.toString())


    
    // ***************** Buffer.allocUnsafe(size) **********************

const allocUnsafe = Buffer.allocUnsafe(10);

// 每次结果都不一样 测试时注销下面allocUnsafe.fill(0)
console.log(allocUnsafe);

// 初始化
allocUnsafe.fill(0);

// 结果：
console.log(allocUnsafe);