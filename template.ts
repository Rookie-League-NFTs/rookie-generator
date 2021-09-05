import gsap from "gsap";
const { createSVGWindow } = require('svgdom')
const window = createSVGWindow()
const document = window.document
const { SVG, registerWindow } = require('@svgdotjs/svg.js')

// register window and document
registerWindow(window, document)

export const template = SVG(document.documentElement);

template.text('test')

// const url = 'http://www.w3.org/2000/svg';
// export const template = canvas.createElementNS(url, 'svg');

// const path1 = document.createElementNS(url, "path");
// gsap.set(template, {
//   attr: {
//   width:"1000", 
//   height:"1000", 
//   viewBox:"0 0 1000 1000", 
//   fill:"none",
//    xmlns:"http://www.w3.org/2000/svg"
//   }});

// gsap.set(path1, {
//   attr: {
//     fill: "white",
//     d: "M93.6836 85.4141C93.8398 85.4336 93.918 85.5117 93.918 85.6484C93.918 85.8047 93.8398 85.8828 93.6836 85.8828C93.5273 85.8828 93.4492 85.8047 93.4492 85.6484C93.4688 85.4922 93.5469 85.4141 93.6836 85.4141ZM96.6133 85.4141C96.8086 85.5703 97.1992 85.7656 97.7852 86C98.3125 86.3711 98.8203 86.6055 99.3086 86.7031L99.4258 86.9375C99.4258 87.0547 99.3086 87.1719 99.0742 87.2891H94.8555C94.7383 87.2891 94.6211 87.4062 94.5039 87.6406H91.457V87.7578H99.543L100.012 87.4062C100.168 87.4062 100.246 87.5234 100.246 87.7578H100.48C101.73 87.7578 102.355 87.875 102.355 88.1094V88.6953C102.551 88.6953 102.824 88.9297 103.176 89.3984V89.5156C103.176 89.6719 103.098 89.75 102.941 89.75H102.473C102.238 89.4375 101.73 89.2422 100.949 89.1641C100.949 88.9102 100.754 88.6758 100.363 88.4609H96.4961C96.4961 88.7734 96.2617 88.9297 95.793 88.9297H95.207C95.207 89.1641 95.0898 89.2812 94.8555 89.2812V89.3984C95.6367 89.4766 96.2227 89.5156 96.6133 89.5156H97.082C97.2383 89.5156 97.3164 89.6328 97.3164 89.8672H99.4258C99.5039 89.8672 99.543 89.9062 99.543 89.9844L99.7773 89.8672H103.293C103.371 89.8672 103.605 90.1406 103.996 90.6875V90.8047C103.996 90.9609 103.879 91.0391 103.645 91.0391V91.5078C104.191 91.5078 104.582 91.7812 104.816 92.3281V93.1484C104.602 93.3633 104.445 93.793 104.348 94.4375L104.465 94.6719V96.1953C104.465 96.4297 103.645 96.5469 102.004 96.5469C102.004 96.7812 101.73 96.8984 101.184 96.8984V97.0156H103.293C103.645 97.3281 103.84 97.4844 103.879 97.4844H105.051C105.207 97.5039 105.285 97.582 105.285 97.7188V98.4219C105.285 98.6758 105.324 98.8711 105.402 99.0078C105.402 99.9258 105.207 100.551 104.816 100.883V102.875L104.465 103.344V104.516C104.152 104.828 103.957 105.219 103.879 105.688C103.703 105.688 103.586 105.922 103.527 106.391C103.43 106.391 102.922 106.898 102.004 107.914H100.012C99.7773 107.914 99.6602 107.875 99.6602 107.797L99.0742 107.914H96.7305C96.4961 107.914 96.3789 107.875 96.3789 107.797L95.793 107.914H92.2773V108.031C92.707 108.031 93.0195 108.148 93.2148 108.383H98.7227L99.1914 108.031H100.129C100.285 108.031 100.363 108.148 100.363 108.383H100.949C100.949 108.148 101.027 108.031 101.184 108.031H101.301C101.457 108.051 101.535 108.129 101.535 108.266V108.734C101.184 109.281 100.754 109.555 100.246 109.555V109.672L101.301 111.547C101.457 111.566 101.535 111.645 101.535 111.781V114.008C101.535 114.164 101.262 114.242 100.715 114.242V114.359H102.473C102.629 114.359 102.746 114.789 102.824 115.648C103.02 115.648 103.176 115.961 103.293 116.586C103.41 116.586 103.645 116.82 103.996 117.289V118.461C104.27 118.676 104.504 119.066 104.699 119.633C104.797 119.633 104.992 119.828 105.285 120.219V121.391C105.598 121.742 105.754 121.938 105.754 121.977C105.754 122.133 105.48 122.211 104.934 122.211V122.328C106.223 122.406 107.199 122.445 107.863 122.445H107.98C108.254 122.836 108.762 123.031 109.504 123.031C109.504 123.129 109.934 123.598 110.793 124.438V124.555C110.793 124.711 110.52 124.789 109.973 124.789V124.906C111.066 124.906 111.613 125.062 111.613 125.375C111.613 125.609 111.77 125.883 112.082 126.195V126.664C112.082 127.211 111.809 127.484 111.262 127.484C111.262 127.641 110.871 127.719 110.09 127.719V127.836C110.148 127.836 110.383 127.875 110.793 127.953L111.496 127.836L111.613 128.07V128.773C111.613 128.93 111.535 129.008 111.379 129.008H109.152C109.152 129.242 108.918 129.359 108.449 129.359V129.477C109.23 129.477 109.621 129.633 109.621 129.945H110.207C110.207 129.711 110.285 129.594 110.441 129.594H110.559C110.715 129.613 110.793 129.691 110.793 129.828C110.52 130.375 109.973 130.648 109.152 130.648C109.152 130.766 109.035 130.883 108.801 131H98.3711C97.8047 130.395 97.2969 130.082 96.8477 130.062L95.9102 129.008V127.016C95.9102 126.898 96.3008 126.625 97.082 126.195H98.7227V126.078C97.082 126.078 96.2617 125.883 96.2617 125.492C96.0273 125.492 95.9102 125.414 95.9102 125.258V124.438L97.668 123.5C97.668 122.797 97.7461 122.445 97.9023 122.445L98.3711 122.797C98.3711 122.484 98.918 122.328 100.012 122.328V122.211H97.5508C97.3555 122.211 97.1992 121.898 97.082 121.273C96.8672 121.273 96.7109 120.844 96.6133 119.984C96.457 119.984 96.3789 119.906 96.3789 119.75V118.109C96.0664 117.875 95.793 117.367 95.5586 116.586C95.5586 116.43 95.1289 115.961 94.2695 115.18V113.891C93.4102 113.051 92.9805 112.582 92.9805 112.484H88.4102V112.836C88.4102 113.148 88.4492 113.305 88.5273 113.305L88.4102 114.125V121.625C88.4102 121.781 88.332 121.859 88.1758 121.859H87.0039L86.5352 122.211H80.9102V122.328H82.7852C82.9414 122.523 83.0195 122.68 83.0195 122.797H83.6055C83.6055 122.484 84.4258 122.328 86.0664 122.328H87.8242C88.3125 122.328 88.7422 122.523 89.1133 122.914C89.1133 122.68 89.1914 122.562 89.3477 122.562H89.4648L89.9336 122.914H91.1055C92.3555 123.969 93.1367 124.867 93.4492 125.609V125.844C93.4492 126 93.3711 126.078 93.2148 126.078H89.8164V126.195H93.332L93.4492 126.43V127.836C93.2344 128.09 93.0391 128.441 92.8633 128.891L92.3945 129.711C91.3203 130.57 90.7344 131 90.6367 131H76.8086C75.9492 130.297 75.5195 129.75 75.5195 129.359C75.1094 129.359 74.7578 129.125 74.4648 128.656V128.539C74.4844 128.383 74.5625 128.305 74.6992 128.305H75.6367C75.793 128.305 75.8711 128.422 75.8711 128.656L76.3398 128.305H77.9805L78.4492 128.656H78.918V128.539C78.6836 128.539 78.5664 128.422 78.5664 128.188H74.6992C74.543 128.188 74.4648 128.109 74.4648 127.953V125.961C74.4648 125.805 74.582 125.727 74.8164 125.727V125.609C74.582 125.609 74.4648 125.531 74.4648 125.375V125.258C75.5977 123.93 76.3789 123.266 76.8086 123.266C76.9453 123.09 77.2969 122.895 77.8633 122.68C77.8828 122.523 77.9609 122.445 78.0977 122.445H79.2695C79.5039 122.445 79.6211 122.602 79.6211 122.914H80.0898C80.2461 122.914 80.3242 122.836 80.3242 122.68V122.562C80.0898 122.562 79.9336 122.367 79.8555 121.977C79.9336 121.547 79.9727 121.234 79.9727 121.039C79.9727 120.961 79.9336 120.844 79.8555 120.688C79.9727 120.375 80.0898 120.219 80.207 120.219H84.8945V120.102H83.0195C83.0195 119.984 82.9023 119.867 82.668 119.75L82.1992 120.102H80.5586C80.4805 120.102 80.2852 119.906 79.9727 119.516V119.281C79.9727 119.125 80.0898 119.047 80.3242 119.047V117.289L79.8555 116.703V115.883C79.9141 115.414 80.0312 115.18 80.207 115.18H85.3633V115.062H80.0898L79.8555 114.711V114.359C80.4805 113.539 80.793 112.719 80.793 111.898L79.8555 110.844V109.555C79.9141 109.086 80.0312 108.852 80.207 108.852H81.4961C81.4961 108.617 81.6133 108.5 81.8477 108.5V108.383H80.207C79.9727 108.305 79.8555 108.07 79.8555 107.68V107.562L80.3242 107.094V105.453C80.0117 105.219 79.8555 105.023 79.8555 104.867L79.9727 104.164L79.8555 103.461C80.1484 103.109 80.3438 102.406 80.4414 101.352C80.6758 101.352 80.793 101.273 80.793 101.117V100.414C80.6172 100.297 80.3438 99.8672 79.9727 99.125C79.8945 99.125 79.8555 99.0859 79.8555 99.0078V96.1953C79.8555 96 80.0117 95.8828 80.3242 95.8438V95.2578C80.3242 95.1406 80.4414 95.0234 80.6758 94.9062H86.418C86.5352 94.9062 86.6914 94.75 86.8867 94.4375C86.3398 94.4375 86.0273 94.3984 85.9492 94.3203C85.5195 94.3984 85.168 94.4375 84.8945 94.4375H84.4258L83.957 94.7891H83.6055L83.1367 94.4375H82.668L82.1992 94.7891H80.3242C80.1875 94.7891 79.9531 94.4766 79.6211 93.8516H76.8086C75.9883 93.4414 75.3633 93.0117 74.9336 92.5625C74.8164 92.0742 74.6602 91.7227 74.4648 91.5078V90.1016C74.4844 89.9453 74.5625 89.8672 74.6992 89.8672H76.3398C76.6914 90.1797 76.8867 90.3359 76.9258 90.3359H81.3789C81.4766 90.3359 81.6719 90.1406 81.9648 89.75H75.6367C75.4414 89.5938 75.0508 89.3984 74.4648 89.1641V88.1094C74.4648 88.0312 74.8164 87.6797 75.5195 87.0547C75.7734 87.2109 76.0078 87.2891 76.2227 87.2891H76.3398L76.1055 86.9375C76.418 86.625 76.6133 86.2344 76.6914 85.7656H77.9805C78.332 86.0781 78.5273 86.2344 78.5664 86.2344H81.2617V86.5859C81.6914 86.5078 82.0039 86.4688 82.1992 86.4688L82.7852 86.5859C82.7852 86.3906 83.0977 86.2344 83.7227 86.1172C83.7227 85.8828 83.8008 85.7656 83.957 85.7656H86.8867L87.3555 86.1172H88.5273L88.9961 85.7656H89.8164L90.4023 86.2344H92.3945L92.8633 86.5859C92.9805 86.2734 93.0977 86.1172 93.2148 86.1172H93.332C93.7422 86.1172 94.4062 86.1562 95.3242 86.2344C95.4219 85.9805 95.8125 85.7461 96.4961 85.5312C96.4961 85.4531 96.5352 85.4141 96.6133 85.4141ZM82.3164 85.7656L82.4336 86V86.1172C82.4336 86.2734 82.3164 86.3516 82.082 86.3516L81.2617 86.2344V86.1172C81.2617 85.9219 81.6133 85.8047 82.3164 85.7656ZM86.418 87.2891V87.4062C86.6523 87.4062 86.7695 87.5234 86.7695 87.7578H90.8711C90.793 87.6211 90.7539 87.4648 90.7539 87.2891H86.418ZM87.2383 88.9297V89.0469H87.8242V88.9297H87.2383ZM94.0352 88.9297C94.0352 89.1641 93.8398 89.2812 93.4492 89.2812V89.3984H94.1523V88.9297H94.0352ZM91.5742 91.5078V91.625H91.9258V91.5078H91.5742ZM78.8008 91.8594V91.9766H79.3867V91.8594H78.8008ZM85.9492 91.8594C85.9492 92.1719 85.4023 92.3281 84.3086 92.3281V92.4453C84.543 92.4453 84.6602 92.5625 84.6602 92.7969H85.1289C85.3242 92.5625 85.832 92.4062 86.6523 92.3281C86.6523 92.2109 86.8086 92.0938 87.1211 91.9766H89.1133V91.8594H85.9492ZM90.168 91.8594V91.9766H90.7539V91.8594H90.168ZM98.7227 91.8594C98.957 92.1133 99.0742 92.3086 99.0742 92.4453H99.8945C99.9922 92.4453 100.188 92.25 100.48 91.8594H98.7227ZM95.207 92.3281C95.207 92.5625 95.1289 92.6797 94.9727 92.6797H91.457V92.7969H92.8633C92.8633 92.9141 93.0195 93.0703 93.332 93.2656H94.1523C94.1523 92.9531 94.3867 92.7969 94.8555 92.7969H95.793C95.793 92.6797 95.6367 92.5234 95.3242 92.3281H95.207ZM103.293 92.3281V92.4453C103.527 92.4453 103.645 92.5625 103.645 92.7969H104.348V92.6797C104.211 92.6797 104.016 92.5625 103.762 92.3281H103.293ZM88.8789 93.8516C88.8789 94.1641 88.7227 94.3203 88.4102 94.3203V96.3125L88.1758 96.6641C88.332 96.6836 88.4102 96.7617 88.4102 96.8984V98.4219C88.4102 98.6758 88.4492 98.8711 88.5273 99.0078L88.4102 99.7109V103.695C88.7227 103.969 88.8789 104.32 88.8789 104.75H88.9961L89.582 104.281H91.457L92.043 104.75H92.5117C92.5117 104.516 92.7461 104.281 93.2148 104.047L94.1523 104.75H94.5039L94.9727 104.398L95.3242 104.633H98.7227C98.957 104.633 99.0742 104.789 99.0742 105.102H99.4258L100.012 104.633H101.301V104.047H100.715C100.559 104.047 100.48 103.93 100.48 103.695H100.246C100.246 104.008 99.7383 104.164 98.7227 104.164L97.668 104.047C97.0039 104.125 96.4961 104.164 96.1445 104.164L95.9102 103.812C95.9102 103.695 96.0664 103.539 96.3789 103.344L96.2617 102.758C96.2617 102.68 96.418 102.445 96.7305 102.055L96.3789 101.586V101.234C96.3984 101.078 96.4766 101 96.6133 101H97.082C97.2383 101 97.3164 101.117 97.3164 101.352H97.4336C97.5898 101.352 97.668 101.273 97.668 101.117V100.414C97.2773 100.141 97.082 99.6328 97.082 98.8906C96.9258 98.8906 96.8477 98.8125 96.8477 98.6562V98.5391C96.8477 98.3828 97.082 98.3047 97.5508 98.3047V97.8359C97.0625 97.8359 96.7109 97.6016 96.4961 97.1328C96.418 97.1328 96.3789 97.0938 96.3789 97.0156V95.375C95.207 94.6719 94.4258 94.3203 94.0352 94.3203C93.7031 94.3203 93.4297 94.1641 93.2148 93.8516H88.8789ZM97.3164 93.9688V94.0859C97.9414 94.0859 98.2539 94.2031 98.2539 94.4375V94.5547H99.8945C99.9922 94.5547 100.188 94.3594 100.48 93.9688H97.3164ZM84.7773 96.5469V96.6641H87.3555V96.5469H84.7773ZM101.652 98.6562V98.7734H102.121V98.6562H101.652ZM98.2539 99.4766V99.5938C98.4102 99.5938 98.5664 99.7109 98.7227 99.9453C98.9961 99.9453 99.3477 99.9844 99.7773 100.062L100.598 99.9453C101.223 99.9844 101.535 100.102 101.535 100.297V100.414C101.535 100.648 101.184 100.766 100.48 100.766L99.7773 100.648C99.4844 100.727 99.1328 100.766 98.7227 100.766V100.883H101.652L102.121 101.234H103.059V100.766H102.121C102.004 100.766 101.887 100.648 101.77 100.414V100.297L102.004 99.9453L101.184 99.8281H100.363C100.207 99.8281 100.129 99.7109 100.129 99.4766H100.012L99.543 99.8281H99.0742C98.918 99.8281 98.8398 99.7109 98.8398 99.4766H98.2539ZM84.6602 102.406V102.523H85.2461V102.406H84.6602ZM83.1367 102.875V102.992H83.6055V102.875H83.1367ZM94.3867 106.625V106.742H94.6211V106.625H94.3867ZM98.7227 107.094V107.211H100.012V107.094L99.1914 106.977C99.0547 107.055 98.8984 107.094 98.7227 107.094ZM87.2383 109.555V109.672H87.8242V109.555H87.2383ZM90.168 109.555C90.168 109.789 90.0508 109.906 89.8164 109.906V110.141H90.4023C90.4023 109.828 90.793 109.672 91.5742 109.672C91.5742 109.789 91.7305 109.945 92.043 110.141H99.1914V110.023C98.918 110.023 98.6055 109.867 98.2539 109.555H95.4414L94.9727 109.906H94.0352L93.5664 109.555H90.168ZM94.8555 112.953V113.07H98.8398V112.953H94.8555ZM94.8555 114.242V114.359H95.793V114.242H94.8555ZM98.6055 114.242V114.359H99.1914V114.242H98.6055ZM96.1445 114.594V114.828H96.2617V114.594H96.1445ZM96.9648 114.594V114.711H98.3711V114.594H96.9648ZM87.2383 115.062V115.18H87.8242V115.062H87.2383ZM85.1289 116.352V116.469H85.7148V116.352H85.1289ZM87.2383 117.172V117.289H87.4727V117.172H87.2383ZM97.7852 117.172V117.758H98.7227C98.8789 117.777 98.957 117.855 98.957 117.992V118.109C98.957 118.344 98.5664 118.461 97.7852 118.461V118.578H99.6602C99.6602 118.148 99.8164 117.797 100.129 117.523V117.172H100.012L99.543 117.523H98.7227L98.2539 117.172H97.7852ZM101.066 121.859C101.066 122.094 100.949 122.211 100.715 122.211V122.328H104.23V122.211H101.418C101.34 122.055 101.301 121.938 101.301 121.859H101.066ZM75.8711 124.32V124.438H76.8086V124.32H75.8711ZM89.3477 124.32V124.438H90.2852V124.32H89.3477ZM108.684 124.789V124.906H109.387V124.789H108.684ZM84.7773 126.078V126.195H88.1758V125.961L87.5898 126.078H86.5352C86.2617 126.078 85.9492 125.922 85.5977 125.609H85.2461C85.1289 125.609 84.9727 125.766 84.7773 126.078ZM106.223 126.078V126.547H107.512C107.629 126.547 107.785 126.391 107.98 126.078H106.223ZM96.9648 128.188V128.305H99.6602C99.6602 128.422 99.7773 128.539 100.012 128.656H104.699C105.168 128.656 105.402 128.93 105.402 129.477H106.809V129.359C106.184 128.812 105.793 128.539 105.637 128.539C105.5 128.539 105.305 128.422 105.051 128.188H102.941L102.473 128.539H101.652C101.496 128.539 101.418 128.422 101.418 128.188H96.9648ZM86.418 128.539C86.418 128.852 86.3008 129.008 86.0664 129.008H82.668V129.125C83.4492 129.125 83.8398 129.242 83.8398 129.477H85.2461L85.7148 129.125H87.707C87.8242 129.125 87.9414 129.242 88.0586 129.477L87.707 129.945H89.582V129.828C89.2695 129.828 89.1133 129.75 89.1133 129.594V129.359C89.4258 129.008 89.582 128.773 89.582 128.656L89.3477 128.539C89.1914 128.852 88.9961 129.008 88.7617 129.008C87.5898 129.008 87.0039 128.852 87.0039 128.539H86.418ZM98.7227 129.477H98.2539V129.594C98.4883 129.594 98.6055 129.711 98.6055 129.945H101.77V129.594C101.77 129.438 101.691 129.359 101.535 129.359C100.441 129.438 99.5039 129.477 98.7227 129.477Z"
//   }
// })

// template.appendChild(path1);
