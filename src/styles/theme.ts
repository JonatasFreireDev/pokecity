interface IColors {
  theme: {
    theme: {
      mainTheme: string;
      secondTheme: string;
    };
    button: {
      primaryColor: string;
    };
    input: {
      normal: string;
      active: string;
      error: string;
      success: string;
    };
    icon: {
      white: string;
      grey: string;
      black: string;
    };
    text: {
      white: string;
      black: string;
    };
  };
}

const Colors = {
  theme: {
    mainTheme: '#451A0A',
    secondTheme: 'red',
  },
  button: {
    primaryColor: '#C48942',
  },
  input: {
    normal: 'grey',
    active: '#C48942',
    error: 'red',
    success: 'green',
  },
  icon: {
    white: '#fff',
    grey: 'grey',
    black: '#000',
  },
  text: {
    white: '#fff',
    black: '#000',
  },
};

export { Colors };
export type { IColors };
