function highlightText(){$j(".list").children().removeAttr("style"),$j("#li-"+sliderBradley.counter).children().css("color","#EF4136")}$j=jQuery.noConflict(),$j(document).ready(function(){albert.pickRandomSlide()});var initMap=function(){for(var e,t,e,l,o=new google.maps.LatLngBounds,i=new google.maps.InfoWindow,n={zoom:6,center:{lat:mapData[0].lat,lng:mapData[0].long},disableDoubleClickZoom:!0,draggable:!0,scrollwheel:!1,panControl:!1,mapTypeControl:!1,streetViewControl:!1,styles:mapStyles},a={url:"http://10.1.10.96/southeast-land-management/content/themes/slmgmt/assets/pin.png",origin:new google.maps.Point(0,0),anchor:new google.maps.Point(0,0)},r=new google.maps.Map(document.getElementById("google-map"),n),l=0;l<mapData.length;l++)t=new google.maps.LatLng(mapData[l].lat,mapData[l].long),o.extend(t),e=new google.maps.Marker({position:t,map:r,icon:a}),google.maps.event.addListener(e,"click",function(e,t){return function(){i.setContent(mapData[t].content),i.open(r,e)}}(e,l)),r.fitBounds(o)},mapData=[{lat:32,long:-90,label:"A",content:'<div id="content"><p class="info-window">Albemarle Road - Howell Road LLC</p><p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p><p class="info-window">County: Cabarrus  Street: Howell Road</p><p class="info-window">Broker: NAI Southern Real Estate</p></div>'},{lat:30,long:-88,label:"B",content:'<div id="content"><p class="info-window">Bartholomew Road - Howell Road LLC</p><p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p><p class="info-window">County: Cabarrus  Street: Howell Road</p><p class="info-window">Broker: NAI Southern Real Estate</p></div>'},{lat:34,long:-85,label:"C",content:'<div id="content"><p class="info-window">Clarisssa Road - Howell Road LLC</p><p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p><p class="info-window">County: Cabarrus  Street: Howell Road</p><p class="info-window">Broker: NAI Southern Real Estate</p></div>'},{lat:36,long:-92,label:"D",content:'<div id="content"><p class="info-window">Dormond Road - Howell Road LLC</p><p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p><p class="info-window">County: Cabarrus  Street: Howell Road</p><p class="info-window">Broker: NAI Southern Real Estate</p></div>'},{lat:26,long:-102,label:"E",content:'<div id="content"><p class="info-window">Edward Road - Howell Road LLC</p><p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p><p class="info-window">County: Cabarrus  Street: Howell Road</p><p class="info-window">Broker: NAI Southern Real Estate</p></div>'},{lat:30,long:-97,label:"F",content:'<div id="content"><p class="info-window">Franco Road - Howell Road LLC</p><p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p><p class="info-window">County: Cabarrus  Street: Howell Road</p><p class="info-window">Broker: NAI Southern Real Estate</p></div>'},{lat:36,long:-82,label:"G",content:'<div id="content"><p class="info-window">Gegorian Road - Howell Road LLC</p><p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p><p class="info-window">County: Cabarrus  Street: Howell Road</p><p class="info-window">Broker: NAI Southern Real Estate</p></div>'}],mapStyles=[{elementType:"geometry",stylers:[{color:"#5B6267"}]},{elementType:"labels.text.stroke",stylers:[{visibility:"off"}]},{elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"administrative.province",elementType:"geometry",stylers:[{color:"#283038"}]},{featureType:"administrative.locality",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"poi",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"poi.park",elementType:"labels.text.fill",stylers:[{color:"#6b9a76"}]},{featureType:"road",elementType:"geometry",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road",elementType:"labels.text.fill",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"geometry",stylers:[{color:"#283038"}]},{featureType:"road.highway",elementType:"geometry.stroke",stylers:[{visibility:"off"}]},{featureType:"road.highway",elementType:"labels.text.fill",stylers:[{color:"#f3d19c"}]},{featureType:"road",elementType:"labels",stylers:[{visibility:"off"}]},{featureType:"transit",elementType:"geometry",stylers:[{color:"#2f3948"}]},{featureType:"transit.station",elementType:"labels.text.fill",stylers:[{color:"#d59563"}]},{featureType:"water",elementType:"geometry",stylers:[{color:"#283038"}]},{featureType:"water",elementType:"labels.text.fill",stylers:[{color:"#ffffff"}]},{featureType:"water",elementType:"labels.text.stroke",stylers:[{color:"#17263c"}]}];$j("#hamburger").on("click",function(e){e.preventDefault(),$j("#nav").fadeOut(250),$j("#slide-menu").fadeIn(150).animate({right:"0px"},500)}),$j("#close").on("click",function(e){e.preventDefault(),$j("#slide-menu").animate({right:"-80vw"}).fadeOut(250),$j("#nav").fadeIn(250)});var Slider={parent:"",children:"",duration:2e3,pauseTime:1e4,selector:"$",counter:1,clicked:!1};Slider.toggle=function(){this.clicked?this.clicked=!1:this.clicked=!0},Slider.slideFxn=function(){var e=$j(this.parent).children().length,t=$j(this.children+"-1").position().left;if(this.counter<=e&&this.counter>0){var l=$j(this.children+"-"+this.counter),o=l.position().left,i=o-t;this.$(this.parent).animate({scrollLeft:i},this.duration)}else this.counter=1,this.$(parent).animate({scrollLeft:0},this.duration)},Slider.autoPlay=function(e){this.clicked?setTimeout(this.autoPlay.bind(this,e),this.pauseTime):(this.counter++,this.slideFxn(),e&&e(),setTimeout(this.autoPlay.bind(this,e),this.pauseTime))},Slider.start=function(e,t){this.$(this.parent).length&&setTimeout(this.autoPlay.bind(this,t),e)},Slider.moveSlide=function(){Slider.toggle(),this.slideFxn(),setInterval(this.toggle.bind(this),4e3)},Slider.next=function(e){this.counter++,e(),this.moveSlide()},Slider.prev=function(e){this.counter--,e(),this.moveSlide()},albert={},albert.scaleIn=function(e){$j("#sa-"+e).fadeIn(1500,function(){$j("#sa-"+e).css({transform:"scale(1.2)",transition:"all 10s"}),console.log(e,"random number from random slider")})},albert.pickRandomSlide=function(){var e=($j(".albert").length,Math.floor(4*Math.random()+1));this.scaleIn(e)},albert.scrollDown=function(){var e=$j("#bio").offset();$j("html, body").animate({scrollTop:e.top},"slow","swing")},$j("#albert-down").on("click",albert.scrollDown);var sliderBradley=Object.create(Slider);sliderBradley.parent="#writeups",sliderBradley.children="#wu",sliderBradley.$=jQuery.noConflict(),sliderBradley.duration=1e3,sliderBradley.start(4e3,highlightText),$j("#arrow-right").on("click",function(){sliderBradley.next(highlightText)}),$j("#arrow-left").on("click",function(){sliderBradley.prev(highlightText)}),$j(".list").on("click",function(e){e.preventDefault();var t=$j(this).attr("id").split("-");sliderBradley.counter=t[1],$j(".list").children().removeAttr("style"),$j(this).children().css("color","#EF4136"),sliderBradley.moveSlide(),console.log("manual override of counter: ",sliderBradley.counter)});