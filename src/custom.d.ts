declare module "*svg"
declare module 'react-scroll'

declare module '@coreui/react' {
    import { ComponentType, ReactNode } from 'react';
  
    export const CNavbar: ComponentType<any>;
    export const CContainer: ComponentType<any>;
    export const CNavbarBrand: ComponentType<any>;
    export const CNavbarToggler: ComponentType<any>;
    export const CCollapse: ComponentType<any>;
    export const CNavbarNav: ComponentType<any>;
    export const CNavItem: ComponentType<any>;
    export const CNavLink: ComponentType<any>;
    export const CDropdown: ComponentType<any>;
    export const CDropdownMenu: ComponentType<any>;
    export const CDropdownItem: ComponentType<any>;
    export const CDropdownDivider: ComponentType<any>;
    export const CDropdownToggle: ComponentType<any>;
  
    // Add other CoreUI components as needed...
  }