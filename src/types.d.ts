/**
 * Global surface exposed by the ported rendering engine (assets/engine.js, a classic script).
 * The engine declares its handlers as globals (matching the approved design source); the Angular
 * host calls the renamed navigation entry-points and shares the same window namespace.
 */
interface Window {
  // navigation shims installed by Angular (called from engine-rendered inline handlers)
  showPage?: (name: string) => void;
  openProduct?: (i: number) => void;
  openProject?: (i: number) => void;
  openService?: (i: number) => void;

  // renamed internal renderers exposed by the engine for the Angular router to drive
  _renderPage?: (name: string) => void;
  _openProduct?: (i: number) => void;
  _openProject?: (i: number) => void;
  _openService?: (i: number) => void;
  renderSearchResults?: () => void;

  __ntgEngineReady?: boolean;
  DATA?: any[];
}
