---
layout: page
permalink: /research/research_3/
title: Disaggregated Systems
description:
img: assets/img/DISAGGREGATED.jpg
redirect:
importance: 3
category:
---

Disaggregated systems are motivated by a fundamental mismatch between how modern workloads consume resources and how data-center hardware is provisioned. In conventional server-centric deployments, compute, memory, storage, and accelerators are bundled and allocated as a fixed unit. This “bundle-by-default” model leads to chronic resource fragmentation (some components are underutilized while others become bottlenecks) and makes it difficult to elastically match heterogeneous workload demands, especially when accelerators are involved. In practice, accelerator performance is often constrained not by raw compute alone, but by memory capacity/bandwidth availability, interconnect limits, and system-level data movement, which become increasingly dominant at scale.

Grounded in the insights of our <a href="https://doi.org/10.23919/DATE58400.2024.10546641">FlexForge</a> line of work, we pursue disaggregation as a system architectural strategy rather than a purely infrastructural concept. Our core contribution is to treat key “attached” resources, e.g., memory and bandwidth associated with accelerator deployments, as composable, shareable pools, enabling the system to provision the right mix of resources per workload instead of allocating a monolithic accelerator bundle. We emphasize end-to-end bottleneck elimination: hardware and runtime mechanisms co-designed to reduce over-provisioning, avoid preventable interconnect contention, and maintain predictable performance under multi-tenant operation. Critically, we also consider disaggregation as a security-sensitive setting and incorporate isolation-oriented design principles so that pooling can be practical in real deployments.

Looking forward, we aim to expand disaggregation from “resource pooling” into performance- and policy-guaranteed composition at rack and cluster scale. Key directions include: (i) QoS-aware orchestration that jointly optimizes placement, routing, and contention across pooled resources; (ii) tighter integration with emerging fabrics and memory-centric interconnects to reduce the overhead of remote access; (iii) automated, workload-driven composition that profiles bottlenecks and synthesizes the best resource graph dynamically; and (iv) stronger trust primitives (e.g., attestation and robust isolation) to make disaggregated acceleration viable under strict multi-tenant constraints. Our long-term goal is a disaggregated platform where specialized acceleration remains “local-feeling” to applications—while the infrastructure remains fully elastic, efficient, and secure.
