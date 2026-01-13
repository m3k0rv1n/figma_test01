import React from 'react';
import { colors, typography, spacing, borderRadius, shadows } from '../../tokens';
import './Button.css';

export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'demo' | 'white';
  size?: 's' | 'm' | 'l';
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'm',
  onClick,
  className = '',
  disabled = false,
}) => {
  const baseStyles: React.CSSProperties = {
    fontFamily: typography.mobileButtonM.fontFamily,
    fontSize: size === 's' ? typography.mobileButtonS.fontSize : typography.mobileButtonM.fontSize,
    fontWeight: typography.mobileButtonM.fontWeight,
    lineHeight: typography.mobileButtonM.lineHeight,
    padding: `${spacing.sm} ${spacing.xl}`,
    borderRadius: borderRadius.md,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    position: 'relative',
    textAlign: 'center',
    whiteSpace: 'nowrap' as const,
    opacity: disabled ? 0.6 : 1,
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    primary: {
      background: colors.gradient.primary,
      color: colors.white,
      boxShadow: shadows.button,
    },
    secondary: {
      background: colors.button.demo,
      color: colors.white,
      boxShadow: shadows.buttonDemo,
    },
    demo: {
      background: colors.button.demo,
      color: colors.white,
      boxShadow: shadows.buttonDemo,
    },
    white: {
      background: colors.white,
      color: colors.black,
    },
  };

  return (
    <button
      className={`button button--${variant} button--${size} ${className}`}
      style={{ ...baseStyles, ...variantStyles[variant] }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
      {variant === 'primary' && (
        <div
          className="button__inset-shadow"
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: borderRadius.md,
            boxShadow: shadows.inset,
          }}
        />
      )}
    </button>
  );
};
