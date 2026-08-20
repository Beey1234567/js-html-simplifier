export function ShowHTML(...Elements) {
    Elements.forEach((element) => {
        element.style.display = 'block';
    });
}

export function HideHTML(...Elements) {
    Elements.forEach((element) => {
        element.style.display = 'none';
    });
}

export function ChangeCSS(Element, CSS) {
    Element.style = CSS;
}

export function ColorHTML(Color, ...Elements) {
  Elements.forEach((element) => {
    element.style.color = Color;
  });
}

export function GetHTML(Value, Method) {

    Method = Method.toLowerCase();

    if (Method == "id") {
      return document.getElementById(Value);
    } else if (Method == "class") {
      return document.getElementsByClassName(Value);
    } else if (Method == "name") {
      return document.getElementsByName(Value);
    } else if (Method == "tag") {
      return document.getElementsByTagName(Value);
    } else if (Method = "query") {
      return document.querySelector(Value);
    } else if (Method = "queryall") {
      return document.querySelectorAll(Value);
    } else {
      console.warn("unsupported method");
      return;
    }
}
