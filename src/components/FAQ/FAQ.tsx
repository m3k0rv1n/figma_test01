import React, { useState } from 'react';
import { colors, typography, spacing } from '../../design-system/tokens';

const img10 = 'http://localhost:3845/assets/3731f8ed77830b01225a90a32961ea557128e9e1.svg';

export interface FAQProps {
  className?: string;
}

interface FAQItem {
  id: string;
  question: string;
}

const faqItems: FAQItem[] = [
  { id: '1', question: 'Как проходят розыгрыши' },
  { id: '2', question: 'Условия участия в розыгрыше' },
  { id: '3', question: 'Победители и их призы' },
  { id: '4', question: 'График будущих розыгрышей' },
];

export const FAQ: React.FC<FAQProps> = ({ className = '' }) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

  const toggleItem = (id: string) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: spacing['2xl'],
        height: '361px',
        alignItems: 'center',
        flexShrink: 0,
        width: '328px',
      }}
    >
      <p
        style={{
          fontFamily: typography.mobileH2.fontFamily,
          fontWeight: typography.mobileH2.fontWeight,
          lineHeight: typography.mobileH2.lineHeight,
          fontSize: typography.mobileH2.fontSize,
          color: colors.white,
          whiteSpace: 'nowrap' as const,
          flexShrink: 0,
        }}
      >
        Вопрос-ответ
      </p>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          paddingTop: 0,
          paddingBottom: '1px',
          paddingLeft: 0,
          paddingRight: 0,
          flexShrink: 0,
          width: '100%',
        }}
      >
        {faqItems.map((item, index) => (
          <div
            key={item.id}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-start',
              marginBottom: index < faqItems.length - 1 ? '-1px' : 0,
              paddingTop: 0,
              paddingBottom: '1px',
              paddingLeft: 0,
              paddingRight: 0,
              position: 'relative',
              flexShrink: 0,
              width: '100%',
              isolation: 'isolate',
              zIndex: faqItems.length - index,
            }}
          >
            <div
              style={{
                display: 'flex',
                gap: spacing['3xl'],
                height: '79px',
                alignItems: 'center',
                marginBottom: '-1px',
                flexShrink: 0,
                width: '100%',
                zIndex: 2,
                cursor: 'pointer',
              }}
              onClick={() => toggleItem(item.id)}
            >
              <p
                style={{
                  flex: '1 1 0',
                  fontFamily: typography.mobileBodyL.fontFamily,
                  fontWeight: typography.mobileBodyL.fontWeight,
                  lineHeight: typography.mobileBodyL.lineHeight,
                  minHeight: 0,
                  minWidth: 0,
                  fontSize: typography.mobileBodyL.fontSize,
                  color: colors.white,
                  flexShrink: 0,
                }}
              >
                {item.question}
              </p>
              <div
                style={{
                  position: 'relative',
                  width: '20px',
                  height: '20px',
                  flexShrink: 0,
                  transform: openItems.has(item.id) ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.2s ease',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    bottom: '29.17%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    left: '25%',
                    right: '25%',
                    top: '37.5%',
                  }}
                >
                  <div
                    style={{
                      flex: 'none',
                      height: '10px',
                      transform: 'rotate(270deg)',
                      width: '6.667px',
                    }}
                  >
                    <div
                      style={{
                        position: 'relative',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          inset: '2.92% 5.9% 2.92% 7.2%',
                        }}
                      >
                        <img
                          alt="Arrow"
                          src={img10}
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
              </div>
            </div>
            {index < faqItems.length - 1 && (
              <div
                style={{
                  position: 'absolute',
                  background: colors.night.grayAlpha200,
                  bottom: 0,
                  height: '1px',
                  left: 0,
                  right: 0,
                  zIndex: 1,
                }}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
