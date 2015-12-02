// Get the SVG document inside the Object tag
var obj_1 = $('.design-animation'),
	obj_2 = $('.code-animation'),
	obj_3 = $('.about-workflow__infographic');
	obj_4 = $('.about-workflow__infographic');



// Prevent execution until document loads
window.addEventListener('load', designAnim, false);
window.addEventListener('load', codeAnim, false);
window.addEventListener('load', workflowMobile, false);
window.addEventListener('load', workflowDesktop, false);


//SVG animation functions
//Skills
var designAnim = function() {
	var svgDoc = obj_1.contents();
	var designTriangle = svgDoc.find('.design-tab-triangle'),
		designTriangleGroup = svgDoc.find('.design-triangle-group'),
		logo = svgDoc.find('.rr-letter'),
		sun = svgDoc.find('.design-sun'),
		designBg = svgDoc.find('.design-bg'),
		designCloud = svgDoc.find('.cloud'),
		designForest = svgDoc.find('.forest'), 
		tlD = new TimelineLite();
		
		tlD
	      .to(designTriangle, 3, {rotation: 180,  transformOrigin: "50% 58%", scale: 1.5, ease: Elastic.easeOut.config(1, .4)}, "bg")
	      .fromTo(sun, 2, {y:"250"}, {y:"0", opacity: 1}, "bg")
	      .fromTo(designCloud, 2, {x:"250"}, {x:"0"}, "bg")
	      .to(designBg,2, {attr:{fill: "#A4EBFF"}}, "bg")
		  .to(designTriangle, 1, {attr:{fill: "#ffe082"}, ease: Bounce.easeOut})			        
		  .to(logo, 1, {y: "15", opacity: 1, ease: Bounce.easeOut}, "-=.5")
		  .to(designTriangleGroup, 3, {scaleY: 4.5, scaleX:1.1, transformOrigin: "50% 99%", ease: Elastic.easeOut.config(2, .4)}, "bg")
	      .fromTo(designForest, 2, {y: "150"}, {y: "5"}, "bg")
	      .to(designTriangle, 1, {fill: "transparent", ease: Bounce.easeOutm, delay: 1.5})			    
	      .to(logo, 1, {opacity: 0, ease: Bounce.easeOut}, "-=1")
	      .to(designTriangle, 3, {rotation: 0,  transformOrigin: "50% 58%", scale: 1, ease: Elastic.easeOut.config(1, .8)}, "bg-back")
	      .to(designTriangleGroup, 3, {scaleY: 1, scaleX: 1, transformOrigin: "50% 99%", ease: Elastic.easeOut.config(1, .4)}, "bg-back")
	      .to(sun, 1, {x:"-150", opacity: 0}, "bg-back")
	      .to(designCloud, 1, {x:"150"}, "bg-back")
	      .to(designBg,2, {attr:{fill: "rgba(255,255,255,0)"}}, "bg-back")
	      .to(designForest, 2, {y: "150"}, "bg-back");

};
		  
var codeAnim = function() {
	var svgDoc = obj_2.contents();
	var codeBg = svgDoc.find('.code-bg'),
		codeMoon = svgDoc.find('.code-moon'),
		codeLines = svgDoc.find('.code-lines'),
		codeCircle = svgDoc.find('.code-ok'),
		codeCheck = svgDoc.find('.code-check'),
		codeHouses = svgDoc.find('.code-houses'),
		codeWindows = svgDoc.find('.code-windows'),
		codeCheckGroup = svgDoc.find('.code-check-group'),
		codeModal = svgDoc.find('.code-modal'),
		tlC = new TimelineLite();

		tlC
	      .to(codeLines, 1.5, {y:-25}, "c-bg")
	      .to(codeHouses, 3, {scaleY: 2.5, scaleX:1.07, transformOrigin: "50% 99%", ease: Elastic.easeOut.config(1.5, .4)}, "c-bg")
	      .to(codeWindows, 2, {opacity:1}, "c-bg")
	      .to(codeBg, 2, {attr:{fill:"#666666"}}, "c-bg")
	      .to(codeMoon, 2, {attr:{cx: 500, opacity:1, fill: "#eee"}}, "c-bg")
	      .to(codeCircle, 1, {transformOrigin: "50% 50%", attr:{opacity: 1}, scale: 1.2,ease: Elastic.easeOut.config(2, .4)}, "check-s")
	      .to(codeCheck, 1.5, {transformOrigin: "50% 50%", attr:{opacity: 1}, scale: 1.2,ease: Elastic.easeOut.config(2, .2)}, "check-s")
	      .to(codeCheckGroup, .2, {transformOrigin: "50% 50%", scale:0.4, x:"65"})
	      .to(codeModal, 1.9, {attr:{opacity:1}})
	      .to(codeModal, .1, {attr:{opacity:0}, y:"-50"},"check-o, +=.3")
	      .to(codeCheck, 0, {attr:{opacity:0}},"check-o -=.1")
	      .to(codeCheckGroup, 1.5, {transformOrigin: "50% 50%", attr:{opacity:.1}, scale:1, x:"0", ease:Bounce.easeOut}, "check-o")
	      .to(codeLines, 2, {y:0, ease:Bounce.easeOut}, "check-o")
	      .to(codeHouses, 3, {scaleY: 1, scaleX:1, transformOrigin: "50% 99%", ease: Elastic.easeOut.config(1.5, .4)}, "check-o")
	      .to(codeWindows, 1, {opacity:0}, "check-o")
	      .to(codeBg, 1, {attr:{fill:"rgba(0,0,0,0)"}}, "check-o")
	      .to(codeMoon, 1, {attr:{cx:"600"}}, "check-o");
};

//Workflow set

//Infographic mobile

var workflowMobile = function () {
	var svgDoc = obj_3.contents();

	var thinkingLight = svgDoc.find('.bulb-light-m'),
    	thinkingBg = svgDoc.find('.circles-m').children(),
    	designingPen = svgDoc.find('.pencil-m'),
	    designingPenFill = svgDoc.find('.pen-fill-m').children(),
	    designingRuler = svgDoc.find('.ruler-m'),   
	    designingRulerFill = svgDoc.find('.ruler-fill-m'),
	    designingBg = svgDoc.find('.triangles-m').children(),
		codingLine = svgDoc.find('.coding-line-m'),
	    codingInner = svgDoc.find('.coding-inner-m'),
	    codingBg = svgDoc.find('.oct-m').children(),
	    deployingInner = svgDoc.find('.cloud-area-m'),
	    deployingArrow = svgDoc.find('.cloud-arrow-m'),
	    deployingBg = svgDoc.find('.rect-m').children(),

		mobileAnimation = new TimelineLite();
		mobileAnimation
		  .to(thinkingLight, 3, {fill: "#ffe082", ease: Bounce.easeOut}, "thinking")
	      .fromTo(thinkingBg, 2,{attr:{fill: "transparent"}, opacity:0, scale:0, x:-500}, {attr:{fill: "#ffe082"}, opacity: 1, scale: 1, x: 0, ease: Elastic.easeOut.config(1,.6)}, "thinking")
		  .to(designingPen, 2, {transformOrigin: "50% 50%", rotation: 45, x: 25}, "designing")
		  .to(designingRuler, 2, {transformOrigin: "50% 50%", rotation:- 45, x: -10}, "designing")
		  .to(designingPenFill, 1, {attr:{fill: "#FF6A6A"}}, "designing")
		  .to(designingRulerFill, 1, {attr:{fill: "#FF6A6A"}}, "designing")
		  .fromTo(designingBg, 2, {transformOrigin: "50% 50%", attr:{fill: "transparent"}, opacity: 0, scale:0}, {transformOrigin: "50% 50%", attr:{fill: "#FF6A6A"}, opacity: 1, scale:1, ease: Elastic.easeOut.config(1,.4)}, "designing")
		  .to(codingInner, 2, {attr:{fill:"#61A5EC"}}, "coding")
	      .to(codingLine, 2, {attr:{fill:"#fff"}}, "coding")
	      .fromTo(codingBg, 2, {y:-200, attr:{fill: "transparent"}}, {y:0, opacity:1, attr:{fill:"#61A5EC"}, ease: Bounce.easeOut}, "coding")
	      .to(deployingInner, 2, {attr:{fill:"#78EA9D"}}, "deploying")
          .to(deployingArrow, 2, {y:-20, fill: "#fff", stroke: "#fff"}, "deploying")
          .fromTo(deployingBg, 2, {transformOrigin: "50% 50%", rotation:0}, {transformOrigin: "50% 50%", attr:{fill:"#78EA9D"}, opacity:1, rotation: 360, ease: Bounce.easeOut}, "deploying");
}
var workflowDesktop = function() {
	var svgDoc = obj_4.contents();
	var thinkingGroup = svgDoc.find('.thinking-g'),
    designingGroup = svgDoc.find('.sketch-g'),
    codingGroup = svgDoc.find('.coding-g'),
    deployingGroup = svgDoc.find('.deploying-g'),
    thinkingIcon = svgDoc.find('.first-icon'),
    designingIcon = svgDoc.find('.second-icon'),
    codingIcon = svgDoc.find('.third-icon'),
    deployingIcon = svgDoc.find('.fourth-icon'),

    thinkingLight = svgDoc.find('.bulb-light'),
    thinkingBg = svgDoc.find('.circles').children(),

    designingPen = svgDoc.find('.pencil'),
    designingPenFill = svgDoc.find('.pencil-fill').children(),
    designingRuler = svgDoc.find('.ruler'),   
    designingRulerFill = svgDoc.find('.ruler-fill'),
    designingBg = svgDoc.find('.triangles'),

    codingLine = svgDoc.find('.coding-line'),
    codingInner = svgDoc.find('.coding-inner'),
    codingBg = svgDoc.find('.oct').children(),

    deployingInner = svgDoc.find('.cloud-inner'),
    deployingArrow = svgDoc.find('.cloud-arrow'),
    deployingBg = svgDoc.find('.rect').children(),

	c1 = svgDoc.find('.c1'),    
	c2 = svgDoc.find('.c2'),       
	c3 = svgDoc.find('.c3'),
	c4 = svgDoc.find('.c4'),       
	c5 = svgDoc.find('.c5'), 
	c6 = svgDoc.find('.c6'),       
	c7 = svgDoc.find('.c7'),  
	c8 = svgDoc.find('.c8'),       
	c9 = svgDoc.find('.c9'),       
	c10 = svgDoc.find('.c10'),     
	c11 = svgDoc.find('.c11'),
	c12 = svgDoc.find('.c12'),
	c13 = svgDoc.find('.c13'),
	c14 = svgDoc.find('.c14'),
	c15 = svgDoc.find('.c15'),
	c16 = svgDoc.find('.c16'),
	c17 = svgDoc.find('.c17'),
	c18 = svgDoc.find('.c18'),
	c19 = svgDoc.find('.c19'),
	c20 = svgDoc.find('.c20'),
	c21 = svgDoc.find('.c21'),     
	c22 = svgDoc.find('.c22'),
	c23 = svgDoc.find('.c23'),
	c24 = svgDoc.find('.c24'),
	c25 = svgDoc.find('.c25'),
	c26 = svgDoc.find('.c26'),
	c27 = svgDoc.find('.c27'),
	c28 = svgDoc.find('.c28'),
	c29 = svgDoc.find('.c29'),
	c30 = svgDoc.find('.c30'),

	workflowAnim = new TimelineMax({repeat: -1, repeatDelay:2});
	workflowAnim

		.to(thinkingIcon, 1, {transformOrigin: "50% 50%", attr:{fill:"#ffe082", stroke: "#efefef"}, scale: 1.2}, "thinking-s")
		.fromTo(thinkingGroup, .5, {transformOrigin: "50% 50%", y: 100}, {transformOrigin: "50% 50%", y: 0, attr:{opacity:1}, ease:Elastic.easeOut.config(1,.5)}, "thinking-s, -=1")
		.to(thinkingLight, 3, {attr:{fill: "#ffe082"}, ease: Bounce.easeOut}, "thinking-s")
		.fromTo(thinkingBg, 2,{attr:{fill: "transparent"}, opacity:0, scale:0, x:-500}, {attr:{fill: "#ffe082"}, opacity: 1, scale: 1, x: 0, ease: Elastic.easeOut.config(1,.6)}, "thinking-s")
		.staggerTo([c1,c2,c3,c4,c5,c6,c7,c8,c9,c10], .8, {transformOrigin: "50% 50%", attr:{fill: "#ffe082", stroke: "transparent"}, scale: .9, ease:Elastic.easeOut.config(2,.4)}, .3)
		.to(thinkingIcon, .8, {transformOrigin: "50% 50%", attr:{fill:"rgba(255,255,255,0)", stroke: "#ffe082"}, scale: 1}, "second-s")
		.to(thinkingGroup, .2, {transformOrigin: "50% 50%", y: 100, attr:{opacity:0}}, "second-s")
		.to(designingIcon, 1, {transformOrigin: "50% 50%", attr:{fill:"#FF6A6A", stroke: "#e5e5e5"}, scale: 1.2}, "second-s")
		.fromTo(designingGroup, .5,{transformOrigin: "50% 50%", y: 100}, {transformOrigin: "50% 50%", y: 0, attr:{opacity:1}, ease:Elastic.easeOut.config(1,.5)}, "second-s")
		.to(designingPen, 2, {transformOrigin: "50% 50%", rotation: 45, x: 25}, "second-s")
		.to(designingRuler, 2, {transformOrigin: "50% 50%", rotation:- 45, x: -10}, "second-s")
		.to(designingPenFill, 1, {attr:{fill: "#FF6A6A"}}, "second-s")
		.to(designingRulerFill, 1, {attr:{fill: "#FF6A6A"}}, "second-s")
		.fromTo(designingBg, 2, {transformOrigin: "50% 50%", attr:{fill: "transparent"}, opacity: 0, scale:0}, {transformOrigin: "50% 50%", attr:{fill: "#FF6A6A"}, opacity: 1, scale:1, ease: Elastic.easeOut.config(1,.4)}, "second-s")
		.staggerTo([c11,c12,c13,c14,c15,c16,c17,c18,c19,c20], .8, {transformOrigin: "50% 50%", attr:{fill: "#FF6A6A", stroke: "transparent"}, scale: .9, ease:Elastic.easeOut.config(2,.4)}, .3)
		.to(designingGroup, .2, {transformOrigin: "50% 50%", y: 100, attr:{opacity:0}}, "third-s")
		.to(designingIcon, .8, {transformOrigin: "50% 50%", attr:{fill:"rgba(255,255,255,0)", stroke: "#FF6A6A"}, scale: 1}, "third-s")
		.to(codingIcon, 1, {transformOrigin: "50% 50%", attr:{fill:"#61A5EC", stroke: "#e5e5e5"}, scale: 1.2}, "third-s")
		.fromTo(codingGroup, .5,{transformOrigin: "50% 50%", y: 100}, {transformOrigin: "50% 50%", y: 0, attr:{opacity:1}, ease:Elastic.easeOut.config(1,.5)}, "third-s")
		.to(codingInner, 2, {attr:{fill:"#61A5EC"}}, "third-s")
		.to(codingLine, 2, {attr:{fill:"#fff"}}, "third-s")
		.fromTo(codingBg, 2, {y:-200, attr:{fill: "transparent"}}, {y:0, opacity:1, attr:{fill:"#61A5EC"}, ease: Bounce.easeOut}, "third-s")
		.staggerTo([c21,c22,c23,c24,c25,c30,c26,c27,c28,c29], .8, {transformOrigin: "50% 50%", attr:{fill: "#61A5EC", stroke: "transparent"}, scale: .9, ease:Elastic.easeOut.config(2,.4)}, .3)
		.to(codingGroup, .2, {transformOrigin: "50% 50%", y: 100, attr:{opacity:0}}, "fourth-s")
		.to(codingIcon, .8, {transformOrigin: "50% 50%", attr:{fill:"rgba(255,255,255,0)", stroke: "#61A5EC"}, scale: 1}, "fourth-s")
		.fromTo(deployingGroup, .5,{transformOrigin: "50% 50%", y: 100}, {transformOrigin: "50% 50%", y: 0, attr:{opacity:1}, ease:Elastic.easeOut.config(1,.5)}, "fourth-s")
		.to(deployingIcon, 1, {transformOrigin: "50% 50%", attr:{fill:"#78EA9D", stroke: "#e5e5e5"}, scale: 1.2}, "fourth-s")
		.to(deployingInner, 2, {attr:{fill:"#78EA9D"}}, "fourth-s")
		.to(deployingArrow, 2, {y:-20, fill: "#fff", stroke: "#fff"}, "fourth-s")
		.fromTo(deployingBg, 2, {transformOrigin: "50% 50%", rotation:0}, {transformOrigin: "50% 50%", attr:{fill:"#78EA9D"}, opacity:1, rotation: 360, ease: Bounce.easeOut}, "fourth-s")

}
