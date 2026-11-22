export interface Project {
  name: string;
  area: string;
  description: string;
  status: string;
  technologies: string[];
  url?: string;
}

export const projects: Project[] = [
  { name: 'Diseño de red FTTH/GPON', area: 'Fibra óptica', description: 'Diseño académico de una red de acceso óptico, arquitectura de distribución y presupuesto de potencia.', status: 'Diseño académico', technologies: ['GPON', 'FTTH', 'Presupuesto óptico'] },
  { name: 'Radioenlace de microondas', area: 'Radioenlaces', description: 'Evaluación de un enlace punto a punto utilizando equipos Ceragon IP-20N y márgenes de desvanecimiento.', status: 'Diseño académico', technologies: ['RF', 'Ceragon', 'Link budget'] },
  { name: 'Infraestructura IoT LoRaWAN', area: 'Internet de las cosas', description: 'Adquisición y visualización de datos de nodos LoRaWAN mediante herramientas de monitoreo.', status: 'Trabajo académico', technologies: ['LoRaWAN', 'Node-RED', 'Grafana'] },
  { name: 'Campaña de mediciones LTE', area: 'Redes móviles', description: 'Registro y análisis de parámetros radioeléctricos de cobertura y cambios de celda.', status: 'Trabajo académico', technologies: ['LTE', 'RSRP', 'MATLAB'] },
  { name: 'Gateway LoRa satelital', area: 'Comunicaciones satelitales', description: 'Diseño de una estación receptora para el estudio de comunicaciones LoRa satelitales.', status: 'En desarrollo', technologies: ['LoRa', 'RF', 'ESP32'] },
  { name: 'Sistema de comunicaciones CanSat', area: 'Sistemas inalámbricos', description: 'Diseño del subsistema de telemetría y comunicación entre CanSat y estación terrena.', status: 'Diseño académico', technologies: ['CanSat', 'Telemetría', 'Antenas'] },
];
