---
layout: post
title: SATA Lab released blueVitis, a boilerplate codebase for AMD FPGA kernel development using Bluespec SystemVerilog!
date: 2026-05-07 00:00:00
description:
tags: open-source
categories: 
---

We're excited to share, blueVitis, an advanced and high-performance boilerplate codebase for AMD FPGA kernel development using Bluespec SystemVerilog! 

It provides a research-ready starting point for building custom FPGA accelerators, combining BSV-based hardware design, host-side C++ control, and an automated Vitis build flow into a clean and extensible framework.

With its one-touch Makefile system, blueVitis automates the path from BSV-to-Verilog compilation to Vivado IP packaging, Vitis .xclbin linking, and host C++ compilation, helping researchers focus on architectural ideas rather than repetitive integration work. 

The current environment targets Ubuntu 24.04, AMD Vitis 2025.02, XRT, and BSC, and the repository includes multiple working examples using HBM-connected, direct host-connected, and PLRAM-connected, tested on Alveo U50.

If you’re building AMD FPGA applications in BSV and want a reusable development environment instead of wiring the full workflow from scratch, we’d love for you to check out blueVitis and share feedback!

Please check and explore our blueVitis here, [`blueVitis`](https://github.com/SeMinLim/bluevitis) 😄
