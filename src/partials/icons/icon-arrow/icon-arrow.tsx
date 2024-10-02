import React from 'react';
import type { IconProps } from 'src/types/components';

export const IconArrow: React.FC<IconProps> = (props) => (
  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" {...props}>
    <path
      d="M1.41 0.59L6 5.17L10.59 0.59L12 2L6 8L0 2L1.41 0.59Z"
      fill="currentColor"
    />
  </svg>
);
