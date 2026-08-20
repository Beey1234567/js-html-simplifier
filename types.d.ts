interface engine {
    /*
      Shows HTML given the designated objects.
    */
    ShowHTML(...Elements: HTMLElement[]): void;
    /*
      Hides HTML given the designated objects.
    */
    HideHTML(...Elements: HTMLElement[]): void;
    /*
      Changes the given HTML element's CSS to the given inline CSS.
    */
    ChangeCSS(Element: HTMLElement, CSS: string): void;
    /*
      Colors HTML to the given dcolor on the given objects
    */
    ColorHTML(Color: string, ...Elements: HTMLElement[]): void;
    /*
      Gets HTML via the specified method and value to pass to document
    */
    GetHTML(Value: string, Method: string): HTMLElement | HtmlElement[] | null | undefined;
}

declare const jhs: engine;
export default jhs;
