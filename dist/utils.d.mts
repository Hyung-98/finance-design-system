import { ClassValue } from 'clsx';

declare function cn(...inputs: ClassValue[]): string;

declare const colorTokens: {
    primitive: {
        blue: {
            '50': {
                value: string;
                variable: string;
            };
            '100': {
                value: string;
                variable: string;
            };
            '200': {
                value: string;
                variable: string;
            };
            '300': {
                value: string;
                variable: string;
            };
            '400': {
                value: string;
                variable: string;
            };
            '500': {
                value: string;
                variable: string;
            };
            '600': {
                value: string;
                variable: string;
            };
            '700': {
                value: string;
                variable: string;
            };
            '800': {
                value: string;
                variable: string;
            };
            '900': {
                value: string;
                variable: string;
            };
        };
        gray: {
            '50': {
                value: string;
                variable: string;
            };
            '100': {
                value: string;
                variable: string;
            };
            '200': {
                value: string;
                variable: string;
            };
            '300': {
                value: string;
                variable: string;
            };
            '400': {
                value: string;
                variable: string;
            };
            '500': {
                value: string;
                variable: string;
            };
            '600': {
                value: string;
                variable: string;
            };
            '700': {
                value: string;
                variable: string;
            };
            '800': {
                value: string;
                variable: string;
            };
            '900': {
                value: string;
                variable: string;
            };
        };
        red: {
            '50': {
                value: string;
                variable: string;
            };
            '100': {
                value: string;
                variable: string;
            };
            '500': {
                value: string;
                variable: string;
            };
            '600': {
                value: string;
                variable: string;
            };
        };
        green: {
            '50': {
                value: string;
                variable: string;
            };
            '100': {
                value: string;
                variable: string;
            };
            '500': {
                value: string;
                variable: string;
            };
            '600': {
                value: string;
                variable: string;
            };
        };
        yellow: {
            '50': {
                value: string;
                variable: string;
            };
            '100': {
                value: string;
                variable: string;
            };
            '500': {
                value: string;
                variable: string;
            };
        };
    };
    semantic: {
        primary: {
            value: string;
            variable: string;
            description: string;
        };
        primaryHover: {
            value: string;
            variable: string;
            description: string;
        };
        secondary: {
            value: string;
            variable: string;
            description: string;
        };
        textPrimary: {
            value: string;
            variable: string;
            description: string;
        };
        textSecondary: {
            value: string;
            variable: string;
            description: string;
        };
        textTertiary: {
            value: string;
            variable: string;
            description: string;
        };
        textInverse: {
            value: string;
            variable: string;
            description: string;
        };
        bgBase: {
            value: string;
            variable: string;
            description: string;
        };
        bgElevated: {
            value: string;
            variable: string;
            description: string;
        };
        bgOverlay: {
            value: string;
            variable: string;
            description: string;
        };
        border: {
            value: string;
            variable: string;
            description: string;
        };
        borderStrong: {
            value: string;
            variable: string;
            description: string;
        };
        danger: {
            value: string;
            variable: string;
            description: string;
        };
        success: {
            value: string;
            variable: string;
            description: string;
        };
        warning: {
            value: string;
            variable: string;
            description: string;
        };
    };
};
declare const spacingTokens: {
    '1': {
        value: string;
        variable: string;
    };
    '2': {
        value: string;
        variable: string;
    };
    '3': {
        value: string;
        variable: string;
    };
    '4': {
        value: string;
        variable: string;
    };
    '5': {
        value: string;
        variable: string;
    };
    '6': {
        value: string;
        variable: string;
    };
    '7': {
        value: string;
        variable: string;
    };
    '8': {
        value: string;
        variable: string;
    };
    '10': {
        value: string;
        variable: string;
    };
    '12': {
        value: string;
        variable: string;
    };
    '14': {
        value: string;
        variable: string;
    };
    '16': {
        value: string;
        variable: string;
    };
    '20': {
        value: string;
        variable: string;
    };
    '24': {
        value: string;
        variable: string;
    };
};
declare const typographyTokens: {
    scale: {
        xs: {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        sm: {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        base: {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        lg: {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        xl: {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        '2xl': {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        '3xl': {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        '4xl': {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
        '5xl': {
            fontSize: string;
            lineHeight: string;
            variable: string;
        };
    };
    weight: {
        regular: {
            value: string;
            variable: string;
        };
        medium: {
            value: string;
            variable: string;
        };
        semibold: {
            value: string;
            variable: string;
        };
        bold: {
            value: string;
            variable: string;
        };
    };
};
declare const radiusTokens: {
    sm: {
        value: string;
        variable: string;
    };
    md: {
        value: string;
        variable: string;
    };
    lg: {
        value: string;
        variable: string;
    };
    xl: {
        value: string;
        variable: string;
    };
    '2xl': {
        value: string;
        variable: string;
    };
    full: {
        value: string;
        variable: string;
    };
};
declare const shadowTokens: {
    sm: {
        value: string;
        variable: string;
    };
    md: {
        value: string;
        variable: string;
    };
    lg: {
        value: string;
        variable: string;
    };
    xl: {
        value: string;
        variable: string;
    };
};
declare const motionTokens: {
    duration: {
        instant: {
            value: string;
            variable: string;
            description: string;
        };
        fast: {
            value: string;
            variable: string;
            description: string;
        };
        normal: {
            value: string;
            variable: string;
            description: string;
        };
        slow: {
            value: string;
            variable: string;
            description: string;
        };
    };
    easing: {
        easeIn: {
            value: string;
            variable: string;
            description: string;
        };
        easeOut: {
            value: string;
            variable: string;
            description: string;
        };
        easeInOut: {
            value: string;
            variable: string;
            description: string;
        };
        spring: {
            value: string;
            variable: string;
            description: string;
        };
    };
};
declare const zIndexTokens: {
    base: {
        value: string;
        variable: string;
        description: string;
    };
    raised: {
        value: string;
        variable: string;
        description: string;
    };
    dropdown: {
        value: string;
        variable: string;
        description: string;
    };
    sticky: {
        value: string;
        variable: string;
        description: string;
    };
    modal: {
        value: string;
        variable: string;
        description: string;
    };
    toast: {
        value: string;
        variable: string;
        description: string;
    };
    tooltip: {
        value: string;
        variable: string;
        description: string;
    };
};
declare const breakpointTokens: {
    sm: {
        value: string;
        variable: string;
        description: string;
    };
    md: {
        value: string;
        variable: string;
        description: string;
    };
    lg: {
        value: string;
        variable: string;
        description: string;
    };
    xl: {
        value: string;
        variable: string;
        description: string;
    };
    '2xl': {
        value: string;
        variable: string;
        description: string;
    };
};

export { breakpointTokens, cn, colorTokens, motionTokens, radiusTokens, shadowTokens, spacingTokens, typographyTokens, zIndexTokens };
