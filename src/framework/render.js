const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend',
};

function createElement(template) {
  const newElement = document.createElement('div');
  newElement.innerHTML = template.trim();
  return newElement.firstElementChild;
}

function render(component, container, place = RenderPosition.BEFOREEND) {
  if (!component?.element) {
    throw new Error('Component must have an "element" property');
  }
  if (!container) {
    throw new Error('Container element does not exist');
  }
  container.insertAdjacentElement(place, component.element);
}

export { RenderPosition, createElement, render };
