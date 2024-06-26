# What is DORA?

DORA (Dataflow-Oriented Robotic Application) is middleware designed to streamline and simplify the creation of AI-based robotic applications. It offers low latency, composable, and distributed dataflow capabilities. Applications are modeled as directed graphs, also referred to as pipelines.

<div class="tip custom-block" style="padding-top: 8px">

Just want to try it out? Skip to the [Installing](https://dora-rs.ai/docs/guides/Installation/installing).

</div>

## ⭐ Zero Overhead

Transfer message with zero copy on shared memory! We use Arrow and our own shared memory daemon to make lightspeed communication on a single machine.

## 🤯 Scalable

Built to scale across machines and robots! We use YAML description to make our software declarative in order to be distributable on multiple machines.

## 👨‍🏭 Fast Prototyping

Use readily available nodes and operators from your YAML dataflow, so that you don't need to bother copy-pasting boilerplate code. You can also tinker live using Python!

## 🔭 Observable

Get logs, traces and metrics through our cli and opentelemetry!

## 💻 Large Support Matrix

dora is available in Python, Rust, C and C++ on most platforms and architecture!

## 🧑‍🤝‍🧑 Community

We hope to make dora a community-driven project and help other learn about robotics.