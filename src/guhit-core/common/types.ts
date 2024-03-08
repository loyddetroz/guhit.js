export type CanvasOptions =
  | {
      isFullscreen?: true | null | undefined;
      selector?: string | null;
      width?: null | undefined;
      height?: null | undefined;
    }
  | {
      isFullscreen?: false | null | undefined;
      selector?: string | null;
      width: number;
      height: number;
    };
