import type { ClassValue } from 'clsx';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

type TParams = ClassValue[];

export function cn(...params: TParams) {
  return twMerge(clsx(params));
}
