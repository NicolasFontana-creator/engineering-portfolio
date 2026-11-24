export interface Project {
  name: string;
  area: string;
  description: string;
  status: string;
  technologies: string[];
  page?: string;
  url?: string;
}

export const projects: Project[] = [
  { name: 'Diseño de red FTTH/GPON', area: 'Fibra óptica', page: 'proyectos/ftth-gpon/', description: 'Diseño académico de una red de acceso óptico, arquitectura de distribución y presupuesto de potencia.', status: 'Diseño académico', technologies: ['GPON', 'FTTH', 'Presupuesto óptico'] },
  { name: 'Radioenlace de microondas', area: 'Radioenlaces', page: 'proyectos/radioenlace-microondas/', description: 'Diseño de un enlace de 5,88 km entre Villa Fontana y Aldea María Luisa: perfil del terreno, zonas de Fresnel y presupuesto RF.', status: 'Diseño académico', technologies: ['RF', 'Ceragon', 'Link budget'] },
  { name: 'Infraestructura IoT LoRaWAN', area: 'Internet de las cosas', page: 'proyectos/infraestructura-iot-lorawan/', description: 'Adquisición y visualización de datos de nodos LoRaWAN mediante herramientas de monitoreo.', status: 'Trabajo académico', technologies: ['LoRaWAN', 'MQTT', 'Node.js', 'Node-RED', 'FlowFuse', 'InfluxDB', 'Grafana'] },
  { name: 'Planificación y Análisis de Cobertura de Redes Celulares', area: 'Redes móviles', description: 'Registro y análisis de parámetros radioeléctricos de cobertura y cambios de celda.', status: 'Trabajo académico', technologies: ['LTE', 'RSRP', 'MATLAB'] },
  { name: 'Gateway LoRa satelital', area: 'Comunicaciones satelitales', description: 'Diseño de una estación receptora para el estudio de comunicaciones LoRa satelitales.', status: 'En desarrollo', technologies: ['LoRa', 'RF', 'ESP32'] },
  { name: 'Sistema de comunicaciones CanSat', area: 'Sistemas inalámbricos', description: 'Diseño del subsistema de telemetría y comunicación entre CanSat y estación terrena.', status: 'Diseño académico', technologies: ['CanSat', 'Telemetría', 'Antenas'] },
  { name: 'Diseño de red empresarial multisede', area: 'Redes IP', page: 'proyectos/red-empresarial/', description: 'Segmentación por VLAN, enrutamiento entre tres sedes y servicios centralizados para Andes S.A. en Cisco Packet Tracer.', status: 'Simulación académica', technologies: ['Cisco Packet Tracer', '802.1Q', 'OSPFv2'] },
];
