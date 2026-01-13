import React from 'react';

const imgVector = 'http://localhost:3845/assets/924762bdb06551ffbabc4966e9ed300b7318331b.svg';

export interface BrandMirHorizontalProps {
  className?: string;
}

export const BrandMirHorizontal: React.FC<BrandMirHorizontalProps> = ({ className = '' }) => {
  return (
    <div className={className} style={{ position: 'relative', width: '100%', height: '100%' }}>
      <div
        style={{
          position: 'absolute',
          inset: '16.67% 3.83% 16.67% 4.27%',
        }}
      >
        <img
          alt="MIR"
          src={imgVector}
          style={{
            display: 'block',
            maxWidth: 'none',
            width: '100%',
            height: '100%',
          }}
        />
      </div>
    </div>
  );
};
