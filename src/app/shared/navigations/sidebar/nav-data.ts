import {INavbarData} from "./helper";

export const navbarData: INavbarData[] = [
  {
    routeLink: 'dashboard',
    icon: 'fal fa-home',
    label: 'Dashboard'
  },
  {

    routeLink: '/productos',
    label: 'Almacén',
    icon: 'fal fa-warehouse',
    items: [
      {
        routeLink: 'categories',
        label: 'Categoría'
      },
      {
        routeLink: 'formats',
        label: 'Formatos'
      },
      {
        routeLink: 'brands',
        label: 'Marcas'
      },
      {
        routeLink: 'products',
        label: 'Productos'
      }
    ]
  },
  {

    routeLink: '/provee',
    label: 'Compras',
    icon: 'fal fa-truck',
    items: [
      {
        routeLink: 'ingresos',
        label: 'Ingresos'
      },
      {
        routeLink: 'formats',
        label: 'Proveedores'
      }
    ]
  },
  {

    routeLink: '/segu',
    label: 'Seguridad',
    icon: 'fal fa-lock',
    items: [
      {
        routeLink: 'roles',
        label: 'Roles'
      },
      {
        routeLink: 'usuarios',
        label: 'Usuarios'
      }
    ]
  },
  {

    routeLink: '/report',
    label: 'Reportes',
    icon: 'fal fa-file-chart-pie',
    items: [
      {
        routeLink: 'ingresos',
        label: 'Reportes Ventas'
      },
      {
        routeLink: 'formats',
        label: 'Reportes Ingresos'
      }
    ]
  },
  {

    routeLink: '/ventas',
    label: 'Ventas',
    icon: 'fal fa-cart-plus',
    items: [
      {
        routeLink: 'clientes',
        label: 'Clientes'
      },
      {
        routeLink: 'cotizaciones',
        label: 'Cotizaciones'
      },
      {
        routeLink: 'delivery',
        label: 'Delivery'
      },
      {
        routeLink: 'ventas',
        label: 'Ventas'
      }
    ]
  },
]
