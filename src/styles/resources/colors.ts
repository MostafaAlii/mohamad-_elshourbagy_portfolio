export const baseColors = {
    customGold: "#FFD700",
    // ======== Midnight Blue =========
    midnightBlue: "#2C3E50",
    // ===== Blue Shades =====
    blue50: "#EFF6FF",
    blue100: "#DBEAFE",
    blue200: "#BFDBFE",
    blue300: "#93C5FD",
    blue400: "#60A5FA",
    blue500: "#3B82F6",
    blue600: "#2563EB",
    blue700: "#1D4ED8",
    blue800: "#1E40AF",
    blue900: "#1E3A8A",

    // ===== Green Shades =====
    green50: "#F0FDF4",
    green100: "#DCFCE7",
    green200: "#BBF7D0",
    green300: "#86EFAC",
    green400: "#4ADE80",
    green500: "#22C55E",
    green600: "#16A34A",
    green700: "#15803D",
    green800: "#166534",
    green900: "#14532D",

    // ===== Red Shades (أحمر) =====
    red50: "#FEF2F2",
    red100: "#FEE2E2",
    red200: "#FECACA",
    red300: "#FCA5A5",
    red400: "#F87171",
    red500: "#EF4444",
    red600: "#DC2626",
    red700: "#B91C1C",
    red800: "#991B1B",
    red900: "#7F1D1D",

    // ===== Yellow Shades (أصفر) =====
    yellow50: "#FFFBEB",
    yellow100: "#FEF3C7",
    yellow200: "#FDE68A",
    yellow300: "#FCD34D",
    yellow400: "#FBBF24",
    yellow500: "#F59E0B",
    yellow600: "#D97706",
    yellow700: "#B45309",
    yellow800: "#92400E",
    yellow900: "#78350F",

    // ===== Orange Shades (برتقالي) =====
    orange50: "#FFF7ED",
    orange100: "#FFEDD5",
    orange200: "#FED7AA",
    orange300: "#FDBA74",
    orange400: "#FB923C",
    orange500: "#F97316",
    orange600: "#EA580C",
    orange700: "#C2410C",
    orange800: "#9A3412",
    orange900: "#7C2D12",

    // ===== Purple Shades (بنفسجي) =====
    purple50: "#FAF5FF",
    purple100: "#F3E8FF",
    purple200: "#E9D5FF",
    purple300: "#D8B4FE",
    purple400: "#C084FC",
    purple500: "#A855F7",
    purple600: "#9333EA",
    purple700: "#7E22CE",
    purple800: "#6B21A8",
    purple900: "#581C87",

    // ===== Pink Shades =====
    pink50: "#FDF2F8",
    pink100: "#FCE7F3",
    pink200: "#FBCFE8",
    pink300: "#F9A8D4",
    pink400: "#F472B6",
    pink500: "#EC4899",
    pink600: "#DB2777",
    pink700: "#BE185D",
    pink800: "#9D174D",
    pink900: "#831843",

    // ===== Teal Shades (تركواز) =====
    teal50: "#F0FDFA",
    teal100: "#CCFBF1",
    teal200: "#99F6E4",
    teal300: "#5EEAD4",
    teal400: "#2DD4BF",
    teal500: "#14B8A6",
    teal600: "#0D9488",
    teal700: "#0F766E",
    teal800: "#115E59",
    teal900: "#134E4A",

    // ===== Cyan Shades =====
    cyan50: "#ECFEFF",
    cyan100: "#CFFAFE",
    cyan200: "#A5F3FC",
    cyan300: "#67E8F9",
    cyan400: "#22D3EE",
    cyan500: "#06B6D4",
    cyan600: "#0891B2",
    cyan700: "#0E7490",
    cyan800: "#155E75",
    cyan900: "#164E63",

    // ===== Indigo Shades =====
    indigo50: "#EEF2FF",
    indigo100: "#E0E7FF",
    indigo200: "#C7D2FE",
    indigo300: "#A5B4FC",
    indigo400: "#818CF8",
    indigo500: "#6366F1",
    indigo600: "#4F46E5",
    indigo700: "#4338CA",
    indigo800: "#3730A3",
    indigo900: "#312E81",

    // ===== Gray Scale =====
    gray50: "#F9FAFB",
    gray100: "#F3F4F6",
    gray200: "#E5E7EB",
    gray300: "#D1D5DB",
    gray400: "#9CA3AF",
    gray500: "#6B7280",
    gray600: "#4B5563",
    gray700: "#374151",
    gray800: "#1F2937",
    gray900: "#111827",

    // ===== Slate Shades =====
    slate50: "#F8FAFC",
    slate100: "#F1F5F9",
    slate200: "#E2E8F0",
    slate300: "#CBD5E1",
    slate400: "#94A3B8",
    slate500: "#64748B",
    slate600: "#475569",
    slate700: "#334155",
    slate800: "#1E293B",
    slate900: "#0F172A",

    // ===== Zinc Shades =====
    zinc50: "#FAFAFA",
    zinc100: "#F4F4F5",
    zinc200: "#E4E4E7",
    zinc300: "#D4D4D8",
    zinc400: "#A1A1AA",
    zinc500: "#71717A",
    zinc600: "#52525B",
    zinc700: "#3F3F46",
    zinc800: "#27272A",
    zinc900: "#18181B",

    // ===== Basic Colors =====
    white: "#FFFFFF",
    black: "#000000",
    transparent: "transparent",
} as const;

export const semanticColors = {
    // Navbar Colors
    navbar: {
        background: baseColors.black,
        text: baseColors.white,
        textHover: baseColors.white,
        logoText: baseColors.white,
        border: baseColors.transparent,
    },

    // Button Colors
    button: {
        primary: {
            bg: baseColors.blue600,
            bgHover: baseColors.blue700,
            text: baseColors.white,
        },
        secondary: {
            bg: baseColors.gray100,
            bgHover: baseColors.gray200,
            text: baseColors.gray800,
        },
        success: {
            bg: baseColors.green600,
            bgHover: baseColors.green700,
            text: baseColors.white,
        },
        danger: {
            bg: baseColors.red600,
            bgHover: baseColors.red700,
            text: baseColors.white,
        },
        warning: {
            bg: baseColors.yellow500,
            bgHover: baseColors.yellow600,
            text: baseColors.white,
        },
    },

    // Typography Colors
    text: {
        heading: baseColors.gray900,
        body: baseColors.gray700,
        muted: baseColors.gray500,
        light: baseColors.gray400,
    },

    // Background Colors
    background: {
        primary: baseColors.white,
        secondary: baseColors.gray50,
        accent: baseColors.blue50,
        dark: baseColors.gray900,
    },

    // Border Colors
    border: {
        light: baseColors.gray200,
        default: baseColors.gray300,
        dark: baseColors.gray400,
    },

    // Status Colors
    status: {
        success: baseColors.green500,
        error: baseColors.red500,
        warning: baseColors.yellow500,
        info: baseColors.blue500,
    },

    // Footer Colors
    footer: {
        background: baseColors.black,
        text: baseColors.gray400,
        textHover: baseColors.white,
    },

    // About Us Section Colors
    aboutUs: {
        background: baseColors.white,
        title: baseColors.gray900,
        subtitle: baseColors.gray600,
        text: baseColors.gray700,
    },

    service: {
        background: baseColors.gray50,
        title: baseColors.gray900,
        subtitle: baseColors.gray600,
        text: baseColors.gray700,
    },

    gallery: {
        background: baseColors.white,
        title: baseColors.gray900,
        subtitle: baseColors.gray600,
        text: baseColors.gray700,
    },
    contact: {
        background: baseColors.gray50,
        title: baseColors.gray900,
        label: baseColors.gray900,
        text: baseColors.gray600,
        input: baseColors.gray100,
        placeholder: baseColors.gray400,
        iconBg: baseColors.gray100,
        icon: baseColors.gray900,
        button: baseColors.gray900,
        buttonHover: baseColors.gray800,
        focus: baseColors.blue500,
    },
} as const;
