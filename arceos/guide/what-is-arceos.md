# What is `ArceOS`?

An experimental modular operating system (or unikernel) written in Rust.

ArceOS was inspired a lot by [Unikraft](https://github.com/unikraft/unikraft).

🚧 Working In Progress.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Installing](https://dora-rs.ai/docs/guides/Installation/installing).

</div>

## Features & TODOs

* [x] Architecture: x86_64, riscv64, aarch64
* [x] Platform: QEMU pc-q35 (x86_64), virt (riscv64/aarch64)
* [x] Multi-thread
* [x] FIFO/RR/CFS scheduler
* [x] VirtIO net/blk/gpu drivers
* [x] TCP/UDP net stack using [smoltcp](https://github.com/smoltcp-rs/smoltcp)
* [x] Synchronization/Mutex
* [x] SMP scheduling with single run queue
* [x] File system
* [ ] Compatible with Linux apps
* [ ] Interrupt driven device I/O
* [ ] Async I/O

## Design

![ArceOS.svg](/ArceOS.svg)