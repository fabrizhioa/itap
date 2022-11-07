import {
  doble,
  Epoxy04,
  EpoxyBlanco,
  MockUpScene,
  MokeupiTap,
  SantoCoyote,
  TarjetaBlanca,
  TarjetaBlanca2,
  TarjetaBlancaTulogo1,
  TarjetaBlancaTulogo2,
  TarjetaBlancaTulogo3,
} from "../assets/products";

import {
  CustomPage,
  Facility,
  FrecuentlyClients,
  Innovation,
  MenuDigital,
  Security,
  Technology,
  TimeReduce
} from "../assets/benefits"

export const ListaProductos = [
  {
    title: "Membresia Plataforma Empresarial Restaurantes",
    images: [doble, MockUpScene],
    price: 129.0,
    discount: {
      active: false,
    },
    options: {
      personalizable: false,
      colors: [],
      subcriptions: [
        {
          title: "Suscripción Anual",
          discount: "Ahorra un 20%",
          price: 103.2,
          span: "cada mes durante 12 meses",
        },
        {
          title: "Suscripción 6 meses",
          discount: "Ahorra un 15%",
          price: 109.65,
          span: "cada mes durante 12 meses",
        },
        {
          title: "Suscripción mensual",
          price: 129.0,
          span: "cada mes durante 12 meses",
        },
      ],
    },
  },
  {
    title: "iTAP Epoxi Pegable",
    images: [Epoxy04, EpoxyBlanco],
    price: 276.0,
    discount: {
      active: true,
      price: 138.0,
    },
    options: {
      colors: ["black", "white"],
      personalizable: false,
      subcriptions: [],
    },
  },
  {
    title: "iTAP Tarjeta Personalizable",
    images: [
      TarjetaBlancaTulogo2,
      TarjetaBlancaTulogo1,
      TarjetaBlancaTulogo3,
      MokeupiTap,
      SantoCoyote,
    ],
    price: 296.0,
    discount: {
      active: true,
      price: 148.0,
    },

    options: {
      personalizable: true,
      subcriptions: [],
      colors: [],
    },
  },
  {
    title: "iTAP Tarjeta",
    images: [TarjetaBlanca2, TarjetaBlanca],
    price: 150.0,
    discount: {
      active: true,
      price: 120.0,
    },
    options: {
      personalizable: true,
      subcriptions: [],
      colors: [],
    },
  },
];


export const ListaBeneficios = [
  {
    title: "Menú Digital",
    icon: MenuDigital,
    description: "Olvídate de imprimir menús con nuestro menú digital. todo el año cuentas con asistencia para cualquier cambio. Ya que nuestro menú digital es interactivo Cuentas con muchos beneficios! Estudios muestran que Nuestro menú puede incrementar tus ventas un 10%."
  },
  {
    title: "Pagina personalizada",
    icon: CustomPage,
    description: "Tu nueva pagina personalizada ayuda al cliente a tener toda tu información!  ubicación de otras sucursales, lugar para registrar reservaciones ,poder guardarte de contacto, checar tus redes sociales , ver las promociones que tienes! y poder ver el nuevo Menú digital ! "
  },
  {
    title: "Reduce Tiempos",
    icon: TimeReduce,
    description: "nuestro Menú digital puede reducir los tiempos de tus clientes para pedir lo que quiere!  Esta comprobado que entre nuestro Menú y  Epoxys/Tarjetas puedes reducir estos tiempos hasta en un 23.4%. liberando la espera de los meseros  y ayudándolos a atender mas mesas a la vez. También permite que en el trayecto del día puedas recibir mas personas por que reduces el tiempo del cliente en tu restaurant"
  },
  {
    title: "Clientes Frecuentes",
    icon: FrecuentlyClients,
    description: "Mejora la oportunidad de convertir un cliente a cliente frecuente . La información guardada en el celular permite que las personas se acuerden de ti, inclusive días después de haberte visitado. También el guardado de información permite que te tengan siempre a la alcance de su teléfono."
  },
  {
    title: "Seguridad",
    icon: Security,
    description: "Tu seguridad es lo mas importante! \n Por eso toda tu información esta guardada de la mejor manera con nosotros!"
  }, {
    title: "Facilidad",
    icon: Facility,
    description: "Cuando te conviertes en socio todo es Fácil. \n Cuentas con un asistente para cualquier cambio o modificación que quieras realizar, ya sea en tu menú o en tu plataforma. Los cambios los vez reflejados rápidamente. "
  }, {
    title: "Tecnologia",
    icon: Technology,
    description: "Contamos con Tecnología NFC, \n   la manera mas fácil de compartir información! NFC te ayuda a conectar clientes de una manera mas rápida y sencilla."
  }, {
    title: "Innovacion",
    icon: Innovation,
    description: "Siempre seguimos inovando ! por lo que al convertirte en socio de iTAP tendras la oportunidad de recibir nuevos servicios exclusivos para nuestros clientes "
  }
]

export const SliderBeneficios = [
  {
    title: "",
    description: "",
    link: "/contact",
    image: "https://static.wixstatic.com/media/d4abae_a5eaaf569efd40af953c0c61bec866ee~mv2.jpg/v1/fill/w_1443,h_559,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4abae_a5eaaf569efd40af953c0c61bec866ee~mv2.jpg"
  },
  {
    title: "Conocenos",
    description: "Conoce un poco mas acerca de nosotros",
    link: "/about",
    image: "https://static.wixstatic.com/media/d4abae_72b8cea8a8cb4ce584e9900ff2ec0958~mv2.jpg/v1/fill/w_1443,h_559,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4abae_72b8cea8a8cb4ce584e9900ff2ec0958~mv2.jpg"
  },
  {
    title: "Plataforma digital",
    description: "",
    link: "/shop",
    image: "https://static.wixstatic.com/media/d4abae_5398aadcbd424f33a309acc751db72a4~mv2.jpg/v1/fill/w_1443,h_559,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/d4abae_5398aadcbd424f33a309acc751db72a4~mv2.jpg"
  }
]

export const ListaServicios = [
  {
    image: "https://static.wixstatic.com/media/d4abae_7b8339c3cb374de0a98bf5c5b9b5a220~mv2.jpg/v1/fill/w_498,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/64939659_337778023571039_2687638282369924966_n.jpg",
    title: "Fotografía Profesional",
    link: "#cotizacion"
  },
  {
    image: "https://static.wixstatic.com/media/nsplsh_9da453d4889b4e6dbed4a6b002b816e3~mv2.jpg/v1/fill/w_500,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Image%20by%20Firmbee_com.jpg",
    title: "Marketing",
    link: "#cotizacion"
  },
  {
    image: "https://static.wixstatic.com/media/e55b24370d50452987eb5c86568e1d3b.jpg/v1/fill/w_498,h_332,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/Gr%C3%A1ficas%20de%20inversi%C3%B3n.jpg",
    title: "Análisis de Datos",
    link: "#cotizacion"
  },{
    image: "https://static.wixstatic.com/media/d4abae_eb6f4f5a82d849b6a8ce176c61a77cf8~mv2.jpg/v1/fill/w_427,h_454,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2021-08-12%20(2)_edited.jpg",
    title: "Menú con Carrito",
    link: "#cotizacion"
  }
]