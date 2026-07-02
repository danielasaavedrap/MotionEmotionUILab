export type EmotionId =
  | 'neutral'
  | 'calm'
  | 'focus'
  | 'energy'
  | 'happy'
  | 'tension'
  | string;
export type UiMode = 'light' | 'dark';

export interface MotionEmotionState {
  Emotion: EmotionId;
  uiMode: UiMode;
  setEmotion: (_e: EmotionId) => void;
  setUiMode: (_m: UiMode) => void;
}
