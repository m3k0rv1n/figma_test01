import React from 'react';
import { colors, typography, spacing } from '../../design-system/tokens';

const imgItog200062 = '/figma_test01/assets/457527de927d61dce3d6e8e47206835571267776.png';
const img6 = '/figma_test01/assets/0ec1eb0a3ca3fa22b33b425ab221bbe14ee9d9b4.svg';

export interface MoneyboxProps {
  className?: string;
  size?: 'Default' | 'compact';
  amount?: string;
}

export const Moneybox: React.FC<MoneyboxProps> = ({
  className = '',
  size = 'Default',
  amount = '20 000 ₽',
}) => {
  if (size === 'compact') {
    return (
      <div className={className} style={{ position: 'relative', width: '20px', height: '20px' }}>
        <img
          alt="Moneybox"
          src={imgItog200062}
          style={{
            position: 'absolute',
            inset: 0,
            maxWidth: 'none',
            objectFit: 'cover',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
          }}
        />
        <div
          style={{
            position: 'relative',
            width: '16px',
            height: '16px',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: '8.33%',
            }}
          >
            <img
              alt="Info"
              src={img6}
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
    );
  }

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        gap: spacing.sm,
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
        <img
          alt="Moneybox"
          src={imgItog200062}
          style={{
            position: 'absolute',
            inset: 0,
            maxWidth: 'none',
            objectFit: 'cover',
            pointerEvents: 'none',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
      <p
        style={{
          fontFamily: typography.mobileBodyL.fontFamily,
          fontWeight: typography.mobileBodyL.fontWeight,
          lineHeight: '18px',
          fontSize: typography.mobileBodyS.fontSize,
          color: colors.white,
          whiteSpace: 'nowrap' as const,
        }}
      >
        {amount}
      </p>
      <div
        style={{
          position: 'relative',
          width: '16px',
          height: '16px',
          flexShrink: 0,
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: '8.33%',
          }}
        >
          <img
            alt="Info"
            src={img6}
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
  );
};
