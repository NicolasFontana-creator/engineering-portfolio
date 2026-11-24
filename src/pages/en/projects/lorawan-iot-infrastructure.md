---
layout: ../../../layouts/ProjectDetail.astro
lang: en
alternatePath: proyectos/infraestructura-iot-lorawan/
repository: https://github.com/NicolasFontana-creator/lorawan-iot-infrastructure
title: LoRaWAN IoT Infrastructure
description: Nine-board monitoring, time series and reporting at the UTN FR Paraná Telecommunications Laboratory.
---

**Nicolás Nahuel Fontana · Telecommunications Laboratory, UTN Facultad Regional Paraná.**

To study resource management in smart cities, the laboratory brought readings from nine boards, signal quality and device locations into one platform. An operator can inspect an update, retrieve earlier samples and preserve an observation in a report.

![Nine LoRaWAN nodes → Gateway A → TTN → MQTT → Node-RED. Node-RED updates FlowFuse, generates PDF reports and writes to InfluxDB. Grafana queries the time series and RStudio accesses stored data.](../../../assets/lorawan/architecture-en.svg)

The laboratory’s nine LoRaWAN nodes communicate with Gateway A and are managed through The Things Network (TTN). Nicolás Nahuel Fontana developed the software platform that receives readings from TTN over MQTT, processes and stores them, and supports visualization and reporting.

## Processing and storage

Node.js provides the backend runtime. Node-RED receives MQTT events from TTN, writes readings to InfluxDB and updates FlowFuse Dashboard. An incoming event updates the corresponding sensor card. Independently, the dashboard queries InfluxDB once a minute for statistics.

## Dashboards and queries

FlowFuse shows the latest temperature per board and the Cold, Normal and Hot states. Indicators include mean, extremes and spread of temperature, RSSI in dBm and SNR in dB. Operators select a board and time range for historical queries. Grafana queries data stored in InfluxDB to display temperature, geographic location, RSSI and SNR.

![Nine temperature cards with their recorded states](../../../assets/lorawan/sensores.webp)

Figure 2 · Nine temperature cards with their recorded states.

Historical dashboard capture. The example retrieves ten minutes of readings from one board, whereas the temperature and radio indicators query the database once a minute.

## Grafana

These screenshots come from the report. The basemap was removed to show relative positions while protecting site locations.

![Temperature and trends in Grafana](../../../assets/lorawan/grafana-temperatura.webp)

Figure 13 · Temperature and trends in Grafana.

![Relative device positions; basemap removed](../../../assets/lorawan/grafana-ubicacion.webp)

Figure 14 · Relative device positions; basemap removed.

![SNR and RSSI panels in Grafana](../../../assets/lorawan/grafana-radio.webp)

Figure 15 · SNR and RSSI panels in Grafana.

## Device reports

From the dashboard, the operator selects a device and application, enters observations and saves the report. The platform keeps the PDF in a directory, with the device and timestamp in its filename.

## Results and future work

The report confirms functional integration of the software tools. Screenshots record the state of the trial. No latency, availability or energy measurements were reported. The author confirmed that RStudio connects to InfluxDB to access stored time series. Predictive analysis and support for larger data volumes are possible extensions. No trained models, predictions or statistical validations have been documented.
