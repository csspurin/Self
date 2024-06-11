// 輪播
// import SwiperJs from './_swiper';


// 圖片延遲讀取*********************************************
import LazyLoad from "vanilla-lazyload";
var myLazyLoad = new LazyLoad();
// After your content has changed...
myLazyLoad.update();

// 產品幻燈片*********************************************
// import PhotoSwipe from './_photoSwipe';


// gsap 動畫**********************************************

import HorizontalScroll from "./pluging/gsap__HorizontalScroll";

// 文字動畫但要付費
// import SplitText from "./pluging/gsap__SplitText";


// splitting 文字動畫**********************************************
import splitting from "./pluging/splitting";

// AOS 文字動畫**********************************************

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

// 視差滾動**********************************************

import simpleParallax from 'simple-parallax-js';
var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, {
	delay: .6,
	transition: 'cubic-bezier(0,0,0,1)'
});