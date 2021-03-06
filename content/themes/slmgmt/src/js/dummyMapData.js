// /**
// *
// * Map Data
// *
// * hardcoded dummy Data to populate Google Maps
// */

// var dummyMapData = [
//   {
//    lat: 35.243094,
//    long: -80.604347,
//    content: '<div id="content">'+
//      '<p class="info-window">Albemarle Road - Howell Road LLC</p>'+
//      '<p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Howell Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>'
//   },{
//    lat: 35.234722,
//    long: -80.607367,
//    content: '<div id="content">'+
//      '<p class="info-window">Albemarle Road LLC</p>'+
//      '<p class="info-window">Acres: 105.91  Parcel: ID 5524054394</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Albemarle Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>'
//   },{
//    lat: 35.252236,
//    long: -80.608219,
//    content: '<div id="content">'+
//      '<p class="info-window">Lower Rocky River - Morrison Road LLC</p>'+
//      '<p class="info-window">Acres: 481.26  Parcel: ID 5514796250</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Morrison Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>'
//   },{
//    lat: 35.245056,
//    long: -80.59925,
//    content: '<div id="content">'+
//      '<p class="info-window">Pioneer Mill Road LLC</p>'+
//      '<p class="info-window">Acres: 92.54  Parcel: ID 5524289123</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Pioneer Mill Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>'	
//   },{
//    lat: 35.265217,
//    long: -80.551639,
//    content: '<div id="content">'+
//      '<p class="info-window">Bethel Church Road LLC</p>'+
//      '<p class="info-window">Acres: 168.97  Parcel: ID 5535745537</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Bethel Church Rd</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>'	
//   },{
//    lat: 35.217261,
//    long: -81.057253,
//    content: '<div id="content">'+
//      '<p class="info-window">Belmont # 1 - US 321/74 Bypass LLC</p>'+
//      '<p class="info-window">Acres: 462.4  Parcel: ID 18844</p>'+
//      '<p class="info-window">County: Gaston  Street: Armstrong Ford Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>'	
//   },{
//    lat: 35.205683,
//    long: -81.046794,
//    content: '<div id="content">'+
//      '<p class="info-window">Belmont # 2 - US 321/74 Bypass LLC</p>'+
//      '<p class="info-window">Acres: 205.52  Parcel: ID 201480</p>'+
//      '<p class="info-window">County: Gaston  Street: </p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>'	
//   },{
//    lat: 35.200169,
//    long: -81.037444,
//    content: '<div id="content">'+
//      '<p class="info-window">Belmont # 3 - US 321/74 Bypass LLC</p>'+
//      '<p class="info-window">Acres: 349.08  Parcel: ID 201475</p>'+
//      '<p class="info-window">County: Gaston  Street: Gaither Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.389997,
//    long: -81.223947,
//    content: '<div id="content">'+
//      '<p class="info-window">High Shoals - Highway 321 LLC</p>'+
//      '<p class="info-window">Acres: 319.28  Parcel: ID 164779</p>'+
//      '<p class="info-window">County: Gaston  Street: Miles Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.206467,
//    long: -81.211772,
//    content: '<div id="content">'+
//      '<p class="info-window">Highway 321 - Stagecoach Road LLC</p>'+
//      '<p class="info-window">Acres: 146.29  Parcel: ID 143118</p>'+
//      '<p class="info-window">County: Gaston  Street: Stagecoach Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.211567,
//    long: -81.214403,
//    content: '<div id="content">'+
//      '<p class="info-window">Stagecoach Road LLC</p>'+
//      '<p class="info-window">Acres: 120.35  Parcel: ID 143088</p>'+
//      '<p class="info-window">County: Gaston  Street: Stagecoach Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.186836,
//    long: -81.21565,
//    content: '<div id="content">'+
//      '<p class="info-window">Highway 321 - Forbes Road LLC</p>'+
//      '<p class="info-window">Acres: 406.6  Parcel: ID 146376</p>'+
//      '<p class="info-window">County: Gaston  Street: Highway 321</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.254269,
//    long: -80.562444,
//    content: '<div id="content">'+
//      '<p class="info-window">Highway 24/27 LLC</p>'+
//      '<p class="info-window">Acres: 134.88  Parcel: ID 5535316128</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Highway 24/27</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.443167,
//    long: -80.387667,
//    content: '<div id="content">'+
//      '<p class="info-window">Highway 49 - St. Stephens Church Road LLC</p>'+
//      '<p class="info-window">Acres: 618.56  Parcel: ID 5682816183</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Highway 49</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.263069,
//    long: -81.2604,
//    content: '<div id="content">'+
//      '<p class="info-window">I-85 - Highway 29/74 LLC</p>'+
//      '<p class="info-window">Acres: 231.54  Parcel: ID 205044</p>'+
//      '<p class="info-window">County: Gaston  Street: I-85</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.496697,
//    long: -81.027892,
//    content: '<div id="content">'+
//      '<p class="info-window">Kidville Road - NC 16 Bypass LLC</p>'+
//      '<p class="info-window">Acres: 602  Parcel: ID 53910</p>'+
//      '<p class="info-window">County: Lincoln  Street: Kidville Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.506619,
//    long: -81.027133,
//    content: '<div id="content">'+
//      '<p class="info-window">St. James Church Road - NC 16 Bypass LLC</p>'+
//      '<p class="info-window">Acres: 182.42  Parcel: ID 32607</p>'+
//      '<p class="info-window">County: Lincoln  Street: St. James Church Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.443719,
//    long: -81.140069,
//    content: '<div id="content">'+
//      '<p class="info-window">Lincoln County - Orchard Road LLC</p>'+
//      '<p class="info-window">Acres: 339.27  Parcel: ID 28284</p>'+
//      '<p class="info-window">County: Orchard  Street: Orchard Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.528972,
//    long: -81.0655,
//    content: '<div id="content">'+
//      '<p class="info-window">Beth Haven Church Road - NC 16 Bypass LLC</p>'+
//      '<p class="info-window">Acres: 235.04  Parcel: ID 80967</p>'+
//      '<p class="info-window">County: Lincoln  Street: St. James Church Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.294703,
//    long: -80.445319,
//    content: '<div id="content">'+
//      '<p class="info-window">Locust - Highway 200 LLC</p>'+
//      '<p class="info-window">Acres: 379.55  Parcel: ID 5566941933</p>'+
//      '<p class="info-window">County: Cabarrus  Street: NC Highway 200</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.268503,
//    long: -80.609556,
//    content: '<div id="content">'+
//      '<p class="info-window">Lower Rocky River Road LLC</p>'+
//      '<p class="info-window">Acres: 98.83 Parcel: ID 5525076170</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Lower Rocky River Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.166931,
//    long: -80.567092,
//    content: '<div id="content">'+
//      '<p class="info-window">Highway 218 - Mill Grove Road LLC</p>'+
//      '<p class="info-window">Acres: 303.71  Parcel: ID 8249001</p>'+
//      '<p class="info-window">County: Union  Street: Highway 218</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.029864,
//    long: -80.587872,
//    content: '<div id="content">'+
//      '<p class="info-window">Monroe - Independence LLC</p>'+
//      '<p class="info-window">Acres: 51.5  Parcel: ID 09298068A</p>'+
//      '<p class="info-window">County: Union  Street: Us Highway 74</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 34.934744,
//    long: -80.47995,
//    content: '<div id="content">'+
//      '<p class="info-window">Monroe Bypass - Highway 601 LLC</p>'+
//      '<p class="info-window">Acres: 843.85  Parcel: ID 09066001</p>'+
//      '<p class="info-window">County: Union  Street: US Highway 601</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.386906,
//    long: -80.411975,
//    content: '<div id="content">'+
//      '<p class="info-window">Mount Pleasant - Highway 73 LLC</p>'+
//      '<p class="info-window">Acres: 57.46  Parcel: ID 9128016</p>'+
//      '<p class="info-window">County: Union  Street: Macedonia Church Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.367458,
//    long: -80.422908,
//    content: '<div id="content">'+
//      '<p class="info-window">Mount Pleasant - Long Run Farm Road LLC</p>'+
//      '<p class="info-window">Acres: 452.26  Parcel: ID 5579425599</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Long Run Farm Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.360003,
//    long: -80.424597,
//    content: '<div id="content">'+
//      '<p class="info-window">Mount Pleasant - Monroe LLC</p>'+
//      '<p class="info-window">Acres: 231.53  Parcel: ID 5578493740</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Hahn Scott Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.326861,
//    long: -80.477022,
//    content: '<div id="content">'+
//      '<p class="info-window">Mount Pleasant - Highway 200 LLC</p>'+
//      '<p class="info-window">Acres: 652.1  Parcel: ID 557949580</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Mount Pleasant Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.342331,
//    long: -80.692817,
//    content: '<div id="content">'+
//      '<p class="info-window">Speedway - Hudspeth LLC</p>'+
//      '<p class="info-window">Acres: 39.99  Parcel: ID 05109106</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Hudspeth Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.193256,
//    long: -81.107017,
//    content: '<div id="content">'+
//      '<p class="info-window">Union New Hope Road LLC</p>'+
//      '<p class="info-window">Acres: 219.26  Parcel: ID 205616</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Union New Hope Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 34.922628,
//    long: -80.710456,
//    content: '<div id="content">'+
//      '<p class="info-window">Highway 75 LLC</p>'+
//      '<p class="info-window">Acres: 311.26  Parcel: ID 5060003</p>'+
//      '<p class="info-window">County: Union  Street: Highway 75</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 34.914217,
//    long: -80.695056,
//    content: '<div id="content">'+
//      '<p class="info-window">Old Waxhaw - Monroe Road Joint Venture</p>'+
//      '<p class="info-window">Acres: 944.77  Parcel: ID 05033188</p>'+
//      '<p class="info-window">County: Union  Street: Old Waxhaw Monroe Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.548006,
//    long: -78.761464,
//    content: '<div id="content">'+
//      '<p class="info-window">Raleigh - Highway 55 LLC</p>'+
//      '<p class="info-window">Acres: 148.66  Parcel: ID 0675 14 1029 000,</p>'+
//      '<p class="info-window">County: Wake  Street: NC Highway 55</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.776417,
//    long: -79.228247,
//    content: '<div id="content">'+
//      '<p class="info-window">Parks at Meadowview Land, LLC</p>'+
//      '<p class="info-window">Acres: 59.13  Parcel: ID 0665746312</p>'+
//      '<p class="info-window">County: Wake  Street: Purfoy Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.771203,
//    long: -79.20955,
//    content: '<div id="content">'+
//      '<p class="info-window">Parks at Meadowview Lot, LLC</p>'+
//      '<p class="info-window">Acres: 485  Parcel: ID 5912</p>'+
//      '<p class="info-window">County: Chatham  Street: Old Graham Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.839264,
//    long: -78.483397,
//    content: '<div id="content">'+
//      '<p class="info-window">Raleigh - River Town - Fuquay LLC</p>'+
//      '<p class="info-window">Acres: 328.43  Parcel: ID 1756309588</p>'+
//      '<p class="info-window">County: Wake  Street: Buffaloe Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.958792,
//    long: -78.781047,
//    content: '<div id="content">'+
//      '<p class="info-window">Raleigh - Durham - RTP LLC</p>'+
//      '<p class="info-window">Acres: 219.42  Parcel: ID 193368</p>'+
//      '<p class="info-window">County: Durham  Street: Olive Branch Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 33.148097,
//    long: -80.139978,
//    content: '<div id="content">'+
//      '<p class="info-window">Charleston - Berkeley County LLC</p>'+
//      '<p class="info-window">Acres: 309.63  Parcel: ID 1600002108</p>'+
//      '<p class="info-window">County: Berkeley  Street: Cooper Store Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 33.127517,
//    long: -80.171989,
//    content: '<div id="content">'+
//      '<p class="info-window">Charleston - Jedburg Road LLC</p>'+
//      '<p class="info-window">Acres: 226.7 Parcel: ID 1780003001</p>'+
//      '<p class="info-window">County: Berkeley  Street: Jedburg Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.046908,
//    long: -81.109822,
//    content: '<div id="content">'+
//      '<p class="info-window">Charlotte - Allison Creek, LLC</p>'+
//      '<p class="info-window">Acres: 328.7  Parcel: ID 4880000009</p>'+
//      '<p class="info-window">County: York  Street: Highway 49</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 33.908903,
//    long: -78.624153,
//    content: '<div id="content">'+
//      '<p class="info-window">Little River - Highway 50 LLC</p>'+
//      '<p class="info-window">Acres: 694.76  Parcel: ID 1180001007</p>'+
//      '<p class="info-window">County: Horry  Street: State Highway 50</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 33.906972,
//    long: -78.642453,
//    content: '<div id="content">'+
//      '<p class="info-window">Little River - Highway 57 and Highway 111 LLC</p>'+
//      '<p class="info-window">Acres: 399.01  Parcel: ID 1180001001</p>'+
//      '<p class="info-window">County: Horry  Street: State Highway 57</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.851772,
//    long: -86.882194,
//    content: '<div id="content">'+
//      '<p class="info-window">Nashville - Franklin LLC</p>'+
//      '<p class="info-window">Acres: 301.8  Parcel: ID 118 011.00</p>'+
//      '<p class="info-window">County: Williamson  Street: Goose Creek Bypass</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.851811,
//    long: -86.576717,
//    content: '<div id="content">'+
//      '<p class="info-window">Nashville - Highway 96 LLC</p>'+
//      '<p class="info-window">Acres: 118.55 Parcel: ID 095 034.00</p>'+
//      '<p class="info-window">County: Rutherford  Street: Highway 96</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.738811,
//    long: -86.868172,
//    content: '<div id="content">'+
//      '<p class="info-window">Nashville - I-65 LLC</p>'+
//      '<p class="info-window">Acres: 725.17  Parcel: ID 17002700</p>'+
//      '<p class="info-window">County: Williamson  Street: I-65</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.969444,
//    long: -86.635842,
//    content: '<div id="content">'+
//      '<p class="info-window">Nashville - McFarlin Road LLC</p>'+
//      '<p class="info-window">Acres: 372.89  Parcel: ID 057 001.01</p>'+
//      '<p class="info-window">County: Williamson  Street: McFarlin Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 36.189558,
//    long: -86.180319,
//    content: '<div id="content">'+
//      '<p class="info-window">Nashville - I-40 East LLC</p>'+
//      '<p class="info-window">Acres: 1395.21  Parcel: ID 0890040000011089</p>'+
//      '<p class="info-window">County: Wilson  Street: I-40 East</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.957892,
//    long: -87.057892,
//    content: '<div id="content">'+
//      '<p class="info-window">Nashville - Williamson County LLC</p>'+
//      '<p class="info-window">Acres: 911.91  Parcel: ID 067 02404</p>'+
//      '<p class="info-window">County: Williamson  Street: Old Highway 96</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.935769,
//    long: -87.064825,
//    content: '<div id="content">'+
//      '<p class="info-window">Nashville - Old Highway 96 LLC</p>'+
//      '<p class="info-window">Acres: 345.07  Parcel: ID 067 022.00</p>'+
//      '<p class="info-window">County: Williamson  Street: Old Highway 96</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 30.731331,
//    long: -97.825078,
//    content: '<div id="content">'+
//      '<p class="info-window">Austin - Ronald Reagan Blvd LLC</p>'+
//      '<p class="info-window">Acres: 523.66  Parcel: ID R010033</p>'+
//      '<p class="info-window">County: Williamson  Street: Ronald Reagan Blvd</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 29.514689,
//    long: -98.791028,
//    content: '<div id="content">'+
//      '<p class="info-window">San Antonio – Culebra Road LLC</p>'+
//      '<p class="info-window">Acres: 260.93 Parcel: ID 987082</p>'+
//      '<p class="info-window">County: Bexar  Street: Culebra Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.183878,
//    long: -81.196514,
//    content: '<div id="content">'+
//      '<p class="info-window">Highway 321 - Forbes Road LLC</p>'+
//      '<p class="info-window">Acres: 406.6  Parcel: ID 146376</p>'+
//      '<p class="info-window">County: Gaston  Street: Highway 321</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.433933,
//    long: -81.132889,
//    content: '<div id="content">'+
//      '<p class="info-window">Lincoln County - Orchard Road LLC</p>'+
//      '<p class="info-window">Acres: 339.27  Parcel: ID 28284</p>'+
//      '<p class="info-window">County: Orchard  Street: Orchard Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 34.9339,
//    long: -80.496186,
//    content: '<div id="content">'+
//      '<p class="info-window">Monroe Bypass - Highway 601 LLC</p>'+
//      '<p class="info-window">Acres: 843.85  Parcel: ID 09066001</p>'+
//      '<p class="info-window">County: Union  Street: US Highway 601</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 34.945094,
//    long: -80.496878,
//    content: '<div id="content">'+
//      '<p class="info-window">Mount Pleasant - Monroe LLC</p>'+
//      '<p class="info-window">Acres: 57.46  Parcel: ID 9128016</p>'+
//      '<p class="info-window">County: Union  Street: Macedonia Church Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.547331,
//    long: -78.772739,
//    content: '<div id="content">'+
//      '<p class="info-window">Raleigh - River Town - Fuquay LLC</p>'+
//      '<p class="info-window">Acres: 148.66  Parcel: ID 0675 14 1029 000</p>'+
//      '<p class="info-window">County: Wake  Street: NC Highway 55</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.062642,
//    long: -81.121575,
//    content: '<div id="content">'+
//      '<p class="info-window">Charlotte - Allison Creek, LLC</p>'+
//      '<p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Howell Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.362547,
//    long: -80.412889,
//    content: '<div id="content">'+
//      '<p class="info-window">Mount Pleasant - Monroe LLC</p>'+
//      '<p class="info-window">Acres: 122.34  Parcel: ID 5524171342</p>'+
//      '<p class="info-window">County: Cabarrus  Street: Howell Road</p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   },{
//    lat: 35.853864,
//    long: -78.485331,
//    content: '<div id="content">'+
//      '<p class="info-window">Raleigh - River Town - Fuquay LLC</p>'+
//      '<p class="info-window">Acres: 59.13  Parcel: ID 0665746312</p>'+
//      '<p class="info-window">County: Wake  Street: Purfoy Road </p>'+
//      '<p class="info-window">Broker: NAI Southern Real Estate</p>'+
//      '</div>' 
//   }
// ];