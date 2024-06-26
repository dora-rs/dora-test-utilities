# `Dora` 是什么?

`DORA`（`Dataflow-Oriented Robotic Application` 面向数据流的机器人应用程序）是一种中间件，旨在简化基于 `AI` 的机器人应用程序的创建。它提供低延迟、可组合和分布式数据流功能。应用程序被建模为有向图，也称为管道。

`dora-rs` 已经可以显示出令人印象深刻的性能！这是使用我们自己的共享内存服务器和`Apache Arrow` 实现零复制(`zero-copy`)的结果！

这些性能改进对于初学者、`AI` 从业者和业余爱好者来说意义重大，他们因该领域缺乏对 `Python` 的支持而受到限制！

而这只是我们可以为 `dora-rs` 展示的众多创新功能中的一个例子！

<div class="tip custom-block" style="padding-top: 8px">

想尝试一下？跳到 [安装 `Dora`](https://dora-rs.ai/zh-CN/docs/guides/Installation/installing/).

</div>


## ⭐ 零开销

在共享内存上传输零拷贝的消息！我们使用 Arrow 和我们自己的共享内存守护程序在一台机器上进行光速通信。

## 🤯 可伸缩

专为跨机器和机器人扩展而构建！我们使用 YAML 描述来使我们的软件具有声明性，以便可在多台机器上分发。

## 👨‍🏭 快速原型化

使用 YAML 数据流中现成的节点和操作符，这样就无需费心复制粘贴样板代码。您还可以使用 Python 进行实时修补！

## 🔭 观察能力

通过我们的cli工具和opentelemetry获得日志、跟踪和指标！

## 💻 支持大型矩阵

在最多的平台和架构上，dora 支持 Python、Rust、C 和 C++ ！

## 🧑‍🤝‍🧑 社区

我们希望 dora 做成一个社区驱动项目并且帮助 更多人学习机器人。

