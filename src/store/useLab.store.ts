import { create } from 'zustand';
import type { EmotionId, MotionEmotionState, UiMode } from '../types/domain';
import { persist } from 'zustand/middleware';

export const useLabStore = create<MotionEmotionState>()(
  persist(
    (set) => ({
      Emotion: 'calma',
      uiMode: 'light',
      setEmotion: (e: EmotionId) => set({ Emotion: e }),
      setUiMode: (m: UiMode) => set({ uiMode: m }),
    }),
    { name: 'useLab-store' },
  ),
);
