import React from 'react';
import { colors, typography, spacing, borderRadius } from '../../design-system/tokens';
import { Button } from '../../design-system/components/Button';
import { BrandMirHorizontal } from '../BrandMirHorizontal';
import './Footer.css';

// Footer images
const img11 = 'http://localhost:3845/assets/536037631b2970f0e577da2c3a3a014d897615e3.svg';
const img12 = 'http://localhost:3845/assets/e956a7b2319bf6afde1d664ffd36b4398ad13662.svg';
const img13 = 'http://localhost:3845/assets/9a1423d4b7021f93df81abd0c789381421301771.svg';
const img14 = 'http://localhost:3845/assets/44075d8424e2e81abe2d2771abc123b2436e0d6b.svg';
const img15 = 'http://localhost:3845/assets/7c2c564c217e2ad6b9d9648be89441a5874e7832.svg';
const img16 = 'http://localhost:3845/assets/44725252b20f616ed32fe1247f40ef36170d6b0c.svg';
const img17 = 'http://localhost:3845/assets/300d121a9bc9d0b5f5b1819abb3245f45e42225a.svg';
const img18 = 'http://localhost:3845/assets/da5a788aa295f0c9ac21cbcb04bdd0561964bddb.svg';
const img19 = 'http://localhost:3845/assets/7904a68e1f5c8b9f0be6bf15283a1dcb9ca199e7.svg';
const img20 = 'http://localhost:3845/assets/e230017ee469204231908589189739e871a2af9e.svg';
const img21 = 'http://localhost:3845/assets/905ed310e1f0599cf89d9513f819723edbb613e.svg';
const img22 = 'http://localhost:3845/assets/483a28fbbeaaef742964b8f7dcf98b11a449c269.svg';

export interface FooterProps {
  className?: string;
}

export const Footer: React.FC<FooterProps> = ({ className = '' }) => {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        flexShrink: 0,
        width: '328px',
      }}
    >
      {/* App Download Section */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: spacing['3xl'],
          paddingBottom: spacing['3xl'],
          paddingLeft: 0,
          paddingRight: 0,
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.xl,
            alignItems: 'flex-start',
            maxWidth: '376px',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <div
            style={{
              display: 'flex',
              gap: spacing.xl,
              alignItems: 'center',
              flexShrink: 0,
            }}
          >
            <div style={{ position: 'relative', width: '64px', height: '64px', flexShrink: 0 }}>
              <img alt="App Logo" src={img11} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: spacing.xs,
                alignItems: 'flex-start',
                justifyContent: 'center',
                flexShrink: 0,
              }}
            >
              <p
                style={{
                  fontFamily: typography.desktopSubtitle2.fontFamily,
                  fontWeight: typography.desktopSubtitle2.fontWeight,
                  lineHeight: typography.desktopSubtitle2.lineHeight,
                  fontSize: typography.desktopSubtitle2.fontSize,
                  color: colors.night.grayAlpha900,
                  whiteSpace: 'nowrap' as const,
                  flexShrink: 0,
                }}
              >
                Приложение Столото
              </p>
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  fontFamily: typography.desktopCaption.fontFamily,
                  fontWeight: typography.desktopCaption.fontWeight,
                  justifyContent: 'center',
                  lineHeight: 0,
                  fontSize: typography.desktopCaption.fontSize,
                  color: colors.night.grayAlpha500,
                  width: '260px',
                }}
              >
                <p style={{ lineHeight: typography.desktopCaption.lineHeight }}>
                  Узнавайте о выигрышах и специальных акциях в приложении
                </p>
              </div>
            </div>
          </div>
          <div style={{ width: '100%' }}>
            <Button variant="white" size="m" className="w-full">
              Скачать
            </Button>
          </div>
        </div>
      </div>

      {/* Support Section */}
      <div
        style={{
          borderTop: `1px solid ${colors.night.grayAlpha200}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: spacing['3xl'],
          paddingBottom: spacing['3xl'],
          paddingLeft: 0,
          paddingRight: 0,
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.xl,
            alignItems: 'flex-start',
            maxWidth: '376px',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <p
            style={{
              fontFamily: typography.mobileBodyL.fontFamily,
              fontWeight: typography.mobileBodyL.fontWeight,
              lineHeight: typography.mobileBodyL.lineHeight,
              fontSize: '17px',
              color: colors.night.grayAlpha900,
              whiteSpace: 'nowrap' as const,
              flexShrink: 0,
            }}
          >
            Поддержка
          </p>
          <div style={{ width: '100%' }}>
            <Button variant="white" size="m" className="w-full">
              8 900 555-00-55
            </Button>
          </div>
          <div style={{ width: '100%' }}>
            <Button variant="white" size="m" className="w-full">
              <img alt="Telegram" src={img12} style={{ width: '20px', height: '20px', marginRight: spacing.xs }} />
              Начать чат
            </Button>
          </div>
        </div>
      </div>

      {/* Social Media Section */}
      <div
        style={{
          borderTop: `1px solid ${colors.night.grayAlpha200}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: spacing['3xl'],
          paddingBottom: spacing['3xl'],
          paddingLeft: 0,
          paddingRight: 0,
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.xl,
            alignItems: 'flex-start',
            maxWidth: '376px',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <p
            style={{
              fontFamily: typography.mobileBodyL.fontFamily,
              fontWeight: typography.mobileBodyL.fontWeight,
              lineHeight: typography.mobileBodyL.lineHeight,
              fontSize: '17px',
              color: colors.night.grayAlpha900,
              whiteSpace: 'nowrap' as const,
              flexShrink: 0,
            }}
          >
            Мы в соцсетях
          </p>
          <div
            style={{
              display: 'flex',
              gap: spacing.md,
              alignItems: 'flex-start',
              flexShrink: 0,
            }}
          >
            {[img13, img14, img15, img16, img17].map((icon, index) => (
              <div
                key={index}
                style={{
                  background: colors.night.grayAlpha100,
                  overflow: 'hidden',
                  borderRadius: borderRadius.xl,
                  width: '48px',
                  height: '48px',
                  flexShrink: 0,
                  position: 'relative',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    left: '50%',
                    width: '24px',
                    height: '24px',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                  }}
                >
                  <img alt={`Social ${index}`} src={icon} style={{ width: '100%', height: '100%' }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods Section */}
      <div
        style={{
          borderTop: `1px solid ${colors.night.grayAlpha200}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: spacing['3xl'],
          paddingBottom: spacing['3xl'],
          paddingLeft: 0,
          paddingRight: 0,
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.xl,
            alignItems: 'flex-start',
            maxWidth: '376px',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <p
            style={{
              fontFamily: typography.mobileBodyL.fontFamily,
              fontWeight: typography.mobileBodyL.fontWeight,
              lineHeight: typography.mobileBodyL.lineHeight,
              fontSize: '17px',
              color: colors.night.grayAlpha900,
              whiteSpace: 'nowrap' as const,
              flexShrink: 0,
            }}
          >
            Способы оплаты
          </p>
          <div
            style={{
              display: 'flex',
              gap: spacing.md,
              alignItems: 'flex-start',
              flexShrink: 0,
            }}
          >
            <div style={{ height: '24px', position: 'relative', width: '56px', flexShrink: 0 }}>
              <img alt="Visa" src={img18} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
            </div>
            <div style={{ height: '24px', position: 'relative', width: '40px', flexShrink: 0 }}>
              <img alt="Mastercard" src={img19} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
            </div>
            <div style={{ height: '24px', position: 'relative', width: '40px', flexShrink: 0 }}>
              <img alt="Maestro" src={img20} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
            </div>
            <div style={{ height: '24px', position: 'relative', width: '61.5px', flexShrink: 0 }}>
              <BrandMirHorizontal />
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: spacing.xs,
              alignItems: 'center',
              flexShrink: 0,
              width: '100%',
            }}
          >
            <div style={{ position: 'relative', width: '48px', height: '48px', flexShrink: 0 }}>
              <img alt="Padlock" src={img21} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
            </div>
            <div
              style={{
                flex: '1 1 0',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: typography.desktopCaption.fontFamily,
                fontWeight: typography.desktopCaption.fontWeight,
                justifyContent: 'center',
                lineHeight: 0,
                minHeight: 0,
                minWidth: 0,
                fontSize: typography.desktopCaption.fontSize,
                color: colors.light.gray500,
                flexShrink: 0,
              }}
            >
              <p style={{ lineHeight: typography.desktopCaption.lineHeight }}>
                Мы гарантируем безопасность всех способов оплаты и не сохраняем ваши данные
              </p>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              gap: spacing.sm,
              alignItems: 'center',
              flexShrink: 0,
              width: '100%',
            }}
          >
            <div style={{ position: 'relative', width: '24px', height: '24px', flexShrink: 0 }}>
              <div style={{ position: 'absolute', inset: '8.33%' }}>
                <div style={{ position: 'absolute', inset: 0 }}>
                  <img alt="Info" src={img22} style={{ display: 'block', maxWidth: 'none', width: '100%', height: '100%' }} />
                </div>
              </div>
            </div>
            <div
              style={{
                flex: '1 1 0',
                display: 'flex',
                flexDirection: 'column',
                fontFamily: typography.mobileBodyS.fontFamily,
                fontWeight: typography.mobileBodyS.fontWeight,
                justifyContent: 'center',
                lineHeight: 0,
                minHeight: 0,
                minWidth: 0,
                fontSize: typography.mobileBodyS.fontSize,
                color: colors.night.grayAlpha600,
                flexShrink: 0,
              }}
            >
              <p style={{ lineHeight: typography.mobileBodyS.lineHeight }}>
                Сумма суперпризов и джекпотов отображается без копеек.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Legal Links Section */}
      <div
        style={{
          borderTop: `1px solid ${colors.night.grayAlpha200}`,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          paddingTop: spacing['3xl'],
          paddingBottom: spacing['3xl'],
          paddingLeft: 0,
          paddingRight: 0,
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            fontFamily: typography.mobileBodyS.fontFamily,
            fontWeight: typography.mobileBodyS.fontWeight,
            gap: spacing.xl,
            alignItems: 'flex-start',
            lineHeight: 0,
            maxWidth: '376px',
            fontSize: typography.mobileBodyS.fontSize,
            color: colors.night.grayAlpha600,
            flexShrink: 0,
            width: '100%',
          }}
        >
          {[
            'Политика в отношении обработки персональных данных',
            'Правила программы лояльности',
            'Пользовательское соглашение',
            '© 2025 Акционерное общество «Технологическая Компания «Центр»',
            'Ответственная игра',
            'Положение о соблюдении антимонопольного законодательства АО «ТК «Центр»',
            'Политика Cookie',
          ].map((text, index) => (
            <div key={index} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', flexShrink: 0, width: '100%' }}>
              <p style={{ lineHeight: typography.mobileBodyS.lineHeight }}>{text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
