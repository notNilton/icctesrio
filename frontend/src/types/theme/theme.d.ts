// src/theme.d.ts
import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    background: {
      default: string;
      paper: string;
    };
  }

  interface PaletteOptions {
    background: {
      default: string;
      paper: string;
    };
  }

  interface Theme {
    palette: Palette;
  }

  interface ThemeOptions {
    palette?: PaletteOptions;
  }

  // Tipagem para os componentes customizados
  interface Components {
    MuiCssBaseline?: {
      styleOverrides?: {
        body?: React.CSSProperties;
      };
    };
    MuiButton?: {
      styleOverrides?: {
        root?: React.CSSProperties;
      };
    };
    MuiPaper?: {
      styleOverrides?: {
        root?: React.CSSProperties & {
          background: (theme: Theme) => string;
        };
      };
    };
  }
}

// Exportando o tipo do tema para uso em componentes
export interface AppTheme extends Theme {
  palette: Palette;
  components?: Components;
}