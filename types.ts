import React, { ReactNode } from 'react';

export interface SlideProps {
  isActive: boolean;
  data: SlideContent;
}

export type LayoutType = 'hero' | 'text-left' | 'list' | 'grid' | 'portfolio' | 'schedule' | 'center' | 'profile' | 'finale';

export interface SlideContent {
  id: number;
  layout: LayoutType;
  title: string;
  subtitle?: string;
  items?: string[];
  mentorComment?: string;
  highlight?: string;
  extraData?: any; // For schedule, portfolio links, etc.
}

export enum SlideDirection {
  NEXT = 1,
  PREV = -1
}