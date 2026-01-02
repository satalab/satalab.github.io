---
layout: page
title: Domain-Specific Architectures
description:
img: assets/img/DSA.jpg
importance: 1
category:
related_publications: false
---

Domain-specific architectures have become a central research direction for delivering continued performance and efficiency gains in the post–Moore’s law era. The impact of specialization is already evident in industrial-scale deployments, ranging from Google’s TPU to NVIDIA’s Blackwell-class accelerators and dedicated engines for tasks such as neural inference and compression, demonstrating that well-designed specialization can redefine the limits of modern computing systems.

Our lab is advancing this frontier with a strong emphasis on practical, bottleneck-driven specialization. While CPU- and GPU-centric solutions remain effective for many workloads, they often face fundamental constraints: limited exploitable parallelism on general-purpose CPUs and performance losses from control-flow irregularity (e.g., warp divergence) on GPUs. We frequently leverage FPGAs as a research and deployment platform to overcome these limitations, enabling highly customized datapaths and execution models that are difficult to realize on fixed architectures.

We design accelerators through carefully engineered processing elements (PEs), deeply optimized pipelining, and domain-informed microarchitectural choices. However, our key strength is not simply “accelerating kernels,” but systematically identifying and eliminating the true end-to-end bottlenecks of the target domain—across computation, memory, data movement, and interface boundaries. In addition, we explore domain-specific instruction support via RISC‑V overlays, bridging architectural innovation with programmable and extensible execution.

Our research spans a broad range of application domains. We have strong focus areas in neural networks and bioinformatics, while actively expanding into diverse and high-impact workloads including cloud acceleration, data clustering, computational science, and network-interface/IO acceleration. Across these domains, our goal is consistent: to build specialized architectures and system solutions that are not only fast, but also scalable, robust, and deployable.
