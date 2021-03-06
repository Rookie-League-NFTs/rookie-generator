const { createSVGWindow } = require('svgdom')
const { SVG, registerWindow } = require('@svgdotjs/svg.js')

export const buildTemplate = () => {
  const window = createSVGWindow()
  const document = window.document
  // register window and document
  registerWindow(window, document)
  
  const template = SVG(document.documentElement).size(500,500);

  const LIGHT_BLUE = '#D6E1FF';
  const MEDIUM_BLUE = '#9BB7FF';
  const DARK_BLUE = '#0047FF';
  const WHITE = '#FFFFFF'
  const RED = '#BF3333';

  const CONTAINER_MARGIN = 11;
  const TEXT_MARGIN = 30;

  const textAttributes = {
    'font-family': 'Monospace',
    'font-size': '20px',
}

  // Rectangles
  template.rect({width: 480, height: 480, fill: MEDIUM_BLUE, x: 10, y: 10, stroke: DARK_BLUE, 'stroke-width': 2 }) // BACKGROUND
  template.rect({width: 478, height: 49, fill: LIGHT_BLUE, x: CONTAINER_MARGIN, y: 92 }) // LIGHT BLUE RECTANGLE
  template.rect({width: 478, height: 34.8, fill: RED, x: CONTAINER_MARGIN, y: 141 }) // RED RECTANGLE
  template.rect({width: 478, height: 34.8, fill: LIGHT_BLUE, x: CONTAINER_MARGIN, y: 175.8 }) // LIGHT BLUE RECTANGLE
  template.rect({width: 478, height: 34.8, fill: LIGHT_BLUE, x: CONTAINER_MARGIN, y: 245.4 }) // LIGHT BLUE RECTANGLE
  template.rect({width: 478, height: 34.8, fill: RED, x: CONTAINER_MARGIN, y: 315 }) // RED RECTANGLE
  template.rect({width: 478, height: 34.8, fill: LIGHT_BLUE, x: CONTAINER_MARGIN, y: 349.8 }) // LIGHT BLUE RECTANGLE
  template.rect({width: 478, height: 34.8, fill: LIGHT_BLUE, x: CONTAINER_MARGIN, y: 419.4 }) // LIGHT BLUE RECTANGLE

  // Paths
  template.path({d: 'M425.939 80L394 62L394 10L456 10L456 62L425.939 80Z', fill: DARK_BLUE}) // Background Logo
  template.path({d: 'M454 12H396V61L426 77.5L454 61V12Z', stroke: WHITE, fill: DARK_BLUE}) // Logo Border
  template.path({d: 'M423.195 43.1406C422.773 43.1406 422.387 42.9766 422.035 42.6484C419.668 40.4297 417.066 38.8906 414.23 38.0312C414.316 40.3047 414.359 41.5664 414.359 41.8164C414.359 42.2617 414.203 42.6406 413.891 42.9531C413.578 43.2578 413.188 43.4102 412.719 43.4102C412.25 43.4102 411.859 43.2578 411.547 42.9531C411.234 42.6406 411.078 42.2617 411.078 41.8164C411.078 41.2305 411.086 40.3555 411.102 39.1914C411.117 38.0195 411.125 37.1406 411.125 36.5547L411.148 27.0977C411.148 26.5898 411.301 26.1289 411.605 25.7148C412.004 25.1836 412.555 24.9453 413.258 25C415.156 25.1406 416.129 25.2148 416.176 25.2227C417.27 25.3555 418.199 25.6172 418.965 26.0078C422.301 27.6875 423.969 29.7695 423.969 32.2539C423.969 33.2773 423.617 34.1836 422.914 34.9727C422.219 35.7539 421.172 36.4141 419.773 36.9531C421.844 38.1094 423.402 39.2891 424.449 40.4922C424.723 40.8047 424.859 41.1523 424.859 41.5352C424.859 41.9727 424.695 42.3516 424.367 42.6719C424.039 42.9844 423.648 43.1406 423.195 43.1406ZM415.684 28.3984C415.621 28.3906 415.164 28.3594 414.312 28.3047V34.5273C414.508 34.5352 414.68 34.5391 414.828 34.5391C416.742 34.5391 418.16 34.3008 419.082 33.8242C419.48 33.6211 419.844 33.3516 420.172 33.0156C420.508 32.6797 420.676 32.4258 420.676 32.2539C420.676 31.3789 420.121 30.5352 419.012 29.7227C417.957 28.957 416.848 28.5156 415.684 28.3984Z', fill: WHITE}) // R
  template.path({d: 'M438.211 51.5547C437.289 51.9609 435.863 52.3242 433.934 52.6445C432.168 52.9414 430.719 53.0898 429.586 53.0898C427.672 53.0898 426.715 52.25 426.715 50.5703C426.715 50.7031 426.793 49.4648 426.949 46.8555C427.152 43.4648 427.254 39.6914 427.254 35.5352C427.254 35.0898 427.406 34.7109 427.711 34.3984C428.023 34.0859 428.414 33.9297 428.883 33.9297C429.352 33.9297 429.742 34.0859 430.055 34.3984C430.367 34.7109 430.523 35.0898 430.523 35.5352C430.523 39.6992 430.418 43.5352 430.207 47.043C430.137 47.668 430.062 48.625 429.984 49.9141C431.836 49.8828 434.211 49.4297 437.109 48.5547C437.289 48.5 437.461 48.4727 437.625 48.4727C438.117 48.4727 438.516 48.6523 438.82 49.0117C439.094 49.332 439.23 49.6914 439.23 50.0898C439.23 50.7617 438.891 51.25 438.211 51.5547Z', fill: WHITE}) // R

  // Text Categories
  template.text('PHYSICAL').attr({...textAttributes, fill: WHITE, x: TEXT_MARGIN, y: 164}) // PHYSICAL
  template.text('MENTAL').attr({...textAttributes, fill: WHITE, x: TEXT_MARGIN, y: 339}) // MENTAL

  // Text Attributes
  template.text('STAMINA').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 199})
  template.text('SPEED').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 234})
  template.text('STRENGTH').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 269})
  template.text('AGILITY').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 304})

  // Text Stamina
  template.text('CREATIVITY').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 373})
  template.text('INFLUENCE').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 408})
  template.text('AGGRESSION').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 443})
  template.text('FOCUS').attr({...textAttributes, fill: DARK_BLUE, x: TEXT_MARGIN, y: 478})

  return template;
}