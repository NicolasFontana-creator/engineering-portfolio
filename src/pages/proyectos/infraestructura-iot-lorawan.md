---
layout: ../../layouts/ProjectDetail.astro
lang: es
alternatePath: en/projects/lorawan-iot-infrastructure/
repository: https://github.com/NicolasFontana-creator/lorawan-iot-infrastructure
title: Infraestructura IoT LoRaWAN
description: Monitoreo de nueve placas, series temporales y reportes en el Laboratorio de Telecomunicaciones de la UTN FR Paraná.
---

**Nicolás Nahuel Fontana · Laboratorio de Telecomunicaciones, UTN Facultad Regional Paraná.**

Para estudiar la gestión de recursos en ciudades inteligentes, el laboratorio reunió en una plataforma las lecturas de nueve placas, la calidad de señal y la posición de los dispositivos. El operador puede observar una actualización, recuperar el historial y conservar una observación en un reporte.

![Nueve nodos LoRaWAN → Gateway A → TTN → MQTT → Node-RED. Node-RED alimenta FlowFuse, genera reportes PDF y escribe en InfluxDB. Grafana consulta las series y RStudio accede a los datos almacenados.](../../assets/lorawan/arquitectura-es.svg)

Los nueve nodos LoRaWAN del laboratorio se comunican con el Gateway A y están gestionados mediante The Things Network (TTN). Sobre esa infraestructura preexistente, Nicolás Nahuel Fontana desarrolló la plataforma que recibe las lecturas de TTN mediante MQTT, las procesa, las almacena y permite visualizarlas y generar reportes.

## Procesamiento y almacenamiento

Node.js proporciona el entorno de ejecución del backend. Node-RED recibe los eventos MQTT de TTN, escribe las lecturas en InfluxDB y actualiza FlowFuse Dashboard. Una llegada MQTT actualiza la tarjeta del sensor correspondiente; FlowFuse obtiene las estadísticas mediante consultas a InfluxDB cada minuto.

## Dashboards y consultas

FlowFuse muestra la última temperatura por placa y los estados Frío, Normal y Calor. Los indicadores incluyen promedio, extremos y dispersión de temperatura, RSSI en dBm y SNR en dB. El formulario histórico permite elegir placa y período. Grafana consulta las series almacenadas en InfluxDB para visualizar temperatura, ubicación geográfica, RSSI y SNR.

![Nueve tarjetas de temperatura y sus estados](../../assets/lorawan/sensores.webp)

Ilustración 2 · Nueve tarjetas de temperatura y sus estados.

Captura histórica del dashboard. La consulta de ejemplo recupera diez minutos de una placa, mientras que los indicadores de temperatura y radio se actualizan con consultas cada minuto.

## Grafana

Las siguientes capturas provienen del informe. Se retiró el mapa base para conservar la distribución relativa sin exponer los emplazamientos.

![Temperaturas y tendencias en Grafana](../../assets/lorawan/grafana-temperatura.webp)

Ilustración 13 · Temperaturas y tendencias en Grafana.

![Ubicación relativa de las placas; cartografía retirada](../../assets/lorawan/grafana-ubicacion.webp)

Ilustración 14 · Ubicación relativa de las placas; cartografía retirada.

![Paneles de SNR y RSSI en Grafana](../../assets/lorawan/grafana-radio.webp)

Ilustración 15 · Paneles de SNR y RSSI en Grafana.

## Reportes por dispositivo

Desde el dashboard, el operador selecciona dispositivo y aplicación, escribe observaciones y guarda el reporte. La plataforma conserva el PDF en un directorio con el dispositivo y la marca temporal en el nombre.

## Resultados y próximos pasos

El informe confirma la interconexión funcional de las herramientas. Las capturas registran el estado del ensayo. No se publicaron mediciones de latencia, disponibilidad o consumo. El autor confirmó la conexión de RStudio con InfluxDB para acceder a las series almacenadas. El análisis predictivo y el manejo de mayores volúmenes de datos son posibles extensiones. No se documentaron modelos entrenados, predicciones ni validaciones estadísticas.
