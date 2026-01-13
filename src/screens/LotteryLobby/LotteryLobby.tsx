import React from 'react';
import { colors, spacing } from '../../design-system/tokens';
import { Header } from '../../components/Header';
import { Catalog } from '../../components/Catalog';
import { FAQ } from '../../components/FAQ';
import { Footer } from '../../components/Footer';

const imgRectangle240655930 = 'http://localhost:3845/assets/6c12e517e7bf6061ee8d42318053a46fd5f280bd.png';

export const LotteryLobby: React.FC = () => {
  const backgroundGradient = `url('data:image/svg+xml;utf8,<svg viewBox=\'0 0 360 2537\' xmlns=\'http://www.w3.org/2000/svg\' preserveAspectRatio=\'none\'><rect x=\'0\' y=\'0\' height=\'100%\' width=\'100%\' fill=\'url(%23grad)\' opacity=\'1\'/><defs><radialGradient id=\'grad\' gradientUnits=\'userSpaceOnUse\' cx=\'0\' cy=\'0\' r=\'10\' gradientTransform=\'matrix(1.1125e-13 -103.26 23.031 7.8417e-8 180 551.45)\'><stop stop-color=\'rgba(88,50,156,1)\' offset=\'0.19386\'/><stop stop-color=\'rgba(88,50,156,0.2)\' offset=\'1\'/></radialGradient></defs></svg>'), linear-gradient(90deg, rgb(18, 17, 26) 0%, rgb(18, 17, 26) 100%)`;

  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
        background: backgroundGradient,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Header authorization={true} className="" />
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing['4xl'],
          alignItems: 'flex-start',
          left: 0,
          paddingTop: spacing.xl,
          paddingBottom: 0,
          paddingLeft: spacing.xl,
          paddingRight: spacing.xl,
          top: '96px',
          width: '360px',
        }}
      >
        {/* Banner Section */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.xl,
            alignItems: 'flex-start',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <div
            style={{
              background: colors.dark.bg06,
              height: '110px',
              overflow: 'hidden',
              position: 'relative',
              borderRadius: borderRadius.lg,
              flexShrink: 0,
              width: '100%',
            }}
          >
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                height: '168.025px',
                alignItems: 'center',
                justifyContent: 'center',
                left: '-413.46px',
                top: '-23.33px',
                width: '768.749px',
              }}
            >
              <div
                style={{
                  flex: 'none',
                  transform: 'rotate(357.388deg)',
                }}
              >
                <div
                  style={{
                    height: '133.374px',
                    position: 'relative',
                    width: '763.496px',
                  }}
                >
                  <img
                    alt="Banner"
                    src={imgRectangle240655930}
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
              </div>
            </div>
            <div
              style={{
                position: 'absolute',
                background: `linear-gradient(to left, ${colors.dark.bg06}, rgba(6,4,15,0))`,
                height: '110px',
                left: '268.64px',
                top: 0,
                width: '206.137px',
              }}
            />
            <p
              style={{
                position: 'absolute',
                fontFamily: "'Roboto Flex', sans-serif",
                fontWeight: 600,
                lineHeight: '9.812px',
                left: '91.84px',
                fontSize: '8.177px',
                color: colors.white,
                whiteSpace: 'nowrap' as const,
                top: '56.93px',
              }}
            >
              БАННЕР
            </p>
            <p
              style={{
                position: 'absolute',
                fontFamily: "'Roboto Flex', sans-serif",
                fontWeight: 780,
                lineHeight: '8.177px',
                left: '91.84px',
                fontSize: '6.542px',
                color: colors.white,
                whiteSpace: 'nowrap' as const,
                top: '90.91px',
              }}
            >
              ИГРАЙТЕ ОНЛАЙ ПРЯМО СЕЙЧАС
            </p>
            <p
              style={{
                position: 'absolute',
                fontFamily: "'Roboto Flex', sans-serif",
                fontWeight: 700,
                lineHeight: '16.354px',
                left: '91.84px',
                fontSize: '14.719px',
                color: colors.white,
                whiteSpace: 'nowrap' as const,
                top: '67.58px',
              }}
            >
              МОМЕНТАЛЬНЫХ ЛОТЕРЕЙ
            </p>
            <div
              style={{
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                left: '252.93px',
                paddingLeft: '6.532px',
                paddingRight: '6.532px',
                paddingTop: '2.45px',
                paddingBottom: '2.45px',
                borderRadius: '12.248px',
                top: '8.39px',
                background: colors.gradient.banner,
              }}
            >
              <p
                style={{
                  fontFamily: "'Roboto Flex', sans-serif",
                  fontWeight: 700,
                  lineHeight: '5.716px',
                  fontSize: '4.899px',
                  color: colors.white,
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  width: '52.597px',
                }}
              >
                Выигрывает каждый 3-й билет
              </p>
            </div>
          </div>
          <Catalog className="" type="mobile" />
        </div>

        {/* FAQ Section */}
        <FAQ className="" />

        {/* Footer Section */}
        <Footer className="" />
      </div>
    </div>
  );
};
