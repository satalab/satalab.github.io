---
layout: page
title: Heterogeneous Computing Platform
description: 
img: assets/img/HETEROGENEOUS.jpg
importance: 2
category: 
---

Standalone hardware accelerators can break performance plateaus through fine-grained, application-tailored circuit design. However, in real deployments, a standalone accelerator cannot be assumed to deliver the best end-to-end performance, largely due to inherent resource constraints, most notably limited on-device memory capacity and restricted memory bandwidth relative to the scale of modern datasets.

To support real-world applications that routinely process hundreds of gigabytes to terabytes of data, accelerators must collaborate with the host CPU to access larger memory and storage hierarchies. In practice, this collaboration is typically mediated through PCIe-class interconnects, which introduces an additional and often dominant bottleneck: host–device communication bandwidth and latency. As a result, many accelerator designs that excel in isolated microbenchmarks fail to translate into consistent system-level gains when integrated into full data path.

Our lab addresses these challenges with a system-first approach to specialization. We design domain-specific CPU–FPGA heterogeneous systems that jointly optimize computation and data movement across the entire stack, from accelerator microarchitecture to memory hierarchy, interconnect, runtime coordination, and I/O. Our goal is not merely to offload kernels, but to develop novel system architectural solutions that remove the true limiting factors in heterogeneous execution, thereby achieving state-of-the-art performance and energy efficiency on realistic, large-scale workloads.
