/*
 This is an example configuration file.

 COPY OR RENAME THIS FILE TO config.js.

 Make sure you use real IDs from your HA entities.
*/

var CONFIG = {
   customTheme: null, // CUSTOM_THEMES.TRANSPARENT, CUSTOM_THEMES.MATERIAL, CUSTOM_THEMES.MOBILE, CUSTOM_THEMES.COMPACT, CUSTOM_THEMES.HOMEKIT, CUSTOM_THEMES.WINPHONE, CUSTOM_THEMES.WIN95
   transition: TRANSITIONS.ANIMATED_GPU, //ANIMATED or SIMPLE (better perfomance)
   entitySize: ENTITY_SIZES.NORMAL, //SMALL, BIG are available
   tileSize: 150,
   tileMargin: 6,
   serverUrl: 'http://' + location.hostname + ':8123',
   wsUrl: 'ws://' + location.hostname + ':8123/api/websocket',
   authToken: null, // optional long-lived token (CAUTION: only if TileBoard is not exposed to the internet)
   //googleApiKey: "XXXXXXXXXX", // Required if you are using Google Maps for device tracker
   //mapboxToken: "XXXXXXXXXX", // Required if you are using Mapbox for device tracker
   debug: false, // Prints entities and state change info to the console.
   pingConnection: true, //ping connection to prevent silent disconnections
   locale: 'de', // locale for date and number formats - available locales: it, de, es, fr, pt, ru, nl, pl, en-gb, en-us (default). See readme on adding custom locales.
   // next fields are optional
   events: [],
   timeFormat: 24,
   menuPosition: MENU_POSITIONS.LEFT, // or BOTTOM
   hideScrollbar: false, // horizontal scrollbar
   groupsAlign: GROUP_ALIGNS.HORIZONTALLY, // HORIZONTALLY, VERTICALLY, GRID
   onReady: function () {},

   header: { // https://github.com/resoai/TileBoard/wiki/Header-configuration
      styles: {
         margin: '30px 130px 0',
         fontSize: '28px'
      },
      right: [
         {
            type: HEADER_ITEMS.CUSTOM_HTML,
            html: 'Dachau'
         },
         {
            type: HEADER_ITEMS.WEATHER,
            styles: {
               margin: '0'
            },
            icon: '&weather.home.state',
            state: '&weather.home.state',
            icons: {
               'clear-day': 'clear',
               'clear-night': 'nt-clear',
               'cloudy': 'cloudy',
               'exceptional': 'unknown',
               'fog': 'fog',
               'hail': 'sleet',
               'lightning': 'chancestorms',
               'lightning-rainy': 'tstorms',
               'partly-cloudy-day': 'partlycloudy',
               'partly-cloudy-night': 'nt-partlycloudy',
               'partlycloudy': 'partlycloudy',
               'pouring': 'rain',
               'snowy': 'snow',
               'snowy-rainy': 'sleet',
               'wind': 'unknown',
               'windy': 'unknown',
               'windy-variant': 'unknown'
            },
            states: {
               'clear-night': 'Klare Nacht',
               'cloudy': 'Bewölkt',
               'exceptional': 'Außergewöhnlich',
               'fog': 'Nebel',
               'hail': 'Hagel',
               'lightning': 'Gewitter',
               'lightning-rainy': 'Gewitter, regnerisch',
               'partlycloudy': 'Teilweise bewölkt',
               'pouring': 'Strömender Regen',
               'rainy': 'regnerisch',
               'snowy': 'Schnee',
               'snowy-rainy': 'Schneeregen',
               'sunny': 'Sonnig',
               'windy': 'Windig',
               'windy-variant': 'Windig'
            },
            fields: {
               temperature: '&weather.home.attributes.temperature',
               temperatureUnit: '°C',
            }
          }
      ],
      left: [
         {
            type: HEADER_ITEMS.CUSTOM_HTML,
            html: '<b><i>Schaltzentrale</b></i>'
         },
         {
            type: HEADER_ITEMS.DATETIME,
            dateFormat: 'EEEE, MMMM d, y', //https://docs.angularjs.org/api/ng/filter/date
         },
         // {
         //    type: HEADER_ITEMS.DATE,
         //    dateFormat: 'EEEE, LLLL dd', //https://docs.angularjs.org/api/ng/filter/date
         // },
         // {
         //    type: HEADER_ITEMS.TIME,
         // },
      ]
   },

   /*screensaver: {// optional. https://github.com/resoai/TileBoard/wiki/Screensaver-configuration
      timeout: 300, // after 5 mins of inactive
      slidesTimeout: 10, // 10s for one slide
      styles: { fontSize: '40px' },
      leftBottom: [{ type: SCREENSAVER_ITEMS.DATETIME }], // put datetime to the left-bottom of screensaver
      slides: [
         { bg: 'images/bg1.jpeg' },
         {
            bg: 'images/bg2.png',
            rightTop: [ // put text to the 2nd slide
               {
                  type: SCREENSAVER_ITEMS.CUSTOM_HTML,
                  html: 'Welcome to the <b>TileBoard</b>',
                  styles: { fontSize: '40px' }
               }
            ]
         },
         { bg: 'images/bg3.jpg' }
      ]
   },*/

   pages: [
      {
         title: 'Main page',
         bg: 'images/bg2.jpg',
         icon: 'mdi-home-outline', // home icon
         groups: [
            {
               title: 'WOHNZIMMER',
               width: 4,
               height: 4,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     id: "climate.000a1a49a12d0a",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     title: "Wohnzimmer",
                     classes: [{'-homematic_heizung':true}],
                     useHvacMode: true,  // Optional: enables HVAC mode (by default uses PRESET mode)
                     state: function (item, entity) {
                        return 'aktuell '
                           + entity.attributes.current_temperature
                           + ' °C';
                     },
                     states: {
                        'auto': 'Automatisch',
                        'heat': 'Manuell',
                        'off': 'Aus',
                     },
                  },
                  {
                     position: [1, 0],
                     id: "climate.000a1a49a12e89",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     title: "Wohnzimmer TV",
                     classes: [{'-homematic_heizung':true}],
                     useHvacMode: true,  // Optional: enables HVAC mode (by default uses PRESET mode)
                     state: function (item, entity) {
                        return 'aktuell '
                           + entity.attributes.current_temperature
                           + ' °C';
                     },
                     states: {
                        'auto': 'Automatisch',
                        'heat': 'Manuell',
                        'off': 'Aus',
                     },
                  },
                  {
                     position: [2, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.00085a49a49c0f', // using empty object for an unknown id
                     title: "GESAMT",
                     subtitle: 'Wohnzimmer',
                     classes: [{'-wall_switch':true}],
                     states: {
                        on: "An",
                        off: "Aus"
                     },
                     icons: {
                        on: "mdi-light-switch",
                        off: "mdi-light-switch",
                     },             
                  },
                  {
                     position: [3, 0],
                     title: 'Deckenleuchte',
                     subtitle: 'Wohnzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.lichtgruppe_wohnzimmer_deckenleuchte',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-lightbulb-outline",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [0, 1],
                     title: 'Stehlampe',
                     subtitle: 'Wohnzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.dimmable_light_5',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-desk-lamp",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [1, 1],
                     title: 'Kleine Lampe',
                     subtitle: 'Wohnzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.licht_wohnzimmer_kleine_lampe',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-lamp",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [2, 1],
                     title: 'Lightstrip',
                     subtitle: 'Wohnzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.extended_color_light_23',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-led-strip-variant",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [3, 1],
                     type: TYPES.POPUP,
                     id: {},
                     title: 'Lichtmodi',
                     classes: [{'-popup':true}],
                     bg: 'images/lightmodes/Lightmode_colored.png',
                     state: false,
                     popup: {
                        tileSize: 150,
                        items: [
                           {
                              position: [0, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_hell',
                              title: 'HELL',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_hell.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_medium',
                              title: 'MEDIUM',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_medium.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_nacht',
                              title: 'NACHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_night.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_aus',
                              title: 'AUS',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_off.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [0, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_konzentration',
                              title: 'KONZENTRATION',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_konzentration_50',
                              title: 'KONZ. 50',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration_50.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_sexy_light',
                              title: 'SEXY LIGHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_sexy_light.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.wohnzimmer_colorloop',
                              title: 'COLORLOOP',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_color_palette.svg',
                              state: false,
                              itemtitle: false,
                           },         
                        ]
                     },
                  },
                  {
                     position: [0, 2],
                     type: TYPES.DEVICE_TRACKER,
                     id: 'device_tracker.sm_n975f',
                     map: 'yandex',
                     states: {
                        home: "Zuhause",
                        not_home: "Unterwegs",
                        office: "Arbeit",
                     },
                     zoomLevels: [10, 15], // or [9] for only one map slide
                     hideEntityPicture: false, //hide entity pic, if you need only map
                     slidesDelay: 2 // delay before first slide animation
                  },
                  {
                     position: [1, 2],
                     id: 'media_player.sonos_wohnzimmer_arc',
                     type: TYPES.MEDIA_PLAYER,
                     title: '@attributes.media_title',
                     classes: [{'-mediaplayer':true}],
                     hideSource: false,
                     textSource: 'Quelle',
                     hideMuteButton: true,
                     state: true,
                     state: '@attributes.media_playlist',
                     subtitle: '@attributes.media_artist',
                     bgSuffix: '@attributes.entity_picture',
                  },
                  {
                     position: [2, 2],
                     type: TYPES.SENSOR_ICON,
                     title: 'Türe Dachterrasse',
                     classes: [{'-door_sensor':true}],
                     id: 'binary_sensor.hmip_swdo_pl_0023da49a3ae4e_state',
                     states: {
                        off: "Geschlossen",
                        on: "Offen"
                     },
                     icons: {
                        off: "mdi-door",
                        on: "mdi-door-open",
                     },
                  },
                  {
                     position: [3, 2],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.00085a49a49c0f', // using empty object for an unknown id
                     title: "GESAMT",
                     subtitle: 'Dachterrasse',
                     classes: [{'-wall_switch':true}],
                     states: {
                        on: "An",
                        off: "Aus"
                     },
                     icons: {
                        on: "mdi-light-switch",
                        off: "mdi-light-switch",
                     },             
                  },
                  {
                     position: [0, 3],
                     id: 'camera.wohnzimmer',
                     type: TYPES.CAMERA,
                     title: 'Wohnzimmer', 
                     bgSize: 'cover',  // 'cover', 'contain', 'auto' (defaults to 'cover')
                     icon: 'mdi-cctv',
                     classes: [{'-camera':true}],
                     width: 1,
                     state: false,
                     fullscreen: {
                        type: TYPES.CAMERA_STREAM,
                        objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                        id: 'camera.wohnzimmer_hd',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                        bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                     },
                     refresh: 1500,  // can be number in milliseconds
                     refresh: function () {  // can also be a function
                        return 3000 + Math.random() * 1000
                     }
                  }                  
               ]
            },

            {
               title: 'SCHLAFZIMMER',
               width: 3,
               height: 4,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     id: "climate.000a1a49a12cad",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     title: "Schlafzimmer",
                     classes: [{'-homematic_heizung':true}],
                     useHvacMode: true,  // Optional: enables HVAC mode (by default uses PRESET mode)
                     state: function (item, entity) {
                        return 'aktuell '
                           + entity.attributes.current_temperature
                           + ' °C';
                     },
                     states: {
                        'auto': 'Automatisch',
                        'heat': 'Manuell',
                        'off': 'Aus',
                     },
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.00085a49a49f84', // using empty object for an unknown id
                     title: "GESAMT",
                     subtitle: 'Schlafzimmer',
                     classes: [{'-wall_switch':true}],
                     states: {
                        on: "An",
                        off: "Aus"
                     },
                     icons: {
                        on: "mdi-light-switch",
                        off: "mdi-light-switch",
                     },             
                  },
                  {
                     position: [2, 0],
                     title: 'Deckenleuchte',
                     subtitle: 'Schlafzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.color_temperature_light_18',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [0, 1],
                     title: 'Stehlampe',
                     subtitle: 'Schlafzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.licht_schlafzimmer_standleuchte',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-floor-lamp",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [1, 1],
                     title: 'Nachttischlampe',
                     subtitle: 'Schlafzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.extended_color_light_3_2',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-lamp",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [2, 1],
                     title: 'Philips Hue Go',
                     subtitle: 'Schlafzimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.extended_color_light_2',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-wall-sconce-round-variant",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [0, 2],
                     type: TYPES.POPUP,
                     id: {},
                     title: 'Lichtmodi',
                     classes: [{'-popup':true}],
                     bg: 'images/lightmodes/Lightmode_colored.png',
                     state: false,
                     popup: {
                        tileSize: 150,
                        items: [
                           {
                              position: [0, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_hell',
                              title: 'HELL',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_hell.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_medium',
                              title: 'MEDIUM',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_medium.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_nacht',
                              title: 'NACHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_night.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_aus',
                              title: 'AUS',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_off.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [0, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_konzentration',
                              title: 'KONZENTRATION',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_konzentration_50',
                              title: 'KONZ. 50',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration_50.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_sexy_light',
                              title: 'SEXY LIGHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_sexy_light.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.schlafzimmer_colorloop',
                              title: 'COLORLOOP',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_color_palette.svg',
                              state: false,
                              itemtitle: false,
                           },         
                        ]
                     },
                  },
                  {
                     position: [1, 2],
                     id: 'media_player.sonos_schlafzimmer',
                     type: TYPES.MEDIA_PLAYER,
                     title: '@attributes.media_title',
                     classes: [{'-mediaplayer':true}],
                     hideSource: false,
                     textSource: 'Quelle',
                     hideMuteButton: true,
                     state: true,
                     state: '@attributes.media_playlist',
                     subtitle: '@attributes.media_artist',
                     bgSuffix: '@attributes.entity_picture',
                  },
                  {
                     position: [2, 2],
                     type: TYPES.SENSOR_ICON,
                     title: 'Fenster Schlafzimmer',
                     classes: [{'-door_sensor':true}],
                     id: 'binary_sensor.hmip_swdo_pl_0023da49a3b06a_state',
                     states: {
                        off: "Geschlossen",
                        on: "Offen"
                     },
                     icons: {
                        off: "mdi-window-closed",
                        on: "mdi-window-open",
                     },
                  },
                  {
                     position: [0, 3],
                     id: 'camera.schlafzimmer',
                     type: TYPES.CAMERA,
                     title: 'Schlafzimmer', 
                     bgSize: 'cover',  // 'cover', 'contain', 'auto' (defaults to 'cover')
                     icon: 'mdi-cctv',
                     classes: [{'-camera':true}],
                     width: 1,
                     state: false,
                     fullscreen: {
                        type: TYPES.CAMERA_STREAM,
                        objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                        id: 'camera.schlafzimmer_hd',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                        bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                     },
                     refresh: 1500,  // can be number in milliseconds
                     refresh: function () {  // can also be a function
                        return 3000 + Math.random() * 1000
                     }
                  }                  
               ]
            },

            {
               title: 'BADEZIMMER',
               width: 2,
               height: 4,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     id: "climate.000a1a49a13110",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     title: "Badezimmer",
                     classes: [{'-homematic_heizung':true}],
                     useHvacMode: true,  // Optional: enables HVAC mode (by default uses PRESET mode)
                     state: function (item, entity) {
                        return 'aktuell '
                           + entity.attributes.current_temperature
                           + ' °C';
                     },
                     states: {
                        'auto': 'Automatisch',
                        'heat': 'Manuell',
                        'off': 'Aus',
                     },
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.hmip_bsm_00085a49a4a57e', // using empty object for an unknown id
                     title: "GESAMT",
                     subtitle: 'Badezimmer',
                     classes: [{'-wall_switch':true}],
                     states: {
                        on: "An",
                        off: "Aus"
                     },
                     icons: {
                        on: "mdi-light-switch",
                        off: "mdi-light-switch",
                     },             
                  },
                  {
                     position: [0, 1],
                     title: 'Deckenleuchte',
                     subtitle: 'Badezimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.extended_color_light_21',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [1, 1],
                     title: 'Spiegel links',
                     subtitle: 'Badezimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.color_temperature_light_16',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-lightbulb-outline",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [0, 2],
                     title: 'Spiegel rechts',
                     subtitle: 'Badezimmer',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.color_temperature_light_17',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-lightbulb-outline",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [1, 2],
                     type: TYPES.POPUP,
                     id: {},
                     title: 'Lichtmodi',
                     classes: [{'-popup':true}],
                     bg: 'images/lightmodes/Lightmode_colored.png',
                     state: false,
                     popup: {
                        tileSize: 150,
                        items: [
                           {
                              position: [0, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_hell',
                              title: 'HELL',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_hell.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_medium',
                              title: 'MEDIUM',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_medium.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_nacht',
                              title: 'NACHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_night.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_aus',
                              title: 'AUS',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_off.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [0, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_konzentration',
                              title: 'KONZENTRATION',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_konzentration_50',
                              title: 'KONZ. 50',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration_50.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_sexy_light',
                              title: 'SEXY LIGHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_sexy_light.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.badezimmer_colorloop',
                              title: 'COLORLOOP',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_color_palette.svg',
                              state: false,
                              itemtitle: false,
                           },         
                        ]
                     },
                  },
                  {
                     position: [0, 3],
                     id: 'media_player.bad',
                     type: TYPES.MEDIA_PLAYER,
                     title: '@attributes.media_title',
                     classes: [{'-mediaplayer':true}],
                     hideSource: false,
                     textSource: 'Quelle',
                     hideMuteButton: true,
                     state: true,
                     state: '@attributes.media_playlist',
                     subtitle: '@attributes.media_artist',
                     bgSuffix: '@attributes.entity_picture',
                  },
               ]
            },
            {
               title: 'WERKSTATT',
               width: 2,
               height: 4,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     id: "climate.hmip_etrv_2_000a1a49a13405",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     title: "Werkstatt",
                     classes: [{'-homematic_heizung':true}],
                     useHvacMode: true,  // Optional: enables HVAC mode (by default uses PRESET mode)
                     state: function (item, entity) {
                        return 'aktuell '
                           + entity.attributes.current_temperature
                           + ' °C';
                     },
                     states: {
                        'auto': 'Automatisch',
                        'heat': 'Manuell',
                        'off': 'Aus',
                     },
                  },
                  {
                     position: [1, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.00085a49a49be1', // using empty object for an unknown id
                     title: "GESAMT",
                     subtitle: 'Werkstatt',
                     classes: [{'-wall_switch':true}],
                     states: {
                        on: "An",
                        off: "Aus"
                     },
                     icons: {
                        on: "mdi-light-switch",
                        off: "mdi-light-switch",
                     },             
                  },
                  {
                     position: [0, 1],
                     title: 'Deckenleuchte',
                     subtitle: 'Werkstatt',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.lichtgruppe_werkstatt_deckenleuchte',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar",
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-lightbulb-off-outline",
                        unavailable: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [1, 1],
                     type: TYPES.POPUP,
                     id: {},
                     title: 'Lichtmodi',
                     classes: [{'-popup':true}],
                     bg: 'images/lightmodes/Lightmode_colored.png',
                     state: false,
                     popup: {
                        tileSize: 150,
                        items: [
                           {
                              position: [0, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_hell',
                              title: 'HELL',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_hell.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_medium',
                              title: 'MEDIUM',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_medium.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_nacht',
                              title: 'NACHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_night.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 0],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_aus',
                              title: 'AUS',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_off.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [0, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_konzentration',
                              title: 'KONZENTRATION',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [1, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_konzentration_50',
                              title: 'KONZ. 50',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_concentration_50.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [2, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_sexy_light',
                              title: 'SEXY LIGHT',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_sexy_light.svg',
                              state: false,
                              itemtitle: false,
                           },
                           {
                              position: [3, 1],
                              type: TYPES.SCRIPT,
                              id: 'script.werkstatt_colorloop',
                              title: 'COLORLOOP',
                              classes: [{'-lightmode':true}],
                              bg: 'images/lightmodes/Lightmode_color_palette.svg',
                              state: false,
                              itemtitle: false,
                           },         
                        ]
                     },
                  },
                  {
                     position: [0, 2],
                     id: 'media_player.sonos_werkstatt',
                     type: TYPES.MEDIA_PLAYER,
                     title: '@attributes.media_title',
                     classes: [{'-mediaplayer':true}],
                     hideSource: false,
                     textSource: 'Quelle',
                     hideMuteButton: true,
                     state: true,
                     state: '@attributes.media_playlist',
                     subtitle: '@attributes.media_artist',
                     bgSuffix: '@attributes.entity_picture',
                  },
                  {
                     position: [1, 2],
                     type: TYPES.SENSOR_ICON,
                     title: 'Fenster Werkstatt',
                     classes: [{'-door_sensor':true}],
                     id: 'binary_sensor.hmip_swdo_pl_0023da49a3ae62_state',
                     states: {
                        off: "Geschlossen",
                        on: "Offen"
                     },
                     icons: {
                        off: "mdi-window-closed",
                        on: "mdi-window-open",
                     },
                  },
                  
                  {
                     position: [0, 3],
                     type: TYPES.IMAGE,
                     id: {},
                     url: 'images/qr_wlan.png'
                  },                  
               ]
            },
            {
               title: 'FLUR',
               width: 1,
               height: 4,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.00085a49a4b411', // using empty object for an unknown id
                     title: "GESAMT",
                     subtitle: 'Flur',
                     classes: [{'-wall_switch':true}],
                     states: {
                        on: "An",
                        off: "Aus",
                        unavailable: "nicht verfügbar", 
                     },
                     icons: {
                        on: "mdi-light-switch",
                        off: "mdi-light-switch",
                        unavailable: "mdi-light-switch",
                     },             
                  },
                  {
                     position: [0, 1],
                     title: 'Deckenleuchte',
                     subtitle: 'Flur',
                     classes: [{'-ceiling_light':true}],
                     id: 'light.lichtgruppe_flur_deckenleuchte',
                     type: TYPES.LIGHT,
                     states: {
                        on: "An",
                        off: "Aus"
                     },
                     icons: {
                        on: "mdi-ceiling-light",
                        off: "mdi-lightbulb-off-outline",
                     },
                     sliders: [
                        {
                           title: 'Brightness',
                           field: 'brightness',
                           max: 255,
                           min: 0,
                           step: 5,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "brightness"
                           }
                        },
                        {
                           title: 'Color temp',
                           field: 'color_temp',
                           max: 588,
                           min: 153,
                           step: 15,
                           request: {
                              type: "call_service",
                              domain: "light",
                              service: "turn_on",
                              field: "color_temp"
                           }
                        }
                     ],
                  },
                  {
                     position: [0, 2],
                     type: TYPES.SENSOR_ICON,
                     title: 'Eingangstüre',
                     classes: [{'-door_sensor':true}],
                     id: 'binary_sensor.0023da49a3aecb_state',
                     states: {
                        off: "Geschlossen",
                        on: "Offen"
                     },
                     icons: {
                        off: "mdi-door",
                        on: "mdi-door-open",
                     },
                  },
                  {
                     position: [0, 3],
                     id: 'camera.eingang',
                     type: TYPES.CAMERA,
                     title: 'Eingang', 
                     bgSize: 'cover',  // 'cover', 'contain', 'auto' (defaults to 'cover')
                     icon: 'mdi-cctv',
                     classes: [{'-camera':true}],
                     width: 1,
                     state: false,
                     fullscreen: {
                        type: TYPES.CAMERA_STREAM,
                        objFit: 'contain',  // https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
                        id: 'camera.eingang_hd',  // Optional: camera entity to use on fullscreen, defaults to the tile camera entity if omitted
                        bufferLength: 5  // Optional: buffer length in seconds for the HLS buffer, default is 5 seconds
                     },
                     refresh: 1500,  // can be number in milliseconds
                     refresh: function () {  // can also be a function
                        return 3000 + Math.random() * 1000
                     }
                  }                  
               ]
            },
            {
               title: 'KÜCHE',
               width: 1,
               height: 4,
               // row: 0,  // optional; index of the row used for the GRID layout. If not specified, the default is 0
               items: [
                  {
                     position: [0, 0],
                     id: "climate.000a1a49a12c97",
                     type: TYPES.CLIMATE,
                     unit: '°C',
                     title: "Wohnzimmer",
                     classes: [{'-homematic_heizung':true}],
                     useHvacMode: true,  // Optional: enables HVAC mode (by default uses PRESET mode)
                     state: function (item, entity) {
                        return 'aktuell '
                           + entity.attributes.current_temperature
                           + ' °C';
                     },
                     states: {
                        'auto': 'Automatisch',
                        'heat': 'Manuell',
                        'off': 'Aus',
                     },
                  },
                  {
                     position: [0, 1],
                     width: 1,
                     type: TYPES.SWITCH,
                     id: 'switch.hmip_bsm_00085a49a49be7', // using empty object for an unknown id
                     title: "GESAMT",
                     subtitle: 'Küche',
                     classes: [{'-wall_switch':true}],
                     states: {
                        on: "An",
                        off: "Aus"
                     },
                     icons: {
                        on: "mdi-light-switch",
                        off: "mdi-light-switch",
                     },             
                  },
                  {
                     position: [0, 2],
                     id: 'media_player.kuche',
                     type: TYPES.MEDIA_PLAYER,
                     title: '@attributes.media_title',
                     classes: [{'-mediaplayer':true}],
                     hideSource: false,
                     textSource: 'Quelle',
                     hideMuteButton: true,
                     state: true,
                     state: '@attributes.media_playlist',
                     subtitle: '@attributes.media_artist',
                     bgSuffix: '@attributes.entity_picture',
                  },                  
               ]
            },
         ]
      },
      {
         title: 'Steckdosen',
         bg: 'images/bg2.jpg',
         icon: 'mdi-power-plug-outline',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },
         ]
      },
      {
         title: 'Pflanzen',
         bg: 'images/bg2.jpg',
         icon: 'mdi-flower-tulip-outline',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Temperatur',
         bg: 'images/bg2.jpg',
         icon: 'mdi-thermometer',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Raspberry Pi',
         bg: 'images/bg2.jpg',
         icon: 'mdi-raspberry-pi',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Desktop',
         bg: 'images/bg2.jpg',
         icon: 'mdi-desktop-classic',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Playstation',
         bg: 'images/bg2.jpg',
         icon: 'mdi-sony-playstation',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Wetter',
         bg: 'images/bg2.jpg',
         icon: 'mdi-weather-partly-cloudy',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Smartphone',
         bg: 'images/bg2.jpg',
         icon: 'mdi-cellphone',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Batterien',
         bg: 'images/bg2.jpg',
         icon: 'mdi-battery-30',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Alarm',
         bg: 'images/bg2.jpg',
         icon: 'mdi-bell-outline',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Gesundheit',
         bg: 'images/bg2.jpg',
         icon: 'mdi-heart-outline',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Kalender',
         bg: 'images/bg2.jpg',
         icon: 'mdi-calendar',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
      {
         title: 'Automationen',
         bg: 'images/bg2.jpg',
         icon: 'mdi-cog-outline',
         groups: [
            {
               title: '',
               width: 4,
               height: 3,
               items: [
                  {
                     position: [0, 0],
                     width: 2,
                     title: 'Short instruction',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Read',
                           icon: 'mdi-numeric-1-box-outline',
                           value: 'README.md'
                        },
                        {
                           title: 'Ask on forum',
                           icon: 'mdi-numeric-2-box-outline',
                           value: 'home-assistant.io'
                        },
                        {
                           title: 'Open an issue',
                           icon: 'mdi-numeric-3-box-outline',
                           value: 'github.com'
                        },
                     ]
                  },
                  {
                     position: [2, 0],
                     width: 2,
                     title: 'System Status',
                     type: TYPES.TEXT_LIST,
                     id: {}, // using empty object for an unknown id
                     state: false, // disable state element
                     list: [
                        {
                           title: 'Free Memory',
                           icon: 'mdi-memory',
                           value: function() {
                              // var freeMemory = this.parseFieldValue('&sensor.memory_free.state')
                              var freeMemory = 15.444  // Just an example.
                              return this.$scope.filterNumber(freeMemory, 1) + ' GB';
                           }
                        },
                     ]
                  },
                  {
                     position: [0, 1.5],
                     width: 1.5,
                     height: 1.5,
                     title: 'My Gauge Title',
                     subtitle: '',
                     type: TYPES.GAUGE,
                     // id: 'sensor.my_sample_sensor', // Assign the sensor you want to display on the gauge
                     id: {state: 11111}, // Remove after choosing to actual sensor ID
                     value: function(item, entity) {
                        return entity.state;
                     },
                     settings: {
                        size: 200, // Defaults to 50% of either height or width, whichever is smaller
                        type: 'full', // Options are: 'full', 'semi', and 'arch'. Defaults to 'full'
                        min: 0, // Defaults to 0
                        max: 25000, // Defaults to 100
                        cap: 'round', // Options are: 'round', 'butt'. Defaults to 'butt'
                        thick: 8, // Defaults to 6
                        label: 'My Gauge', // Defaults to undefined
                        append: '@attributes.unit_of_measurement', // Defaults to undefined
                        prepend: '$', // Defaults to undefined
                        duration: 1500, // Defaults to 1500ms
                        thresholds: { 0: { color: 'green'}, 80: { color: 'red' } }, // Defaults to undefined
                        labelOnly: false, // Defaults to false
                        foregroundColor: 'rgba(0, 150, 136, 1)', // Defaults to rgba(0, 150, 136, 1)
                        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Defaults to rgba(0, 0, 0, 0.1)
                        fractionSize: 0, // Number of decimal places to round the number to. Defaults to current locale formatting
                     },
                  },
               ]
            },            
         ]
      },
   ],
}
