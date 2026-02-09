
// Fix: Import React to provide access to the React namespace for type definitions
import React from 'react';

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BenefitItem {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
}
