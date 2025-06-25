export interface User {
  id: string;
  name: string;
  email: string;
  memberSince: string;
  ninjaRank: 'Bronze' | 'Silver' | 'Gold' | 'Shadow Master';
  xp: number;
  raffleEntries: number;
  totalSpent: number;
  avatar: string;
}

export interface Sneaker {
  id: string;
  name: string;
  brand: string;
  price: number;
  image: string;
  category: 'Early Access' | 'Exclusive Drops' | 'Archive';
  sizes: string[];
  releaseDate: string;
  isExclusive: boolean;
}

export interface Raffle {
  id: string;
  sneaker: Sneaker;
  endDate: string;
  totalEntries: number;
  maxEntries: number;
  entryPrice: number;
  winners: string[];
}

export interface NewsArticle {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  publishDate: string;
  category: string;
  readTime: number;
}