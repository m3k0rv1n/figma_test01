import React from 'react';
import { colors, spacing, borderRadius, shadows } from '../../tokens';
import './Card.css';

export interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  const cardStyles: React.CSSProperties = {
    background: colors.dark.bg04,
    borderRadius: borderRadius.xl,
    padding: spacing.md,
    boxShadow: shadows.card,
  };

  return (
    <div className={`card ${className}`} style={cardStyles}>
      {children}
    </div>
  );
};
