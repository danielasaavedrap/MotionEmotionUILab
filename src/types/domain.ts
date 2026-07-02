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
  setEmotion: (e: EmotionId) => void;
  setUiMode: (m: UiMode) => void;
}
