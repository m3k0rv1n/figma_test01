import React from 'react';
import { colors, typography, spacing, borderRadius, shadows } from '../../design-system/tokens';
import { Card } from '../../design-system/components/Card';
import { CardLotteryButton } from '../CardLotteryButton';
import { Button } from '../../design-system/components/Button';
import './Catalog.css';

// Game images - using placeholder paths (images need to be downloaded from Figma and placed in public/assets/)
const img = '/figma_test01/assets/078d253836c401e4d36788a37fa5cfdd2d6ea5d2.png';
const img2 = '/figma_test01/assets/142226be8abcbd39dc6f908e2f7eacf4b99bc176.png';
const img3 = '/figma_test01/assets/2c80c8cafaca1443e5658bf74c5fcf94e21dfeab.png';
const img4 = '/figma_test01/assets/7821d3471b43a56086d4d956b99626382ae146b9.png';
const img5 = '/figma_test01/assets/123b39c9e72e309d858c0f52bb11ce0cd682a8c2.png';
const imgTxt = '/figma_test01/assets/698ef10fc50fcccf014d90d2b45c11ccb96b265b.png';
const imgTxt1 = '/figma_test01/assets/649a50221904265d8b54a4ff4d6517a5e43734b9.png';
const imgTxt2 = '/figma_test01/assets/8f427de104a5a751863eab6029fc20e0ff581b72.png';

const img1 = '/figma_test01/assets/3558c6d60a6e38a1f701debc74c17286fda652d9.svg';

export interface CatalogProps {
  className?: string;
  type?: 'desktop' | 'tablet' | 'mobile';
}

interface GameCard {
  id: string;
  image: string;
  superPrize: string;
  price: string;
}

const gameCards: GameCard[] = [
  { id: '1', image: img, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
  { id: '2', image: img2, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
  { id: '3', image: img3, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
  { id: '4', image: imgTxt, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
  { id: '5', image: imgTxt1, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
  { id: '6', image: imgTxt2, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
  { id: '7', image: img4, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
  { id: '8', image: img5, superPrize: 'от 999 999 999 ₽', price: '50 ₽' },
];

const GameCard: React.FC<{ game: GameCard }> = ({ game }) => {
  return (
    <Card className="">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.md,
          alignItems: 'flex-start',
        }}
      >
      {/* Super Prize Info */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flexShrink: 0,
          width: '100%',
          whiteSpace: 'nowrap' as const,
        }}
      >
        <p
          style={{
            fontFamily: typography.mobileBodyM.fontFamily,
            fontWeight: typography.mobileBodyL.fontWeight,
            lineHeight: '16px',
            fontSize: '12px',
            color: colors.night.grayAlpha500,
            flexShrink: 0,
          }}
        >
          Суперприз
        </p>
        <p
          style={{
            fontFamily: typography.mobileBodyL.fontFamily,
            fontWeight: typography.mobileBodyL.fontWeight,
            lineHeight: '18px',
            fontSize: typography.mobileBodyS.fontSize,
            color: colors.white,
            flexShrink: 0,
          }}
        >
          {game.superPrize}
        </p>
      </div>

      {/* Game Image */}
      <div
        style={{
          aspectRatio: '140/140',
          position: 'relative',
          borderRadius: borderRadius.lg,
          flexShrink: 0,
          width: '100%',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            borderRadius: borderRadius.lg,
          }}
        >
          <div
            style={{
              position: 'absolute',
              background: colors.dark.bg05,
              inset: 0,
              borderRadius: borderRadius.lg,
            }}
          />
          <img
            alt={`Game ${game.id}`}
            src={game.image}
            style={{
              position: 'absolute',
              maxWidth: 'none',
              objectFit: 'cover',
              objectPosition: '50% 50%',
              borderRadius: borderRadius.lg,
              width: '100%',
              height: '100%',
            }}
          />
        </div>
      </div>

        {/* Buttons */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: spacing.xs,
            alignItems: 'center',
            flexShrink: 0,
            width: '100%',
          }}
        >
          <CardLotteryButton size="s" price={game.price} />
          <div style={{ width: '100%' }}>
            <Button variant="demo" size="s" className="w-full">
              Демо
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export const Catalog: React.FC<CatalogProps> = ({ className = '', type = 'mobile' }) => {
  if (type === 'mobile') {
    return (
      <div
        className={className}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing.xl,
          alignItems: 'flex-start',
          flexShrink: 0,
          width: '100%',
        }}
      >
        <p
          style={{
            fontFamily: typography.mobileH1.fontFamily,
            fontWeight: typography.mobileH1.fontWeight,
            lineHeight: '24px',
            fontSize: typography.mobileH1.fontSize,
            color: colors.white,
            textAlign: 'center',
            flexShrink: 0,
            width: '100%',
          }}
        >
          Моментальные лотереи
        </p>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: spacing.lg,
            alignItems: 'flex-start',
            flexShrink: 0,
            width: '100%',
            justifyContent: 'flex-start',
          }}
        >
          {gameCards.map((game) => (
            <div
              key={game.id}
              style={{
                flex: '1 1 0',
                minWidth: '150px',
                maxWidth: 'calc(50% - 6px)',
              }}
            >
              <GameCard game={game} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Desktop version (simplified for now)
  return (
    <div className={className}>
      <p
        style={{
          fontFamily: typography.desktopH1.fontFamily,
          fontWeight: typography.desktopH1.fontWeight,
          lineHeight: typography.desktopH1.lineHeight,
          fontSize: typography.desktopH1.fontSize,
          color: colors.white,
          whiteSpace: 'nowrap' as const,
          flexShrink: 0,
        }}
      >
        Моментальные лотереи
      </p>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: spacing.xl,
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: '1136px',
        }}
      >
        {gameCards.map((game) => (
          <div key={game.id} style={{ flex: '1 1 0', minWidth: '250px' }}>
            <GameCard game={game} />
          </div>
        ))}
      </div>
    </div>
  );
};
