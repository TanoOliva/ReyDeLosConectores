import type { Product } from '../types/product'

// Datos mock iniciales con enfoque técnico para validación visual y funcional.
export const products: Product[] = [
  {
    id: 'con-xt60-pro',
    name: 'Conector XT60 Alta Corriente',
    sku: 'XT60-100A-AMASS',
    price: 3.95,
    images: ['https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&auto=format&fit=crop'],
    stock: 340,
    description: 'Conector polarizado para líneas DC de alta corriente con carcasa en nylon resistente a temperatura.',
    specifications: [
      { label: 'Corriente nominal', value: '60A continua / 100A pico' },
      { label: 'Rango AWG', value: '12-14 AWG' },
      { label: 'Material de contacto', value: 'Latón chapado en oro' },
    ],
    compatibility: ['Baterías LiPo', 'Drones', 'Sistemas de energía portátil'],
    brand: 'Amass',
    category: 'Energía',
    connectorType: 'Power'
  },
  {
    id: 'm12-a-code-4p',
    name: 'Conector M12 A-Code 4 Pines',
    sku: 'M12-A4P-IP67-PHX',
    price: 12.5,
    images: ['https://images.unsplash.com/photo-1581092160607-ee22731f1f7f?w=1200&auto=format&fit=crop'],
    stock: 120,
    description: 'Conector industrial roscado para señal y alimentación en entornos con vibración y humedad.',
    specifications: [
      { label: 'Grado IP', value: 'IP67' },
      { label: 'Pines', value: '4' },
      { label: 'Voltaje nominal', value: '250V AC/DC' },
    ],
    compatibility: ['Sensores industriales', 'PLC', 'Automatización de planta'],
    brand: 'Phoenix Contact',
    category: 'Industrial',
    connectorType: 'Circular'
  },
  {
    id: 'obd2-16p',
    name: 'Conector OBD-II 16 Pines',
    sku: 'OBD2-16P-AUTO',
    price: 7.8,
    images: ['https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?w=1200&auto=format&fit=crop'],
    stock: 88,
    description: 'Interfaz estándar de diagnóstico vehicular para lectura de ECU y telemetría automotriz.',
    specifications: [
      { label: 'Norma', value: 'SAE J1962' },
      { label: 'Pines', value: '16' },
      { label: 'Material', value: 'ABS + terminales niquelados' },
    ],
    compatibility: ['Escáner OBD2', 'Telemetría CAN', 'Diagnóstico automotriz'],
    brand: 'Molex',
    category: 'Automotriz',
    connectorType: 'Diagnóstico'
  },
  {
    id: 'usb-c-panel',
    name: 'USB-C Panel Mount 24P',
    sku: 'USBC-PM-24P-3A',
    price: 5.4,
    images: ['https://images.unsplash.com/photo-1580894894513-541e068a3e2b?w=1200&auto=format&fit=crop'],
    stock: 260,
    description: 'Conector USB-C de montaje en panel para integración en gabinetes y equipos de laboratorio.',
    specifications: [
      { label: 'Protocolo', value: 'USB 3.2 Gen 1' },
      { label: 'Corriente', value: '3A' },
      { label: 'Montaje', value: 'Panel frontal con tornillos' },
    ],
    compatibility: ['Instrumentación', 'Computación embebida', 'Prototipos de hardware'],
    brand: 'TE Connectivity',
    category: 'Computación',
    connectorType: 'USB'
  },
  {
    id: 'xlr-3p-neutrik',
    name: 'XLR 3 Pines Hembra Chasis',
    sku: 'XLR3F-NC3FD-LX',
    price: 6.2,
    images: ['https://images.unsplash.com/photo-1516280440614-37939bbacd81?w=1200&auto=format&fit=crop'],
    stock: 190,
    description: 'Conector XLR profesional para audio balanceado con excelente blindaje electromagnético.',
    specifications: [
      { label: 'Configuración', value: '3 pines' },
      { label: 'Impedancia de contacto', value: '< 3 mΩ' },
      { label: 'Vida útil', value: '> 1000 ciclos' },
    ],
    compatibility: ['Consolas', 'Micrófonos', 'Interfaces de audio'],
    brand: 'Neutrik',
    category: 'Audio',
    connectorType: 'XLR'
  },
  {
    id: 'jst-ph-2',
    name: 'JST-PH 2 Pines Cable a Placa',
    sku: 'JST-PH-2P-20CM',
    price: 1.25,
    images: ['https://images.unsplash.com/photo-1550009158-9ebf69173e03?w=1200&auto=format&fit=crop'],
    stock: 0,
    description: 'Conector compacto para electrónica de consumo y prototipado de baja corriente.',
    specifications: [
      { label: 'Paso', value: '2.0 mm' },
      { label: 'Longitud de cable', value: '20 cm' },
      { label: 'Corriente nominal', value: '2A' },
    ],
    compatibility: ['Placas MCU', 'Sensores', 'Módulos IoT'],
    brand: 'JST',
    category: 'Prototipado',
    connectorType: 'Wire-to-Board'
  },
  {
    id: 'anderson-sb50',
    name: 'Anderson SB50 2 Polos',
    sku: 'SB50-RED-50A',
    price: 9.9,
    images: ['https://images.unsplash.com/photo-1517420879524-86d64ac2f339?w=1200&auto=format&fit=crop'],
    stock: 74,
    description: 'Conector rápido para baterías y sistemas de potencia con autoalineación de contactos.',
    specifications: [
      { label: 'Corriente nominal', value: '50A' },
      { label: 'Polos', value: '2' },
      { label: 'Voltaje nominal', value: '600V' },
    ],
    compatibility: ['Equipos industriales', 'Movilidad eléctrica', 'UPS'],
    brand: 'Anderson Power',
    category: 'Energía',
    connectorType: 'Power'
  },
  {
    id: 'rj45-cat6-shielded',
    name: 'RJ45 Cat6 Blindado',
    sku: 'RJ45-CAT6-STP-MX',
    price: 2.15,
    images: ['https://images.unsplash.com/photo-1597852074816-d933c7d2b988?w=1200&auto=format&fit=crop'],
    stock: 420,
    description: 'Conector de red blindado para instalaciones de datos con mejor inmunidad al ruido.',
    specifications: [
      { label: 'Categoría', value: 'Cat6 STP' },
      { label: 'Ancho de banda', value: '250 MHz' },
      { label: 'Calibre compatible', value: '23-26 AWG' },
    ],
    compatibility: ['Switches', 'Patch panels', 'Cableado estructurado'],
    brand: 'Panduit',
    category: 'Electrónica general',
    connectorType: 'Ethernet'
  }
]
