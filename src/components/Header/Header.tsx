import React from 'react';
import { colors, spacing, borderRadius } from '../../design-system/tokens';
import { Moneybox } from '../Moneybox';

// Status bar icons
const img20000 = '/figma_test01/assets/506f9635525548d8a65879e8e75738a20dafee60.svg';
const img20001 = '/figma_test01/assets/997201ff2758ae64cc083e70683cd64f6ce7d2fd.svg';
const img20002 = '/figma_test01/assets/5a6123a137922589e14382b7850279a0783a1973.svg';
const img20003 = '/figma_test01/assets/0b3b3d17a790fc0fd6d45e5a147dff0b8fa597ff.svg';
const img20004 = '/figma_test01/assets/47a26b4e276681a91a715757d38f8d6640353aa0.svg';

// Navigation icons
const img7 = '/figma_test01/assets/0ec1eb0a3ca3fa22b33b425ab221bbe14ee9d9b4.svg';
const img8 = '/figma_test01/assets/715c9f298e290b576cbb68eed858d6795f96a505.svg';
const img9 = '/figma_test01/assets/870278d04dfb2779a70c1848747709b88e960a0d.svg';

const imgItog200073 = '/figma_test01/assets/a33b29a79fa5517fa372fdf63f5f51fbafd760f5.png';

export interface HeaderProps {
  className?: string;
  state?: 'home';
  authorization?: boolean;
  balance?: string;
}

const StatusBar: React.FC = () => {
  return (
    <div
      style={{
        height: '44px',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        flexShrink: 0,
      }}
    >
      {/* Left Side - Time */}
      <div
        style={{
          position: 'absolute',
          left: '19px',
          top: '17px',
          height: '20px',
          width: '54px',
          borderRadius: '24px',
        }}
      >
        <p
          style={{
            position: 'absolute',
            fontFamily: "'SF Pro Text', sans-serif",
            fontWeight: 600,
            fontSize: '15px',
            lineHeight: '20px',
            color: colors.white,
            textAlign: 'center',
            left: '50%',
            top: '1px',
            transform: 'translateX(-50%)',
            width: '54px',
            letterSpacing: '-0.5px',
          }}
        >
          9:41
        </p>
      </div>

      {/* Right Side - Battery, Wifi, Signal */}
      <div style={{ position: 'absolute', right: '10.67px', top: '21.33px' }}>
        {/* Battery */}
        <div style={{ position: 'absolute', right: '10.67px', top: '21.33px' }}>
          <div style={{ position: 'absolute', height: '11.333px', right: '13px', top: '21.33px', width: '22px' }}>
            <img alt="Battery" src={img20000} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
          </div>
          <div style={{ position: 'absolute', height: '4px', right: '10.67px', top: '25px', width: '1.328px' }}>
            <img alt="Battery tip" src={img20001} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
          </div>
          <div style={{ position: 'absolute', height: '7.333px', right: '15px', top: '23.33px', width: '18px' }}>
            <img alt="Battery fill" src={img20002} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
          </div>
        </div>
        {/* Wifi */}
        <div style={{ position: 'absolute', height: '10.966px', right: '40.03px', top: '21.33px', width: '15.272px' }}>
          <img alt="Wifi" src={img20003} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
        </div>
        {/* Mobile Signal */}
        <div style={{ position: 'absolute', height: '10.667px', right: '60.33px', top: '21.67px', width: '17px' }}>
          <img alt="Signal" src={img20004} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
        </div>
      </div>
    </div>
  );
};

export const Header: React.FC<HeaderProps> = ({
  className = '',
  state = 'home',
  authorization = false,
  balance = '0 ₽',
}) => {
  if (state === 'home' && authorization) {
    return (
      <div
        className={className}
        style={{
          background: colors.dark.bg01,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          borderRadius: `0 0 ${borderRadius['2xl']} ${borderRadius['2xl']}`,
          width: '360px',
        }}
      >
        <StatusBar />
        <div
          style={{
            background: colors.dark.bg01,
            display: 'flex',
            gap: spacing.md,
            alignItems: 'flex-start',
            justifyContent: 'center',
            overflow: 'hidden',
            padding: `${spacing.md} ${spacing.xl}`,
            borderRadius: `0 0 ${borderRadius['2xl']} ${borderRadius['2xl']}`,
            boxShadow: '0px 10px 16px 0px rgba(0,0,0,0.05)',
            flexShrink: 0,
            width: '360px',
          }}
        >
          {/* Back Button */}
          <div
            style={{
              background: colors.dark.bg04,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: spacing.sm,
              borderRadius: borderRadius.lg,
              width: '40px',
              height: '40px',
              flexShrink: 0,
            }}
          >
            <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
              <div style={{ position: 'absolute', bottom: '25%', left: '29.17%', right: '37.5%', top: '25%' }}>
                <div style={{ position: 'absolute', inset: '2.92% 5.9% 2.92% 7.2%' }}>
                  <img alt="Back" src={img7} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
          </div>

          {/* Balance Tab */}
          <div
            style={{
              flex: '1 1 0',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              minHeight: 0,
              minWidth: 0,
              position: 'relative',
              flexShrink: 0,
            }}
          >
            <div
              style={{
                flex: '1 1 0',
                background: colors.dark.bg04,
                display: 'flex',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: 0,
                minWidth: 0,
                paddingLeft: spacing.md,
                paddingRight: spacing.sm,
                paddingTop: spacing.sm,
                paddingBottom: spacing.sm,
                borderRadius: borderRadius.lg,
                flexShrink: 0,
              }}
            >
              <div style={{ display: 'flex', gap: spacing.sm, alignItems: 'center', flexShrink: 0 }}>
                <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
                  <img
                    alt="Balance"
                    src={imgItog200073}
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
                    fontFamily: "'Roboto Flex', sans-serif",
                    fontWeight: 700,
                    lineHeight: '18px',
                    fontSize: '14px',
                    color: colors.white,
                    whiteSpace: 'nowrap' as const,
                  }}
                >
                  {balance}
                </p>
              </div>
              <div
                style={{
                  background: colors.yellow[500],
                  position: 'relative',
                  borderRadius: borderRadius.md,
                  width: '24px',
                  height: '24px',
                  flexShrink: 0,
                }}
              >
                <div style={{ position: 'absolute', inset: '41.67% 16.67%' }}>
                  <div style={{ position: 'absolute', inset: 0 }}>
                    <img alt="Menu" src={img8} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Moneybox */}
          <div
            style={{
              background: colors.dark.bg04,
              display: 'flex',
              height: '40px',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingLeft: spacing.md,
              paddingRight: spacing.sm,
              paddingTop: spacing.sm,
              paddingBottom: spacing.sm,
              borderRadius: borderRadius.lg,
              flexShrink: 0,
              width: '62px',
            }}
          >
            <Moneybox size="compact" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div
      className={className}
      style={{
        background: colors.dark.bg01,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        borderRadius: `0 0 ${borderRadius['2xl']} ${borderRadius['2xl']}`,
        width: '360px',
      }}
    >
      <StatusBar />
      <div
        style={{
          background: colors.dark.bg01,
          display: 'flex',
          alignItems: 'flex-start',
          overflow: 'hidden',
          padding: `${spacing.md} ${spacing.xl}`,
          borderRadius: `0 0 ${borderRadius['2xl']} ${borderRadius['2xl']}`,
          boxShadow: '0px 10px 16px 0px rgba(0,0,0,0.05)',
          flexShrink: 0,
          width: '360px',
        }}
      >
        <div
          style={{
            background: colors.dark.bg04,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: spacing.sm,
            borderRadius: borderRadius.full,
            width: '40px',
            height: '40px',
            flexShrink: 0,
          }}
        >
          <div style={{ position: 'relative', width: '20px', height: '20px', flexShrink: 0 }}>
            <div style={{ position: 'absolute', inset: '8.33% 12.5%' }}>
              <div style={{ position: 'absolute', inset: 0 }}>
                <img alt="User" src={img9} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
