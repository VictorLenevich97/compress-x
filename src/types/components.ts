import type { ForwardedRef } from 'react';

export interface IconProps {
  className?: string;
  style?: Record<string, string>;
  width?: string | number;
  height?: string | number;
  forwardRef?: ForwardedRef<HTMLElement>;
}
