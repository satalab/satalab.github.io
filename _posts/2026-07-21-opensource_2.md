---
layout: post
title: SATA Lab released blueYosys, a boilerplate codebase for embedded FPGA kernel development via YosysHQ & BSV!
date: 2026-07-21 00:00:00
description:
tags: open-source
categories: 
---

After releasing `blueVitis`, I’m excited to share our second open-source FPGA development project: `blueYosys`.

`blueYosys` is an Advanced, High-Performance Boilerplate Codebase for Lattice ECP5-Based Embedded FPGA Kernel Development using the Yosys Open-Source Toolchain and Bluespec SystemVerilog (BSV).

It provides a transparent end-to-end development flow: Bluespec Compiler → Yosys → nextpnr → ecppack

With `blueYosys`, users can develop BSV hardware kernels, run Bluesim simulations, generate synthesizable Verilog, perform synthesis and place-and-route, create FPGA bitstreams, program the board, and inspect timing and resource-utilization reports through a consistent Makefile-based workflow.

Our goal is to help students, researchers, and FPGA developers spend less time rebuilding board and toolchain infrastructure and more time exploring hardware architecture, data movement, pipelining, parallelism, timing, and resource trade-offs.

If you’re building embedded FPGA applications in BSV and want a reusable development environment instead of wiring the full workflow from scratch, we’d love for you to check out `blueYosys` and share feedback!

Please check and explore our blueYosys here, [`blueYosys`](https://github.com/SeMinLim/blueyosys) 😄
