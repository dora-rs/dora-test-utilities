# `ArceOS` 是什么?

用 `Rust` 编写的实验性模块化的（`unikernel`）操作系统。

ArceOS 受到 [Unikraft](https://github.com/unikraft/unikraft) 的启发

🚧 工作在进行中。

<div class="tip custom-block" style="padding-top: 8px">

想尝试一下？跳到 [快速上手](https://dora-rs.ai/zh-CN/docs/guides/Installation/installing/).

</div>

## Features & TODOs

* [x] 架构：x86_64，riscv64，aarch64
* [x] 平台：QEMU pc-q35（x86_64），virt（riscv64/aarch64）
* [x] 多线程
* [x] FIFO/RR/CFS 调度器
* [x] VirtIO 网卡/块设备/GPU 驱动
* [x] 使用 [smoltcp](https://github.com/smoltcp-rs/smoltcp) 的 TCP/UDP 网络栈
* [x] 同步/互斥
* [x] 具有单运行队列的 SMP 调度
* [x] 文件系统
* [ ] 兼容 Linux 应用程序
* [ ] 中断驱动的设备 I/O
* [ ] 异步 I/O

## Design

![ArceOS.svg](/ArceOS.svg)