import { StyleSheet } from 'react-native';

export const COLORS = {
    primary: '#007AFF',
    secondary: '#D7443E',
    background: '#F9F9F9',
    text: '#1C1C1E',
    invertedText: '#FFFFFF',
    secondaryText: '#8E8E93',
    white: '#FFFFFF',
    error: '#FF3B30',
};

export const FONT_SIZES = {
    small: 14,
    medium: 18,
    large: 24,
    title: 32,
};

export const FONT_WEIGHTS = {
    regular: '400',
    semibold: '600',
    bold: '700',
};

export const SPACING = {
    xsmall: 6,
    small: 12,
    medium: 20,
    large: 28,
    xlarge: 40,
    xxlarge: 56,
};

export const COMMON_STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.background,
        paddingHorizontal: SPACING.small,
    },
    titleText: {
        fontSize: FONT_SIZES.title,
        fontWeight: FONT_WEIGHTS.bold,
        color: COLORS.text,
        marginBottom: SPACING.small,
    },
    subtitleText: {
        fontSize: FONT_SIZES.medium,
        fontWeight: FONT_WEIGHTS.regular,
        color: COLORS.secondaryText,
        marginBottom: SPACING.large,
    },
    primaryButton: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.medium,
        paddingHorizontal: SPACING.large,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    primaryButtonText: {
        color: COLORS.white,
        fontSize: FONT_SIZES.medium,
        fontWeight: FONT_WEIGHTS.semibold,
    },
    secondaryButton: {
        backgroundColor: COLORS.secondary,
        paddingVertical: SPACING.medium,
        paddingHorizontal: SPACING.large,
        borderRadius: 90,
        alignItems: 'center',
        justifyContent: 'center',
    },
    secondaryButtonText: {
        color: COLORS.invertedText,
        fontSize: FONT_SIZES.medium,
        fontWeight: FONT_WEIGHTS.semibold,
    },
    input: {
        backgroundColor: COLORS.white,
        paddingVertical: SPACING.medium,
        paddingHorizontal: SPACING.medium,
        borderRadius: 10,
        fontSize: FONT_SIZES.medium,
        color: COLORS.text,
        marginVertical: SPACING.small,
    },
    separator: {
        height: 1,
        backgroundColor: COLORS.secondaryText,
        marginVertical: SPACING.medium,
    },
    mapContainer: {
        flex: 1,
        borderRadius: 15,
        overflow: 'hidden',
        marginBottom: SPACING.medium,
    },
    mapPlaceholder: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
        borderRadius: 15,
    },
    alertText: {
        fontSize: FONT_SIZES.medium,
        color: COLORS.error,
        textAlign: 'center',
        padding: SPACING.small,
        fontWeight: FONT_WEIGHTS.semibold,
    },
    inputContainer: {
        marginBottom: SPACING.medium,
    },
    alertContainer: {
        padding: SPACING.small,
        alignItems: 'center',
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});