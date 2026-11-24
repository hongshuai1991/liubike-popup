'use strict';
// Native DOM adapter for the original template class names and inline styles.
const svgTags = new Set(['svg','g','path','defs','linearGradient','stop','filter','feFlood','feBlend','feGaussianBlur','circle','ellipse']);
function i(type,props={}) {
  if(typeof type==='function') return type(props);
  const el=svgTags.has(type)?document.createElementNS('http://www.w3.org/2000/svg',type):document.createElement(type);
  for(const [key,value] of Object.entries(props)) {
    if(key==='children'||key==='ref'||value==null)continue;
    if(key==='className'){el.setAttribute('class',value);continue;}
    if(key==='style'){for(const [k,v] of Object.entries(value)) {if(k.startsWith('--'))el.style.setProperty(k,v);else el.style[k]=v;}continue;}
    const attr={strokeWidth:'stroke-width',strokeLinecap:'stroke-linecap',strokeLinejoin:'stroke-linejoin',stopColor:'stop-color',stopOpacity:'stop-opacity',floodOpacity:'flood-opacity',colorInterpolationFilters:'color-interpolation-filters',clipRule:'clip-rule',fillRule:'fill-rule'}[key]||key;
    el.setAttribute(attr,String(value));
  }
  function append(v){if(Array.isArray(v))v.forEach(append);else if(v instanceof Node)el.appendChild(v);else if(v!=null&&v!==false)el.appendChild(document.createTextNode(String(v)));}append(props.children);return el;
}
const d=i, fA={forwardRef:fn=>props=>fn(props,null)};
const globalThisAssets=window.ASSETS;
const __GLOBALS__={getAssetURL:name=>globalThisAssets[name.replace(/\.png$/,'')]};
// Only these originals are referenced by the seven full-size source components.
const _o=ASSETS['bd36780ee0f2de89110f248f867db7ab2d08ed57'], Ro=ASSETS['5e826a18b0018352a7c0f3f6de2f53b30af6c54a'], Go=ASSETS['e1aff6bd31de2e569fa604cb3f7db9ca4c7f3337'], ko=ASSETS['4f207eeea3c83c50c389431c74ab41c537ce28f3'], Vo=ASSETS['986c1e5825c9232ff0ac0e81a3d8dd6a72daffca'];

// Faithful DOM translations of Qp, mp, Up, Ip, Lp, Np and Sp.
const pp = __GLOBALS__.getAssetURL("0425552a5623fbb25b64740274dbf5b2ac6a77b8.png"), ms = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif', Qp = fA.forwardRef(({ title: A, content: e, fontSize: t, lineHeight: r }, n) => /* @__PURE__ */ d("div", { ref: n, className: "relative h-[396px] w-[297px] overflow-clip", "data-name": "常规通知", children: [
  /* @__PURE__ */ i("div", { className: "absolute h-[396px] left-0 top-0 w-[297px]", "data-name": "BG", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full", src: pp }) }),
  /* @__PURE__ */ i(
    "p",
    {
      className: "absolute not-italic text-[#696969] text-left",
      style: {
        left: "34px",
        top: "138px",
        width: "229px",
        fontSize: `${t}px`,
        lineHeight: `${r}px`,
        fontFamily: ms,
        fontWeight: 400
      },
      children: e
    }
  ),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[34px] not-italic text-[#222] text-[22px] text-nowrap top-[94.5px] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: ms, fontWeight: 700 }, children: A }) })
] })), Cp = __GLOBALS__.getAssetURL("4010642ce85132a5c3385bb2114dc9f647f837e1.png"), Fs = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif', mp = fA.forwardRef(({ title: A, content: e, fontSize: t, lineHeight: r }, n) => /* @__PURE__ */ d("div", { ref: n, className: "relative h-[396px] w-[297px] overflow-clip", "data-name": "临时停运", children: [
  /* @__PURE__ */ i("div", { className: "absolute h-[396px] left-0 top-0 w-[297px]", "data-name": "BG", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full", src: Cp }) }),
  /* @__PURE__ */ i(
    "div",
    {
      className: "absolute not-italic text-[#696969] text-left",
      style: {
        left: "34px",
        top: "110px",
        width: "229px",
        fontSize: `${t}px`,
        lineHeight: `${r}px`,
        fontFamily: Fs,
        fontWeight: 400
      },
      children: e.split(`
`).map((a, s) => /* @__PURE__ */ i("p", { className: s < e.split(`
`).length - 1 ? "mb-[2px]" : "", children: a }, s))
    }
  ),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[34px] not-italic text-[#222] text-[22px] text-nowrap top-[66.5px] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: Fs, fontWeight: 700 }, children: A }) })
] })), Fp = __GLOBALS__.getAssetURL("3775135b8967dddd9dd9bc01edbcf7fa19e01928.png"), xe = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif', Up = fA.forwardRef(({ mainTitle: A, subTitle: e, item1Label: t, item1Value: r, item2Label: n, item2Value: a }, s) => /* @__PURE__ */ d("div", { ref: s, className: "bg-[#ffdb00] overflow-clip relative rounded-[20px] h-[396px] w-[297px]", "data-name": "计费变更", children: [
  /* @__PURE__ */ i("div", { className: "absolute h-[396px] left-0 top-0 w-[297px]", "data-name": "BG", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full", src: Fp }) }),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] not-italic right-[44px] text-[20px] text-black text-nowrap text-right top-[calc(50%-58.5px)] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: xe, fontWeight: 600 }, children: r }) }),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[calc(50%-109.5px)] not-italic text-[#ff4d00] text-[20px] text-nowrap top-[calc(50%-58.5px)] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: xe, fontWeight: 600 }, children: t }) }),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] not-italic right-[44px] text-[20px] text-black text-nowrap text-right top-[calc(50%-4.5px)] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: xe, fontWeight: 600 }, children: a }) }),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[calc(50%-109.5px)] not-italic text-[#ff4d00] text-[20px] text-nowrap top-[calc(50%-4.5px)] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: xe, fontWeight: 600 }, children: n }) }),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[calc(50%-119.5px)] not-italic text-[#fff9d5] text-[18px] text-nowrap top-[calc(50%-111px)] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: xe, fontWeight: 600 }, children: e }) }),
  /* @__PURE__ */ i(
    "div",
    {
      className: "absolute flex flex-col justify-center leading-[0] left-[calc(50%-120.5px)] not-italic text-[44px] text-nowrap top-[calc(50%-161px)] translate-y-[-50%]",
      style: {
        fontFamily: xe,
        fontWeight: 900,
        color: "#FFFFFF"
      },
      children: /* @__PURE__ */ i("p", { className: "leading-[normal]", children: A })
    }
  )
] })), vp = __GLOBALS__.getAssetURL("1e7801afe5c3f7654ee5a2dc839ce34198404cd5.png"), xp = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif', bp = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif';
function Ep() {
  return /* @__PURE__ */ d("div", { className: "absolute bg-gradient-to-b from-[#44c7f2] h-[143px] left-1/2 overflow-clip rounded-[8px] to-[#ffffff] top-[7px] translate-x-[-50%] w-[263px]", "data-name": "小BG", children: [
    /* @__PURE__ */ i("div", { className: "absolute left-[208.06px] size-[86.688px] top-[41.76px]", children: /* @__PURE__ */ i("div", { className: "absolute inset-[-11.67%]", children: /* @__PURE__ */ d("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 106.915 106.915", children: [
      /* @__PURE__ */ i("g", { filter: "url(#filter0_f_21_869)", id: "Ellipse 3", children: /* @__PURE__ */ i("circle", { cx: "53.4577", cy: "53.4577", fill: "url(#paint0_linear_21_869)", r: "43.3441" }) }),
      /* @__PURE__ */ d("defs", { children: [
        /* @__PURE__ */ d("filter", { colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", height: "106.915", id: "filter0_f_21_869", width: "106.915", x: "0", y: "0", children: [
          /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ i("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", mode: "normal", result: "shape" }),
          /* @__PURE__ */ i("feGaussianBlur", { result: "effect1_foregroundBlur_21_869", stdDeviation: "5.05681" })
        ] }),
        /* @__PURE__ */ d("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_21_869", x1: "53.4577", x2: "53.4577", y1: "10.1136", y2: "96.8017", children: [
          /* @__PURE__ */ i("stop", { stopColor: "#F1FCFF" }),
          /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#D7F2FB", stopOpacity: "0" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ i("div", { className: "absolute left-[156.04px] size-[53.458px] top-[88px]", children: /* @__PURE__ */ i("div", { className: "absolute inset-[-18.92%]", children: /* @__PURE__ */ d("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 73.6849 73.6849", children: [
      /* @__PURE__ */ i("g", { filter: "url(#filter0_f_21_867)", id: "Ellipse 4", children: /* @__PURE__ */ i("circle", { cx: "36.8424", cy: "36.8424", fill: "url(#paint0_linear_21_867)", r: "26.7288" }) }),
      /* @__PURE__ */ d("defs", { children: [
        /* @__PURE__ */ d("filter", { colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", height: "73.6849", id: "filter0_f_21_867", width: "73.6849", x: "0", y: "0", children: [
          /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ i("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", mode: "normal", result: "shape" }),
          /* @__PURE__ */ i("feGaussianBlur", { result: "effect1_foregroundBlur_21_867", stdDeviation: "5.05681" })
        ] }),
        /* @__PURE__ */ d("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_21_867", x1: "36.8424", x2: "36.8424", y1: "10.1136", y2: "63.5713", children: [
          /* @__PURE__ */ i("stop", { stopColor: "white" }),
          /* @__PURE__ */ i("stop", { offset: "1", stopColor: "white", stopOpacity: "0" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ i("div", { className: "absolute left-[-48px] size-[115px] top-[58px]", children: /* @__PURE__ */ i("div", { className: "absolute inset-[-8.79%]", children: /* @__PURE__ */ d("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 135.227 135.227", children: [
      /* @__PURE__ */ i("g", { filter: "url(#filter0_f_21_861)", id: "Ellipse 5", children: /* @__PURE__ */ i("circle", { cx: "67.6136", cy: "67.6136", fill: "url(#paint0_linear_21_861)", r: "57.5" }) }),
      /* @__PURE__ */ d("defs", { children: [
        /* @__PURE__ */ d("filter", { colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", height: "135.227", id: "filter0_f_21_861", width: "135.227", x: "0", y: "0", children: [
          /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ i("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", mode: "normal", result: "shape" }),
          /* @__PURE__ */ i("feGaussianBlur", { result: "effect1_foregroundBlur_21_861", stdDeviation: "5.05681" })
        ] }),
        /* @__PURE__ */ d("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_21_861", x1: "67.6136", x2: "67.6136", y1: "10.1136", y2: "125.114", children: [
          /* @__PURE__ */ i("stop", { stopColor: "#F1FCFF" }),
          /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#D7F2FB", stopOpacity: "0" })
        ] })
      ] })
    ] }) }) }),
    /* @__PURE__ */ i("div", { className: "absolute flex h-[546.469px] items-center justify-center left-[-82.81px] top-[-314.23px] w-[813.614px]", style: { "--transform-inner-width": "0", "--transform-inner-height": "0" }, children: /* @__PURE__ */ i("div", { className: "flex-none rotate-[0.603deg]", children: /* @__PURE__ */ i("div", { className: "h-[538px] relative w-[808px]", "data-name": "草地", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full", src: _o }) }) }) })
  ] });
}
function yp() {
  return /* @__PURE__ */ d("div", { className: "absolute bg-gradient-to-b border-[#fff19d] border-[5px] border-solid from-[#ffffff] h-[356px] left-1/2 overflow-clip rounded-[16px] to-[#fffbe3] top-[39px] translate-x-[-50%] w-[287px]", "data-name": "BG", children: [
    /* @__PURE__ */ i(Ep, {}),
    /* @__PURE__ */ i("div", { className: "absolute bottom-[-6px] flex h-[117px] items-center justify-center left-[calc(50%+29.31px)] translate-x-[-50%] w-[300.375px]", style: { "--transform-inner-width": "117", "--transform-inner-height": "300.375" }, children: /* @__PURE__ */ i("div", { className: "flex-none rotate-[270deg] scale-y-[-100%]", children: /* @__PURE__ */ i("div", { className: "h-[300.375px] opacity-[0.65] relative w-[117px]", "data-name": "Ornament 69", children: /* @__PURE__ */ i("img", { alt: "", className: "block max-w-none size-full", height: "300.375", src: vp, width: "117" }) }) }) })
  ] });
}
function Hp() {
  return /* @__PURE__ */ d("div", { className: "absolute contents left-[101px] top-[-10px]", "data-name": "LVZI", children: [
    /* @__PURE__ */ i("div", { className: "absolute flex h-[23.799px] items-center justify-center left-[116.96px] top-[183.24px] w-[68.867px]", style: { "--transform-inner-width": "0", "--transform-inner-height": "0" }, children: /* @__PURE__ */ i("div", { className: "flex-none rotate-[343.709deg]", children: /* @__PURE__ */ i("div", { className: "h-[4.183px] relative w-[70.526px]", children: /* @__PURE__ */ i("div", { className: "absolute inset-[-41.44%_-2.46%]", children: /* @__PURE__ */ d("svg", { className: "block size-full", fill: "none", preserveAspectRatio: "none", viewBox: "0 0 73.9922 7.64974", children: [
      /* @__PURE__ */ i("g", { filter: "url(#filter0_f_21_865)", id: "Ellipse 407", opacity: "0.5", children: /* @__PURE__ */ i("ellipse", { cx: "36.9961", cy: "3.82487", fill: "url(#paint0_linear_21_865)", rx: "35.2628", ry: "2.09154" }) }),
      /* @__PURE__ */ d("defs", { children: [
        /* @__PURE__ */ d("filter", { colorInterpolationFilters: "sRGB", filterUnits: "userSpaceOnUse", height: "7.64974", id: "filter0_f_21_865", width: "73.9923", x: "0", y: "0", children: [
          /* @__PURE__ */ i("feFlood", { floodOpacity: "0", result: "BackgroundImageFix" }),
          /* @__PURE__ */ i("feBlend", { in: "SourceGraphic", in2: "BackgroundImageFix", mode: "normal", result: "shape" }),
          /* @__PURE__ */ i("feGaussianBlur", { result: "effect1_foregroundBlur_21_865", stdDeviation: "0.866667" })
        ] }),
        /* @__PURE__ */ d("linearGradient", { gradientUnits: "userSpaceOnUse", id: "paint0_linear_21_865", x1: "24.8041", x2: "62.9806", y1: "3.67593", y2: "1.30803", children: [
          /* @__PURE__ */ i("stop", { stopColor: "#3A7405" }),
          /* @__PURE__ */ i("stop", { offset: "1", stopColor: "#3A7405", stopOpacity: "0" })
        ] })
      ] })
    ] }) }) }) }) }),
    /* @__PURE__ */ i("div", { className: "absolute h-[221px] left-[101px] top-[-10px] w-[104px]", "data-name": "LVZI", children: /* @__PURE__ */ i("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute h-[100.1%] left-[-128.3%] max-w-none top-[-0.05%] w-[291.82%]", src: Ro }) }) })
  ] });
}
const Ip = fA.forwardRef(({ title: A, content: e }, t) => /* @__PURE__ */ i(
  "div",
  {
    ref: t,
    className: "relative h-[396px] w-[297px] overflow-clip bg-transparent",
    "data-name": "交规提醒",
    children: /* @__PURE__ */ d("div", { className: "relative w-full h-full", children: [
      /* @__PURE__ */ i(yp, {}),
      /* @__PURE__ */ i(Hp, {}),
      /* @__PURE__ */ i(
        "div",
        {
          className: "absolute leading-[32px] left-[calc(50%+0.5px)] not-italic text-[#696969] text-[16px] text-center text-nowrap top-[246px] translate-x-[-50%]",
          style: { fontFamily: bp, fontWeight: 400 },
          children: e.split(`
`).map((r, n) => /* @__PURE__ */ i("p", { className: "mb-0", children: r }, n))
        }
      ),
      /* @__PURE__ */ i(
        "div",
        {
          className: "absolute left-[calc(50%+0.5px)] not-italic text-[20px] text-black text-center text-nowrap top-[225.5px] tracking-[1px] translate-x-[-50%] translate-y-[-50%]",
          style: { fontFamily: xp, fontWeight: 700 },
          children: /* @__PURE__ */ i("p", { className: "leading-[normal] m-0", children: A })
        }
      )
    ] })
  }
)), FA = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif', Lp = fA.forwardRef((A, e) => {
  const {
    card1Title: t,
    card1Subtitle: r,
    card1Price: n,
    card1PriceUnit: a,
    card1Note: s,
    card2Title: o,
    card2Subtitle: l,
    card2Price: c,
    card2PriceUnit: u,
    card2Note: B,
    card3Title: f,
    card3Subtitle: h,
    card3Price: Q,
    card3PriceUnit: g,
    card3Note: m
  } = A;
  return /* @__PURE__ */ d("div", { ref: e, className: "overflow-clip relative rounded-[12px] h-[396px] w-[297px]", "data-name": "营销1", children: [
    /* @__PURE__ */ i("div", { className: "absolute h-[396px] left-0 top-0 w-[297px]", "data-name": "image 921", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full", src: Go }) }),
    /* @__PURE__ */ d("div", { className: "absolute contents left-[40px] not-italic text-nowrap top-[92px]", "data-name": "左文字", children: [
      /* @__PURE__ */ i("p", { className: "absolute leading-[18px] left-[40px] text-[18px] text-white top-[92px]", style: { fontFamily: FA, fontWeight: 600 }, children: t }),
      /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[40px] text-[10px] text-[rgba(255,255,255,0.8)] top-[124px] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[10px] text-nowrap", style: { fontFamily: FA, fontWeight: 400 }, children: r }) })
    ] }),
    /* @__PURE__ */ d("div", { className: "absolute contents left-[193px] not-italic text-nowrap text-right top-[95px]", children: [
      /* @__PURE__ */ i("p", { className: "absolute leading-[10px] left-[257px] text-[10px] text-[rgba(255,255,255,0.8)] top-[119px] translate-x-[-100%]", style: { fontFamily: FA, fontWeight: 400 }, children: s }),
      /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[257px] text-[0px] text-white top-[105px] translate-x-[-100%] translate-y-[-50%]", children: /* @__PURE__ */ d("p", { className: "leading-[20px] not-italic text-nowrap", style: { fontFamily: FA, fontWeight: 700 }, children: [
        /* @__PURE__ */ i("span", { className: "text-[20px]", children: n }),
        /* @__PURE__ */ i("span", { className: "text-[10px]", children: a })
      ] }) })
    ] }),
    /* @__PURE__ */ d("div", { className: "absolute contents left-[40px] not-italic text-nowrap top-[162px]", "data-name": "左文字", children: [
      /* @__PURE__ */ i("p", { className: "absolute leading-[18px] left-[40px] text-[18px] text-white top-[162px]", style: { fontFamily: FA, fontWeight: 600 }, children: o }),
      /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[40px] text-[10px] text-[rgba(255,255,255,0.8)] top-[194px] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[10px] text-nowrap", style: { fontFamily: FA, fontWeight: 400 }, children: l }) })
    ] }),
    /* @__PURE__ */ d("div", { className: "absolute contents left-[193px] not-italic text-nowrap text-right top-[165px]", children: [
      /* @__PURE__ */ i("p", { className: "absolute leading-[10px] left-[257px] text-[10px] text-[rgba(255,255,255,0.8)] top-[189px] translate-x-[-100%]", style: { fontFamily: FA, fontWeight: 400 }, children: B }),
      /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[257px] text-[0px] text-white top-[175px] translate-x-[-100%] translate-y-[-50%]", children: /* @__PURE__ */ d("p", { className: "leading-[20px] not-italic text-nowrap", style: { fontFamily: FA, fontWeight: 700 }, children: [
        /* @__PURE__ */ i("span", { className: "text-[20px]", children: c }),
        /* @__PURE__ */ i("span", { className: "text-[10px]", children: u })
      ] }) })
    ] }),
    /* @__PURE__ */ d("div", { className: "absolute contents left-[40px] not-italic text-nowrap top-[233px]", "data-name": "左文字", children: [
      /* @__PURE__ */ i("p", { className: "absolute leading-[18px] left-[40px] text-[18px] text-white top-[233px]", style: { fontFamily: FA, fontWeight: 600 }, children: f }),
      /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[40px] text-[10px] text-[rgba(255,255,255,0.8)] top-[265px] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[10px] text-nowrap", style: { fontFamily: FA, fontWeight: 400 }, children: h }) })
    ] }),
    /* @__PURE__ */ d("div", { className: "absolute contents left-[194px] not-italic text-nowrap text-right top-[236px]", children: [
      /* @__PURE__ */ i("p", { className: "absolute leading-[10px] left-[261px] text-[10px] text-[rgba(255,255,255,0.8)] top-[260px] translate-x-[-100%]", style: { fontFamily: FA, fontWeight: 400 }, children: m }),
      /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[261px] text-[0px] text-white top-[246px] translate-x-[-100%] translate-y-[-50%]", children: /* @__PURE__ */ d("p", { className: "leading-[20px] not-italic text-nowrap", style: { fontFamily: FA, fontWeight: 700 }, children: [
        /* @__PURE__ */ i("span", { className: "text-[20px]", children: Q }),
        /* @__PURE__ */ i("span", { className: "text-[10px]", children: g })
      ] }) })
    ] })
  ] });
}), be = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif', Np = fA.forwardRef((A, e) => {
  const {
    item1Charge: t,
    item1Get: r,
    item2Charge: n,
    item2Get: a,
    item3Charge: s,
    item3Get: o
  } = A;
  return /* @__PURE__ */ d("div", { ref: e, className: "relative size-full h-[396px] w-[297px]", "data-name": "重置返利", children: [
    /* @__PURE__ */ i("div", { className: "absolute h-[396px] left-0 top-0 w-[297px]", "data-name": "bg", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full", src: ko }) }),
    /* @__PURE__ */ d("div", { className: "absolute contents font-['MiSans:Bold',sans-serif] leading-[22px] left-[98px] not-italic text-[22px] text-nowrap top-[115px]", "data-name": "可自定义的文字", children: [
      /* @__PURE__ */ i("p", { className: "absolute left-[98px] text-[#18183f] top-[223px]", style: { fontFamily: be, fontWeight: 700 }, children: s }),
      /* @__PURE__ */ i("p", { className: "absolute left-[188px] text-[#ff4d00] top-[223px]", style: { fontFamily: be, fontWeight: 700 }, children: o }),
      /* @__PURE__ */ i("p", { className: "absolute left-[98px] text-[#18183f] top-[169px]", style: { fontFamily: be, fontWeight: 700 }, children: n }),
      /* @__PURE__ */ i("p", { className: "absolute left-[188px] text-[#ff4d00] top-[169px]", style: { fontFamily: be, fontWeight: 700 }, children: a }),
      /* @__PURE__ */ i("p", { className: "absolute left-[98px] text-[#18183f] top-[115px]", style: { fontFamily: be, fontWeight: 700 }, children: t }),
      /* @__PURE__ */ i("p", { className: "absolute left-[188px] text-[#ff4d00] top-[115px]", style: { fontFamily: be, fontWeight: 700 }, children: r })
    ] })
  ] });
}), Us = '"MiSans", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "Helvetica Neue", Helvetica, Arial, sans-serif', Sp = fA.forwardRef(({ title: A, content: e, fontSize: t, lineHeight: r }, n) => /* @__PURE__ */ d("div", { ref: n, className: "relative h-[396px] w-[297px] overflow-clip", "data-name": "头盔通知", children: [
  /* @__PURE__ */ i("div", { className: "absolute h-[396px] left-0 top-0 w-[297px]", "data-name": "BG", children: /* @__PURE__ */ i("img", { alt: "", className: "absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full", src: Vo }) }),
  /* @__PURE__ */ i(
    "div",
    {
      className: "absolute not-italic text-[#696969] text-left",
      style: {
        left: "34px",
        top: "138px",
        width: "229px",
        fontSize: `${t}px`,
        lineHeight: `${r}px`,
        fontFamily: Us,
        fontWeight: 400
      },
      children: e
    }
  ),
  /* @__PURE__ */ i("div", { className: "absolute flex flex-col justify-center leading-[0] left-[34px] not-italic text-[#222] text-[22px] text-nowrap top-[94.5px] translate-y-[-50%]", children: /* @__PURE__ */ i("p", { className: "leading-[normal]", style: { fontFamily: Us, fontWeight: 700 }, children: A }) })
] }));

// Original Figma frames, read on 2026-11-23. Keep layout corrections here rather
// than adding new Tailwind classes: vendor/tailwind-live.css is a fixed build.
const FIGMA_NODES=['8326:3613','8326:3629','8326:3641','8294:1061','8339:4393','8386:4758','8427:5472'];
const FIGMA_FONT='"Popup MiSans", "MiSans", "PingFang SC", sans-serif';
const FIGMA_PINGFANG='"PingFang SC", "Popup MiSans", sans-serif';
const billingTitleCache=new Map();
function billingTitleImage(text){
 const cached=billingTitleCache.get(text);if(cached)return {...cached};
 const canvas=document.createElement('canvas'),ctx=canvas.getContext('2d');
 ctx.font='900 44px "Popup MiSans"';
 const width=Math.max(1,Math.ceil(ctx.measureText(text).width)),height=58;
 canvas.width=width*3;canvas.height=height*3;ctx.scale(3,3);
 ctx.font='900 44px "Popup MiSans"';ctx.textBaseline='alphabetic';
 // Same gradient as node 8326:3659. Rasterizing this editable text at @3x
 // lets preview and html2canvas use exactly the same glyphs and colors.
 const angle=92.67192257213074*Math.PI/180,dx=Math.sin(angle),dy=-Math.cos(angle);
 const length=Math.abs(width*dx)+Math.abs(height*dy),start=.0010459,end=2.3813;
 const x=width/2-dx*length/2,y=height/2-dy*length/2;
 const gradient=ctx.createLinearGradient(x+dx*length*start,y+dy*length*start,x+dx*length*end,y+dy*length*end);
 gradient.addColorStop(0,'#ffffff');gradient.addColorStop(1,'#ffdc09');ctx.fillStyle=gradient;
 // MiSans Heavy hhea metrics: ascent 1044, descent 282, units/em 1000.
 // Center that font box in Figma's explicit 58px line box.
 ctx.fillText(text,0,(height-44*1.326)/2+44*1.044);
 const result={src:canvas.toDataURL('image/png'),width,height};
 // Editable input must not grow an unbounded cache during a long session.
 if(billingTitleCache.size>=32)billingTitleCache.delete(billingTitleCache.keys().next().value);
 billingTitleCache.set(text,result);return {...result};
}
function applyFigmaLayout(index,root){
 root.setAttribute('data-figma-node',FIGMA_NODES[index]);
 // Pin real design faces instead of relying on synthesized/fallback weights.
 root.querySelectorAll('*').forEach(el=>{if(el.style.fontFamily)el.style.fontFamily=FIGMA_FONT;});
 const line=(el,height)=>{el.style.lineHeight=height+'px';};
 const center=(el,y,height)=>{el.style.top=y+'px';line(el.firstElementChild,height);};
 if([0,1,6].includes(index)){
  // Figma text boxes: (34,90,88,29), or (34,62,88,29) for suspension.
  center(root.children[2],index===1?76.5:104.5,29);
 }else if(index===2){
  center(root.children[1],149.5,27);center(root.children[2],149.5,27);
  center(root.children[3],203.5,27);center(root.children[4],203.5,27);
  center(root.children[5],107,24);
  root.children[5].firstElementChild.style.fontFamily='"Popup MiSans Demibold", sans-serif';
  const title=root.children[6],image=billingTitleImage(root.children[6].textContent);
  title.style.top='57px';title.style.left='28px';
  title.replaceChildren(i('img',{...image,alt:root.children[6].textContent,style:{display:'block',width:image.width+'px',height:'58px',maxWidth:'none'}}));
 }else if(index===3){
  const contents=root.firstElementChild;
  contents.children[2].style.fontWeight='500';
  line(contents.children[3].firstElementChild,27);
 }else if(index===4){
  [[102,129,124,110],[172,199,194,180],[243,270,265,251]].forEach(([titleY,subY,noteY,priceY],row)=>{
   const left=root.children[1+row*2],right=root.children[2+row*2];
   const title=left.children[0],subtitle=left.children[1],note=right.children[0],price=right.children[1];
   title.style.top=titleY+'px';title.style.fontFamily=FIGMA_PINGFANG;
   subtitle.style.top=subY+'px';subtitle.firstElementChild.style.fontFamily=FIGMA_PINGFANG;
   note.style.top=noteY+'px';note.style.fontFamily=FIGMA_PINGFANG;
   price.style.top=priceY+'px';line(price.firstElementChild,20);
   const edge=row===2?261:257;note.style.left=edge+'px';price.style.left=edge+'px';
  });
 }else if(index===5){
  [233,233,179,179,125,125].forEach((y,n)=>root.children[1].children[n].style.top=y+'px');
 }
 return root;
}

// Content bottoms in 1x pixels: regular stops above the LIUBIKE wordmark;
// suspension y=270 fits the default five lines (待 laoyang 确认); helmet stops above the illustrated head.
const CONTENT_BOTTOM = {0:310,1:270,6:230};
const NAMES=['常规通知','临时停运','计费变更','交规提醒','营销活动','充值返利','头盔通知'];
const IDS=['regular','suspension','billing','traffic','marketing','recharge','helmet'];
const DEFAULTS=[
 {title:'温馨提示',content:'为响应优化城市秩序，提升市容市貌，近期平台优化升级将关闭拍照还车功能，建议广大用户前往指定停车点还车，以免系统优化后给您带来不便！',fontSize:16,lineHeight:30},
 {title:'临时停运',content:'因车辆回仓升级，暂无法使用。\n您账户内的卡券（截止日期至8月8日0点）有效期将会顺延至8月31日23:59:59，给您带来不便，敬请谅解~',fontSize:16,lineHeight:30},
 {mainTitle:'计费变更啦！',subTitle:'即日起骑行价格调整如下：',item1Label:'起步价',item1Value:'2元/10分钟',item2Label:'超出部分',item2Value:'1元/10分钟'},
 {title:'南昌交警提醒您',content:'佩戴安全头盔\n文明骑行、规范停车\n针对未佩戴头盔、闯红灯、逆行等\n违法行为将依法进行处罚'},
 {card1Title:'3天不限次卡',card1Subtitle:'单次抵扣3元',card1Price:'4.99',card1PriceUnit:'元',card1Note:'低至1.67元/天',card2Title:'7天不限次卡',card2Subtitle:'单次抵扣3元',card2Price:'9.99',card2PriceUnit:'元',card2Note:'低至1.60元/天',card3Title:'30天不限次卡',card3Subtitle:'单次抵扣3元',card3Price:'29.99',card3PriceUnit:'元',card3Note:'低至0.99元/天'},
 {item1Charge:'50',item1Get:'20',item2Charge:'100',item2Get:'50',item3Charge:'200',item3Get:'120'},
 {title:'温馨提示',content:'小遛电单车开启感应头盔功能，\n需要取头盔、佩戴后方能骑行，\n谢谢您的配合',fontSize:16,lineHeight:24}
];
const constructors=[Qp,mp,Up,Ip,Lp,Np,Sp], prefix='xiaoliu-popup-v2:', $=id=>document.getElementById(id);
function read(key){try{return JSON.parse(localStorage.getItem(prefix+key));}catch{return null;}}
function write(key,value){try{localStorage.setItem(prefix+key,JSON.stringify(value));}catch{}}
function remove(key){try{localStorage.removeItem(prefix+key);}catch{}}
const LEGACY_HELMET_DEFAULT={title:'温馨提示',content:'小遛电单车开启感应头盔功能，需要取头盔、佩戴后方能骑行，谢谢您的配合',fontSize:16,lineHeight:30};
const data=DEFAULTS.map((def,index)=>{const saved=read('tpl:'+IDS[index]);const result={...def};if(index===6&&saved?.version===1&&saved.data&&Object.keys(LEGACY_HELMET_DEFAULT).every(k=>saved.data[k]===LEGACY_HELMET_DEFAULT[k]))return {...def};if([1,2].includes(saved?.version)&&saved.data&&typeof saved.data==='object')for(const k of Object.keys(def)){const v=saved.data[k];if(typeof v===typeof def[k]&&(typeof v!=='number'||Number.isFinite(v)))result[k]=typeof v==='number'?Math.max(12,Math.min(k==='fontSize'?24:48,v)):v;}return result;});
const selectedSaved=read('selected'),modeSaved=read('mode');let current=selectedSaved?.version===1&&Number.isInteger(selectedSaved.value)&&selectedSaved.value>=0&&selectedSaved.value<7?selectedSaved.value:0;
let mode=modeSaved?.version===1&&['phone','popup'].includes(modeSaved.value)?modeSaved.value:'phone', exporting=false, saveTimer, toastTimer, emptyResolver=null;
const dirty=i=>JSON.stringify(data[i])!==JSON.stringify(DEFAULTS[i]);
function saveLater(index){clearTimeout(saveTimer);const snapshot={...data[index]};saveTimer=setTimeout(()=>write('tpl:'+IDS[index],{version:2,data:snapshot}),180);}
function flushSave(){if(saveTimer){clearTimeout(saveTimer);saveTimer=null;write('tpl:'+IDS[current],{version:2,data:{...data[current]}});}}
function setContent(body,text,paragraphs){if(!paragraphs){body.textContent=text;return;}body.replaceChildren();const lines=text.split('\n');lines.forEach((line,n)=>{const p=document.createElement('p');p.textContent=line;if(n<lines.length-1)p.className='mb-[2px]';body.appendChild(p);});}
function createPopup(index,values=data[index]){const root=applyFigmaLayout(index,constructors[index](values));root.classList.add('popup-root');let clipped=false;
 if(index in CONTENT_BOTTOM){const top=index===1?110:138, body=[...root.children].find(el=>el.style.top===top+'px'&&el.style.width==='229px');const text=values.content, paragraphs=index===1||index===6;
  if(body){const host=$('measure-host');host.appendChild(root);const max=CONTENT_BOTTOM[index]-top;setContent(body,text,paragraphs);
   if(body.getBoundingClientRect().height>max+.01){clipped=true;let chars=Array.from(text),lo=0,hi=chars.length;while(lo<hi){const mid=Math.ceil((lo+hi)/2);setContent(body,chars.slice(0,mid).join('').replace(/\s+$/u,'')+'…',paragraphs);if(body.getBoundingClientRect().height<=max+.01)lo=mid;else hi=mid-1;}setContent(body,chars.slice(0,lo).join('').replace(/\s+$/u,'')+'…',paragraphs);}
   root.remove();
  }
 }return {root,clipped};}
function renderList(){const list=$('template-list');list.replaceChildren();NAMES.forEach((name,index)=>{const button=document.createElement('button');button.type='button';button.className='template-item'+(index===current?' selected':'');button.setAttribute('role','option');button.setAttribute('aria-selected',index===current?'true':'false');button.setAttribute('title',name);button.setAttribute('aria-label',name);button.tabIndex=-1;const thumb=document.createElement('div');thumb.className='thumb';thumb.setAttribute('aria-hidden','true');thumb.appendChild(createPopup(index).root);const label=document.createElement('span');label.className='template-label';label.textContent=name;if(dirty(index)){const dot=document.createElement('span');dot.className='dirty-dot';dot.textContent='•';dot.setAttribute('aria-label','已修改');label.appendChild(dot);}button.append(thumb,label);button.addEventListener('click',()=>selectTemplate(index));list.appendChild(button);});}
function renderPreview(){const frame=$('preview-frame');frame.replaceChildren();const {root,clipped}=createPopup(current);if(mode==='phone'){frame.className='preview-frame';const phone=document.createElement('div');phone.className='phone';phone.style.backgroundImage=`url("${ASSETS['shell-screen@3x']}")`;phone.appendChild(root);const close=document.createElement('div');close.className='phone-close';close.textContent='×';phone.appendChild(close);frame.appendChild(phone);}else{frame.className='preview-frame checker';root.classList.add('pure-popup');frame.appendChild(root);}document.querySelectorAll('[data-mode]').forEach(b=>{const active=b.dataset.mode===mode;b.classList.toggle('active',active);b.setAttribute('aria-pressed',active?'true':'false');});const notice=$('overflow-notice');if(notice)notice.hidden=!clipped;resizePreview();}
function resizePreview(){const area=$('preview-area'),frame=$('preview-frame');if(!area||!frame.firstElementChild)return;let w=area.clientWidth-24,h=area.clientHeight;if(mode==='phone'){let height=Math.max(560,Math.min(890,h-64));if(innerWidth<1024)height=Math.min(height,Math.max(1,w)*824/387);const scale=height/824;frame.style.width=(387*scale)+'px';frame.style.height=height+'px';frame.firstElementChild.style.transform=`scale(${scale})`;}else{const scale=Math.max(.1,Math.min(2,w/297,(h-32)/396));frame.style.width=(297*scale)+'px';frame.style.height=(396*scale)+'px';frame.firstElementChild.style.transform=`scale(${scale})`;}}
function updateField(key,value){data[current][key]=value;saveLater(current);renderList();renderPreview();$('reset').disabled=!dirty(current)||exporting;}
function input(key,placeholder='',cls=''){const el=document.createElement('input');el.type='text';el.value=data[current][key];el.placeholder=placeholder;el.setAttribute('aria-label',placeholder||key);if(cls)el.className=cls;el.addEventListener('input',()=>updateField(key,el.value));return el;}
function group(label){const div=document.createElement('div');div.className='field-group';const heading=document.createElement('label');heading.textContent=label;div.appendChild(heading);return div;}
function field(key,label,textarea=false){const div=group(label);let el;if(textarea){el=document.createElement('textarea');el.value=data[current][key];el.setAttribute('aria-label',label);el.addEventListener('input',()=>updateField(key,el.value));}else{el=input(key);el.setAttribute('aria-label',label);}div.appendChild(el);if(textarea&&current in CONTENT_BOTTOM){const p=document.createElement('div');p.id='overflow-notice';p.className='overflow-note';p.hidden=true;p.textContent='正文已超出，超出部分将以…显示';div.appendChild(p);}return div;}
function slider(key,label,min,max){const group=document.createElement('div');group.className='field-group';const labelEl=document.createElement('label');labelEl.className='slider-label';labelEl.textContent=label;const out=document.createElement('output');out.textContent=data[current][key]+'px';labelEl.appendChild(out);const el=document.createElement('input');el.type='range';el.className='range';el.min=min;el.max=max;el.step=1;el.value=data[current][key];el.setAttribute('aria-label',label);el.addEventListener('input',()=>{out.textContent=el.value+'px';updateField(key,Number(el.value));});group.append(labelEl,el);return group;}
function renderFields(){const fields=$('fields');fields.replaceChildren();if([0,1,6].includes(current)){fields.append(field('title','标题'),field('content','正文',true));const box=document.createElement('div');box.className='slider-box';box.append(slider('fontSize','字体大小',12,24),slider('lineHeight','行间距',12,48));fields.appendChild(box);}else if(current===2){fields.append(field('mainTitle','主标题'),field('subTitle','附标题'));for(let n=1;n<=2;n++){const g=group(n===1?'起步价说明':'超出部分说明'),grid=document.createElement('div');grid.className='pair-grid';grid.append(input('item'+n+'Label','标签'),input('item'+n+'Value','价格'));g.appendChild(grid);fields.appendChild(g);}}else if(current===3){fields.append(field('title','标题'),field('content','正文',true));}else if(current===4){['3天','7天','30天'].forEach((name,i)=>{const n=i+1,g=group(`卡片 ${n} (${name})`),grid=document.createElement('div');grid.className='pair-grid';[['Title','标题'],['Subtitle','副标题'],['Price','价格'],['PriceUnit','单位'],['Note','底部备注']].forEach(([key,label],idx)=>grid.appendChild(input(`card${n}${key}`,label,idx===4?'wide':'')));g.appendChild(grid);fields.appendChild(g);});}else{['Top','Middle','Bottom'].forEach((name,i)=>{const n=i+1,g=group(`充值档位 ${n} (${name})`),grid=document.createElement('div');grid.className='pair-grid';[['Charge','充值金额'],['Get','赠送金额']].forEach(([key,label])=>{const wrap=document.createElement('label');wrap.className='mini-label';wrap.append(label,input(`item${n}${key}`,label));grid.appendChild(wrap);});g.appendChild(grid);fields.appendChild(g);});}}
function selectTemplate(index){if(!Number.isInteger(index)||index<0||index>=7)return;flushSave();current=index;write('selected',{version:1,value:index});hideReset();$('editor-title').textContent=NAMES[index];$('reset').disabled=!dirty(index)||exporting;renderFields();renderList();renderPreview();$('template-list').children[index]?.scrollIntoView({block:'nearest',inline:'nearest'});}
function toast(message,retry=false){const el=$('toast');clearTimeout(toastTimer);el.replaceChildren(document.createTextNode(message));if(retry){const b=document.createElement('button');b.textContent='重试';b.addEventListener('click',()=>{el.hidden=true;exportCurrent();});el.appendChild(b);const close=document.createElement('button');close.textContent='×';close.setAttribute('aria-label','关闭提示');close.addEventListener('click',()=>{el.hidden=true;clearTimeout(toastTimer);});el.appendChild(close);}el.hidden=false;toastTimer=setTimeout(()=>el.hidden=true,retry?6000:3000);}
function hideReset(){$('reset-popover').hidden=true;}
$('reset').addEventListener('click',()=>{if(!dirty(current)||exporting)return;$('reset-message').textContent=`重置将清除『${NAMES[current]}』的所有修改，且无法恢复。`;$('reset-popover').hidden=false;$('reset-cancel').focus();});
$('reset-cancel').addEventListener('click',hideReset);$('reset-confirm').addEventListener('click',()=>{clearTimeout(saveTimer);saveTimer=null;data[current]={...DEFAULTS[current]};remove('tpl:'+IDS[current]);hideReset();selectTemplate(current);toast('已重置');});
document.addEventListener('pointerdown',e=>{if(!e.target.closest('.reset-wrap'))hideReset();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'){hideReset();if(emptyResolver)resolveEmpty(false);}if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==='e'){e.preventDefault();exportCurrent();}});
$('template-list').addEventListener('keydown',e=>{if(e.key==='ArrowDown'||e.key==='ArrowUp'){e.preventDefault();selectTemplate((current+(e.key==='ArrowDown'?1:6))%7);}});
document.querySelectorAll('[data-mode]').forEach(b=>b.addEventListener('click',()=>{mode=b.dataset.mode;write('mode',{version:1,value:mode});renderPreview();}));
new ResizeObserver(resizePreview).observe($('preview-area'));window.addEventListener('resize',resizePreview);window.addEventListener('pagehide',flushSave);
function buildFileName(){const key=current===2?'mainTitle':[0,1,3,6].includes(current)?'title':null;const title=key?(data[current][key]||'').trim().replace(/[\r\n]+/g,'').replace(/[\\/:*?"<>|]/g,'-').trim():'';const now=new Date(),p=n=>String(n).padStart(2,'0'),stamp=`${now.getFullYear()}${p(now.getMonth()+1)}${p(now.getDate())}-${p(now.getHours())}${p(now.getMinutes())}`;return [NAMES[current],...(title?[title]:[]),stamp].join('_')+'@3x.png';}
// html2canvas 1.4.1 understands matrix transforms, but not the independent
// transform properties used by Tailwind v4. Resolve percentages against the
// untransformed border box, then compose in CSS order on the cloned nodes.
function prepareExportClone(original, clone) {
  const sources=[original,...original.querySelectorAll('*')], targets=[clone,...clone.querySelectorAll('*')];
  sources.forEach((source,index)=>{
    const target=targets[index], cs=getComputedStyle(source);
    if(!target || !target.style)return;
    const box=(axis)=>{
      const size=parseFloat(cs[axis])||0;
      if(cs.boxSizing==='border-box')return size;
      const sides=axis==='width'?['Left','Right']:['Top','Bottom'];
      return size+sides.reduce((n,side)=>n+(parseFloat(cs['padding'+side])||0)+(parseFloat(cs['border'+side+'Width'])||0),0);
    };
    const length=(value,axis)=>value.endsWith('%')?parseFloat(value)*box(axis)/100:parseFloat(value)||0;
    let matrix=new DOMMatrix(), changed=false;
    if(cs.translate && cs.translate!=='none'){
      const v=cs.translate.split(/\s+/);matrix=matrix.translate(length(v[0],'width'),length(v[1]||'0','height'),parseFloat(v[2])||0);changed=true;
    }
    if(cs.rotate && cs.rotate!=='none'){
      const v=cs.rotate.split(/\s+/), angle=parseFloat(v.at(-1));
      if(v.length===1)matrix=matrix.rotate(angle);
      else if(v.length===2){const axis={x:[1,0,0],y:[0,1,0],z:[0,0,1]}[v[0]]||[0,0,1];matrix=matrix.rotateAxisAngle(...axis,angle);}
      else matrix=matrix.rotateAxisAngle(Number(v[0]),Number(v[1]),Number(v[2]),angle);
      changed=true;
    }
    if(cs.scale && cs.scale!=='none'){
      const v=cs.scale.split(/\s+/).map(Number);matrix=matrix.scale(v[0],v[1]??v[0],v[2]??1);changed=true;
    }
    if(cs.transform && cs.transform!=='none'){matrix=matrix.multiply(new DOMMatrix(cs.transform));changed=true;}
    if(changed){target.style.transform=matrix.toString();target.style.translate='none';target.style.rotate='none';target.style.scale='none';}
    // html2canvas treats overflow:clip as visible; hidden has the same rounded clipping here.
    if(cs.overflowX==='clip' || cs.overflowY==='clip')target.style.overflow='hidden';
    // The two Tailwind gradient backgrounds use oklab, unsupported by html2canvas.
    // Rasterize the same browser color-mix at export resolution into a local data URI.
    if(cs.backgroundImage.includes('in oklab')){
      const from=cs.getPropertyValue('--tw-gradient-from').trim(),to=cs.getPropertyValue('--tw-gradient-to').trim();
      if(from&&to){
        const canvas=document.createElement('canvas');canvas.width=1;canvas.height=Math.max(1,Math.round((source.clientHeight||box('height'))*3));
        const ctx=canvas.getContext('2d');
        for(let y=0;y<canvas.height;y++){const pct=(y+.5)/canvas.height*100;ctx.fillStyle=`color-mix(in oklab, ${from} ${100-pct}%, ${to} ${pct}%)`;ctx.fillRect(0,y,1,1);}
        target.style.backgroundImage=`url("${canvas.toDataURL()}")`;target.style.backgroundSize='100% 100%';
      }
    }
  });
  // Resolve pure translations in the clone so html2canvas positions them correctly.
  const view=clone.ownerDocument.defaultView;
  targets.forEach(target=>{
    if(!target || !target.style)return;
    const cs=view.getComputedStyle(target);
    if((cs.position!=="absolute" && cs.position!=="relative") || cs.transform==="none")return;
    const matrix=new view.DOMMatrix(cs.transform);
    if(!matrix.is2D || matrix.a!==1 || matrix.b!==0 || matrix.c!==0 || matrix.d!==1)return;
    const left=parseFloat(cs.left),top=parseFloat(cs.top);
    if(!Number.isFinite(left) || !Number.isFinite(top))return;
    target.style.left=(left+matrix.e)+"px";
    target.style.top=(top+matrix.f)+"px";
    target.style.right="auto";target.style.bottom="auto";target.style.transform="none";
  });
}
async function renderPopupToCanvas(){const index=current, values={...data[index]};await designFontsReady;if(document.fonts?.ready)await document.fonts.ready;const {root}=createPopup(index,values);root.style.transform='none';const host=$('measure-host');host.appendChild(root);try{await Promise.all([...root.querySelectorAll('img')].map(img=>img.decode?img.decode():new Promise((resolve,reject)=>{if(img.complete){img.naturalWidth?resolve():reject();}else{img.onload=resolve;img.onerror=reject;}})));return await html2canvas(root,{scale:3,backgroundColor:null,width:297,height:396,logging:false,onclone:(_document,clonedRoot)=>prepareExportClone(root,clonedRoot)});}finally{root.remove();}}
function resolveEmpty(value){$('confirm-layer').hidden=true;const done=emptyResolver;emptyResolver=null;if(done)done(value);}
$('empty-cancel').addEventListener('click',()=>resolveEmpty(false));$('empty-confirm').addEventListener('click',()=>resolveEmpty(true));
function confirmEmpty(){return new Promise(resolve=>{emptyResolver=resolve;$('confirm-layer').hidden=false;$('empty-cancel').focus();});}
async function exportCurrent(){if(exporting||emptyResolver||$('export').disabled)return;const titleKey=current===2?'mainTitle':[0,1,3,6].includes(current)?'title':null;if(titleKey&&!data[current][titleKey].trim()&&!await confirmEmpty())return;exporting=true;$('export').disabled=true;$('reset').disabled=true;$('export').innerHTML='<span class="spinner" aria-hidden="true"></span><span>正在导出…</span>';const filename=buildFileName();try{const canvas=await renderPopupToCanvas();if(canvas.width!==891||canvas.height!==1188)throw Error('Unexpected canvas size');const blob=await new Promise((resolve,reject)=>canvas.toBlob(b=>b?resolve(b):reject(Error('PNG encoding failed')),'image/png'));const url=URL.createObjectURL(blob),a=document.createElement('a');a.download=filename;a.href=url;document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),60000);toast('已导出：'+filename);}catch(err){console.error(err);toast('导出失败，请重试',true);}finally{exporting=false;$('export').disabled=false;$('reset').disabled=!dirty(current);$('export').innerHTML='<span class="download-icon" aria-hidden="true">↓</span><span>导出图片</span>';}}
$('export').addEventListener('click',exportCurrent);
window.__app={exportCurrent,renderPopupToCanvas,buildFileName,getState:()=>({current,mode,data:JSON.parse(JSON.stringify(data)),exporting}),selectTemplate};
$('export').disabled=true;
const designFontsReady=Promise.all([
 ...[400,500,600,700,900].map(weight=>document.fonts.load(weight+' 16px "Popup MiSans"')),
 document.fonts.load('600 18px "Popup MiSans Demibold"'),
 document.fonts.load('600 18px "PingFang SC"'),document.fonts.load('400 10px "PingFang SC"')
]);
window.__app.ready=designFontsReady.then(()=>{selectTemplate(current);$('export').disabled=false;}).catch(err=>{
 console.error('Design font loading failed',err);
 $('export').title='原稿字体加载失败，请刷新页面重试';
 toast('原稿字体加载失败，请刷新页面重试',false);
});
