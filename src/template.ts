import { templateObject } from "./templateObject";
const { createSVGWindow } = require('svgdom')
const { SVG, registerWindow } = require('@svgdotjs/svg.js')

export const buildTemplate = () => {
  const window = createSVGWindow()
  const document = window.document
  // register window and document
  registerWindow(window, document)
  
  const template = SVG(document.documentElement).size(1000,1000);

  const FILL_COLOR = 'white';
  const BACKGROUND_FILL_COLOR = '#1F1C1C'

  template.style('.text { font-size: 40px; font-weight: bold; font-family: Arial }')

  // Background
  const background = template.rect({width: 1000, height: 1000});
  background.fill(BACKGROUND_FILL_COLOR);

  // Lines
  template.line({x1:72, y1:954.5, x2:302, y2:954.5, stroke: FILL_COLOR});
  template.line({x1:698, y1:954.5, x2:928, y2:954.5, stroke: FILL_COLOR});

  // Circle 
  template.circle({cx:874, cy:118, r:32.5, fill: FILL_COLOR, stroke: FILL_COLOR, strokeWidth: 5});

  // Logo 
  template.path({fill: BACKGROUND_FILL_COLOR, d: 'M871.787 101.345C871.696 101.344 871.606 101.345 871.516 101.346C870.443 101.366 869.445 101.575 868.774 101.902L861.877 105.905C862.128 105.961 862.378 106.028 862.624 106.112C864.395 106.72 866.017 107.981 867.707 109.671L889.9 131.563L898.204 127.007L876.371 102.868C875.484 102.065 874.065 101.545 872.609 101.392C872.334 101.364 872.059 101.348 871.787 101.345ZM874.705 103.36L880.694 109.684C875.969 109.168 874.871 111.038 873.616 113.191L867.737 107.11L874.705 103.36ZM860.494 107.57C860.421 107.568 860.348 107.568 860.274 107.57C859.559 107.589 858.817 107.781 857.992 108.174C857.681 108.408 857.378 108.706 857.079 109.081C854.436 112.39 853.956 115.145 854.466 117.641C854.975 120.137 856.571 122.425 858.353 124.455C859.719 126.01 861.313 126.915 863.324 127.319C865.335 127.723 867.778 127.597 870.704 126.963C874.113 126.224 877.473 127.826 880.529 129.799C883.207 131.529 885.725 133.603 887.807 134.921L888.708 132.98L866.404 110.978L866.402 110.976C864.81 109.384 863.37 108.319 862.025 107.858C861.51 107.682 861.007 107.582 860.494 107.57ZM898.134 129.15L890.603 133.283L889.528 135.597L896.792 131.658L898.134 129.15Z'})

  // Rectangles
  template.rect({x:73, y:243, height: 4, width: 150, fill: FILL_COLOR});
  template.rect({x:73, y:642, height: 4, width: 123, fill: FILL_COLOR});

  // Paths
  templateObject.children.map(pathItem => {
    const pathCoordinates = pathItem.attributes.d;
    const path = template.path(pathCoordinates)
    path.fill(FILL_COLOR);
  });

  return template;
}