
// 创建一个长度为 10、且用 0 填充的 Buffer。
const buffer1 = Buffer.alloc(10);

// 创建一个长度为 10、且未初始化的 Buffer。
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buffer2 = Buffer.allocUnsafe(10);

// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
const buffer3 = Buffer.from([1,2,3]);

// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buffer4 = Buffer.from('webxiaoma','latin1');


