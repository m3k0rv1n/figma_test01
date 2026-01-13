import React from 'react';
import { colors, typography, spacing, borderRadius, shadows } from '../../design-system/tokens';

const imgLine1 = '/figma_test01/assets/5ed5e905b13cb5812ee339b559bf2f1b7fcaca47.svg';
const imgLine2 = '/figma_test01/assets/1ce1c8f43b5b8f50c486a642162074283bce8807.svg';

export interface CardLotteryButtonProps {
  className?: string;
  state?: 'Default' | 'Press' | 'Disabled';
  size?: 's' | 'l' | 'm';
  price?: string;
}

export const CardLotteryButton: React.FC<CardLotteryButtonProps> = ({
  className = '',
  state = 'Default',
  size = 's',
  price = '50 ₽',
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.md,
    background: colors.gradient.primary,
    borderRadius: borderRadius.md,
    padding: size === 's' ? `${spacing.sm} ${spacing.sm}` : `${spacing.lg} ${spacing.xl}`,
    boxShadow: shadows.button,
    position: 'relative',
    cursor: state === 'Disabled' ? 'not-allowed' : 'pointer',
    opacity: state === 'Disabled' ? 0.6 : 1,
    height: size === 's' ? '32.75px' : '48px',
  };

  const textStyles: React.CSSProperties = {
    fontFamily: typography.mobileButtonM.fontFamily,
    fontWeight: typography.mobileButtonM.fontWeight,
    lineHeight: typography.mobileButtonM.lineHeight,
    fontSize: size === 's' ? typography.mobileButtonS.fontSize : typography.mobileButtonM.fontSize,
    color: colors.white,
    textAlign: 'center',
    whiteSpace: 'nowrap' as const,
  };

  const separatorLine = size === 's' ? imgLine2 : imgLine1;
  const separatorSize = size === 's' ? '16px' : '24px';

  return (
    <div className={className} style={baseStyles}>
      <p style={textStyles}>Играть</p>
      <div
        style={{
          display: 'flex',
          height: size === 's' ? '16px' : '100%',
          alignItems: 'center',
          justifyContent: 'center',
          width: 0,
          position: 'relative',
        }}
      >
        <div
          style={{
            flex: 'none',
            height: '100%',
            transform: 'rotate(90deg)',
          }}
        >
          <div
            style={{
              height: 0,
              position: 'relative',
              width: separatorSize,
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '-1px 0 0 0',
              }}
            >
              <img
                alt=""
                src={separatorLine}
                style={{
                  display: 'block',
                  maxWidth: 'none',
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <p style={textStyles}>{price}</p>
      <div
        style={{
          position: 'absolute',
          inset: 0,
          pointerEvents: 'none',
          borderRadius: borderRadius.md,
          boxShadow: shadows.inset,
        }}
      />
    </div>
  );
};
