<h1 align="center">
  Google inspired Home Assistant Configuration (Mobile and Desktop User Interfaces)
</h1>

![Header](https://user-images.githubusercontent.com/66092908/140277877-8dbba7b6-89f9-48d0-bc43-0af4d060022d.png)

![00_Home_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139411226-159c4aed-10e7-405c-a9a6-6622cecfdfab.png)

This Repository contains my personal Smart Home Configuration. At the moment (as of Nov. 21) my Smart Home runs on a Raspberry Pi 4 Model B 4 GB with <a href="https://www.home-assistant.io/">Home Assistant</a> installed. Use the menu links below to navigate through the documentation. If there are any open questions or you want to contribute feel free to contact me. 

---

<h3 align="center">
  Main Sections
</h3>

<div align="center">
  <h4>
    <a href="https://github.com/philipp089/Home-Assistant-Config#----mobile-user-interface">
      Mobile User Interface
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#----desktop-user-interface-">
      Desktop User Interface
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----devices-">
      Devices
    </a>
    <span> | </span>
    <a href="">
      Integrations
    </a>
    <span> | </span>
    <a href="">
      Custom Components
    </a>
  </h4>
</div>

---

If you are an experienced Home Assistant user you might be interested in the following files:

#### <a name="Main Files"></a>Main files and folders of my HA-Config:
* [ui-lovelace.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/ui-lovelace.yaml) - Main file of the Mobile User Interface
* [config.js](https://github.com/philipp089/Home-Assistant-Config/blob/master/www/tileboard/config.js) - Main file of the Desktop User Interface
* [configuration.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/configuration.yaml) - Main Configuration file of the Smart Home
* [themes.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/themes.yaml) - Theme-File for Day and Night Mode
* [scrips.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/scripts.yaml) - All the scrips running in my Smart Home
* [automations.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/automations.yaml) - All the automations running in my Smart Home
* [Automations folder](https://github.com/philipp089/Home-Assistant-Config/tree/master/automations) - To organise my automations in a more structured way, i started splitting automations to single files. Find the structure here

#### <a name="Links"></a>Useful Links: 
* [material.io](https://material.io/) - Guidelines for designing User Interfaces
* [MDI Icons](https://materialdesignicons.com/) - Icons used in the Interfaces
* [Google Visual Asset Guidelines](https://www.behance.net/gallery/9028077/Google-Visual-Assets-Guidelines-Part-1) - Google specific design guidelines

<h2 align="center">
  <br>
  Mobile User Interface
</h2>

At the moment (as of Nov. 21) I control my Smart Home over 17 individual tabs. Use the menu links below to navigate through the tabs. Each tab contains a day and a night mode.

---

<h3 align="center">
  Tab Overview
</h3>

<div align="center">
  <h4>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-home---tab">
      Home-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-light---tab">
      Light-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-media---tab">
      Media-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-plugs---tab">
      Plugs-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-plants---tab">
      Plants-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-climate---tab">
      Climate-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-raspberry---tab">
      Raspberry-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-desktop---pc---tab">
      PC-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-playstation---tab">
      Playstation-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-weather---tab">
      Weather-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-camera---tab">
      Camera-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-smartphone---tab">
      Smartphone-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-battery---tab">
      Battery-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-alarm---tab">
      Alarm-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-health---tab">
      Health-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-calender---tab">
      Calendar-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#the-automations---tab">
      Automations-Tab
    </a>
  </h4>
</div>

---

<h3 align="left">
  <br>
  The Home - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

The Home-Tab is the default Tab and a great way to start searching through features as it gives direct access to all tabs in the User Interface. Each label-card in the whole User-Interface leads back to the Home-Tab by pressing it.

The Home-Tab contains a custom-header with each tab above the Presence-Status. The quick access area below is maybe my mostly used way to navigate through the app, as it gives direct access to all dashboards.

![00_Home_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139411201-6b6403e7-be74-4b32-8584-520623305b19.png)

Aside from that, the  Home-Tab contains a group of custom button cards for each room. 

![00_Home_Tab_Mockup_002](https://user-images.githubusercontent.com/66092908/139411262-14e362d9-f600-474c-a179-896bc33a29db.png)

The Plugs- and the Air-Humidifier Card are custom button card templates as well as all other button card type.

![00_Home_Tab_Mockup_003](https://user-images.githubusercontent.com/66092908/139411322-7bdbe469-abb0-45c9-b74d-8d063f32cb52.png)

<h4 align="left">
  <br>
The Home - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h4>
  
The corresponding night-mode is shown below:

![00_Home_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139411226-159c4aed-10e7-405c-a9a6-6622cecfdfab.png)

![00_Home_Tab_Mockup_002_Night_Mode](https://user-images.githubusercontent.com/66092908/139411286-35da3dca-6901-4fab-bc48-aa0a6f8b0594.png)

![00_Home_Tab_Mockup_003_Night_Mode](https://user-images.githubusercontent.com/66092908/139411335-56a1515c-3ba0-488c-863d-e26596b69f77.png)

---

### The Light - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

As the name suggests, in the Light-Tab I handle all my light-scripts. I almost exclusively use Philips Hue bulbs connected to a Raspbee II from dresden electronics as my Zigbee-Gateway. An old IKEA Floalt Panel is the exception. Each of the scenes is also controllable via speech over Google Assistant.

![01_Light_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139411362-596376b4-aa8e-4f87-a67f-aa11c694883c.png)

#### The Light - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

The night mode version of the light tab:

![01_Light_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139411374-9e8ecaca-0bf6-4e1b-9df6-136c3a785afd.png)

---

### The Media - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Remote Controls for two televisions and all Media-Players (several Sonos devices, Google Nest Minis) are integrated to this dashboard.

![02_Media_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139411399-9f739e82-baba-4186-93e7-776e248be00e.png)

#### The Media - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![02_Media_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139411413-db3fd023-8bc3-4564-aaa5-a4beea865f3a.png)

---

### The Plugs - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![03_Plugs_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139414779-996c4732-2860-457f-9551-82cc86443a95.png)

#### The Plugs - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![03_Plugs_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139414792-d8fe2977-53cc-4817-a8fe-56019490283c.png)

---

### The Plants - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

I still have to evaluate the Xiami-Plant-Sensors until that, this dashboard is empty.

---

### The Climate - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

A simple dashboard to view all the temperatures in the flat. In my setup i use Homematic HmiP-eTRV-2 devices.

![05_Climate_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139417167-97c36bc4-222d-4e2b-a546-9dc91dc32633.png)

#### The Climate - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![05_Climate_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139417204-22b26e99-7872-46be-94f6-b7744e7598a1.png)

---

### The Raspberry - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![06_Raspberry_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139419353-73fac1d8-d9e2-42dc-a338-0511c65d61c4.png)

#### The Raspberry - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![06_Raspberry_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139422061-4eb153f7-dd1a-4f5f-8511-d7a8c52956dd.png)

---

### The Desktop - PC - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![07_Desktop_PC_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476942-8980eb6e-c777-4f25-99ab-71525693a40e.png)

#### The Desktop - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![07_Desktop_PC_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476176-9a3d0a57-092b-4126-86d1-a48e49c17cf9.png)

---

### The Playstation - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![08_Playstation_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476914-077e426b-8b32-4dfb-a0fa-3ed3a0840d9e.png)

#### The Playstation - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![08_Playstation_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476263-6720bf57-1b80-43ce-9d2a-3d92fc50db01.png)

---

### The Weather - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![09_Weather_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476891-05c59e36-66f8-47ce-bcf9-8c0cd0f8df51.png)

#### The Weather - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![09_Weather_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476334-78bb256f-7f9c-47d0-9951-26f5b03d4837.png)

---

### The Camera - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![10_Camera_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476872-7f752de9-1393-4863-9147-1c9b70d10427.png)

#### The Camera - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![10_Camera_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476405-a30f8b18-6d61-441f-862f-2463503b91ef.png)

---

### The Smartphone - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![11_Smartphone_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476838-eccbb9dc-df6c-4cd7-b676-496e58d81323.png)

#### The Smartphone - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![11_Smartphone_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476487-832a7384-8681-4ab5-8d7d-94607e9bdd8a.png)

---

### The Battery - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![12_Battery_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476820-fc1db2ad-1b49-4ea9-b9a5-d95356faf0e8.png)

#### The Battery - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![12_Battery_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476566-506a89cb-388d-43d4-a9f0-7b97e856c4c3.png)

---

### The Alarm - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![13_Alarm_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476801-329a28e1-9412-4d0c-b5b0-588a6029bc96.png)

#### The Alarm - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![13_Alarm_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476617-419170fd-df69-4233-90ab-a075ddbb080d.png)

---

### The Health - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Work in Progress

---

### The Calender - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Work in Progress

---

### The Automations - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![14_Automations_Tab_Mockup_003](https://user-images.githubusercontent.com/66092908/139476702-f6a134b2-6656-4602-964a-6018a82c2af0.png)

#### The Automations - Tab Night Mode <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![14_Automations_Tab_Mockup_003_Night_Mode](https://user-images.githubusercontent.com/66092908/139476678-8da8cc38-d2c5-4ed7-87d4-bdd4e3a8792d.png)

---

<h2 align="center">
  <br>
  Desktop User Interface <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h2>

### The Home - Tab <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

The Desktop User Interface is made with Tileboard. At the moment I only have the Home - Tab finished.

![Home_Tab_Desktop_UI_v03_web](https://user-images.githubusercontent.com/66092908/136972172-35ea2c69-f50e-4e4f-9beb-c53e5d942822.png)

---

<h2 align="center">
  <br>
  Devices <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h2>

This section deals with the various device categories. Use the menu links below to navigate through the Device Categories.

---

<h3 align="center">
  Device Categories <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<div align="center">
  <h4>      
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----cameras-and-security-">
      Cameras and Security
    </a>
    <span> | </span>
    <a href="">
      Climate Control
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#----mobile-user-interface">
      Light and Light Control
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#desktop-user-interface">
      Media Player
    </a>
    <span> | </span>      
    <a href="">
      PC
    </a>
    <span> | </span>      
    <a href="">
      Playstation
    </a>    
    <span> | </span>    
    <a href="">
      Sensors
    </a> 
    <span> | </span>
    <a href="">
      Smart Home Hub
    </a>    
    <span> | </span>
    <a href="">
      Smart Plugs
    </a>   
  </h4>
</div>

---

<h3 align="left">
  <br>
  Cameras and Security <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Reolink RTC 410</th>
<th>Homematic IP Door Sensor</th>
<th>Philips Hue Motion Sensor</th>
<th>Google Coral USB Accelerator</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140294042-6b352008-e2e8-4445-8cc1-0200b5112fb2.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140294047-01b27e8c-8cfa-4d6c-b714-26f3ebb5b1d1.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140294036-82f12662-2f80-4b9c-b01f-573df809ce2c.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140301265-e1a40360-f910-4be3-8834-6d6e4b6c1a27.png" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/3GRAWVG">Reolink RTC 410</a></td>
<td><a href="https://amzn.to/3bGfswz">Homematic IP Door Sensor</a></td>
<td><a href="https://amzn.to/3mGLsHd">Philips Hue Motion Sensor</a></td>
<td><a href="https://amzn.to/3bIkj06">Google Coral USB Accelerator</a></td>  
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Climate Control <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Homematic IP Radiator Thermostat HmIP-eTRV-2</th>
<th>Homematic IP Wall Thermostat HMIP-WTH-2</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140314613-00eacaf7-93c1-43fb-99ef-e51ac3c72b22.png" width="222.25" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140314660-03c7ea91-f0c1-47a5-a9d7-d9751d2dea9e.png" width="222.25" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/3EEtZFo">Homematic IP HmIP-eTRV-2</a></td>
<td><a href="https://amzn.to/3bF5wDk">Homematic IP HMIP-WTH-2</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Light and Light Controls <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Philips Hue White & Colour Ambiance, E27</th>
<th>Philips Hue Single Filament Bulb, E27</th>
<th>Philips Hue White Ambiance, E14</th>
<th>Philips Hue White Ambiance, GU10</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140317792-9de9c133-a113-4372-af04-e2231e8490c6.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140317873-ce933667-e66e-47f2-8633-6d30ed5ff019.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140317993-9e33a5d4-3100-4bb6-ad1c-08d8b395aab3.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140318124-4c3c6000-d28a-45b2-9cb7-8041eba754aa.png" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/3EBfPF8">Philips Hue White & Colour Ambiance, E27</a></td>
<td><a href="https://amzn.to/3o0oREK">Philips Hue Single Filament Bulb, E27</a></td>
<td><a href="https://amzn.to/3o0oREK">Philips Hue White Ambiance, E14</a></td>
<td><a href="https://amzn.to/3nQpock">Philips Hue White Ambiance, GU10</a></td>
</tr>
</tbody>
</table>

<br>

<table>
<thead>
<tr>
<th>Philips Hue Go White & Colour Ambiance, Portable Light</th>
<th>Philips Hue Lightstrip Plus</th>
<th>Philips Hue Dimmer Switch</th>
<th>IKEA Floalt 60 x 60 cm</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140319788-587f9413-2d75-46fb-ae81-ff4050812407.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140319872-16687a42-8133-4f79-989c-4398953dfccc.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140319936-7bd9d875-2e67-4174-81b8-f5b07b2450ec.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140320115-b1f98984-cc87-4c1d-ac45-575d708d39c8.png" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/3CKBZ77">Philips Hue Go White & Colour Ambiance, Portable Light</a></td>
<td><a href="https://amzn.to/3CKBZ77">Philips Hue Lightstrip Plus</a></td>
<td><a href="https://amzn.to/3k7u909">Philips Hue Dimmer Switch</a></td>
<td><a href="https://www.ikea.com/de/de/p/floalt-led-lichtpaneel-dimmbar-weissspektrum-20436317/">IKEA Floalt 60 x 60 cm</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Media Player and Remotes <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Sonos Arc Soundbar</th>
<th>Sonos Sub</th>
<th>Sonos Play:1</th>
<th>Sonos One</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140322277-d2ea03fc-59ae-4c43-a1ad-0974e2e6b845.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140322880-ff444ad3-d341-4574-b166-a47a4c8d3576.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140323687-d430a23b-4ae9-4127-a772-73edaa1a996c.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140323746-5ad85bcc-3b85-497e-9f59-4fdcbd54d992.png" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/3k7QNpo">Sonos Arc Soundbar</a></td>
<td><a href="https://amzn.to/3k67dhI">Sonos Sub</a></td>
<td><a href="https://amzn.to/3q7w2ho">Sonos Play:1</a></td>
<td><a href="https://amzn.to/3k2IgnG">Sonos One</a></td>
</tr>
</tbody>
</table>

<br>

<table>
<thead>
<tr>
<th>Google Nest Mini</th>
<th>Samsung Q7FN</th>
<th>Sony Bravia</th>
<th>Broadlink RM Pro and Mini</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140329358-ee7a1989-3e50-4111-8156-9ffed4e5cfe3.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140329600-83986820-04a0-45d7-9543-dbc63d615186.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140329800-609a5c82-1ea0-4b63-91d3-9692852a6b40.png" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140330328-c3994bdf-8f62-4474-8281-928ebf9184ad.png" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/3EI58R9">Google Nest Mini</a></td>
<td><a href="https://amzn.to/3bGQAVt">Samsung Q7FN</a></td>
<td><a href="https://amzn.to/3mKaG7G">Sony Bravia</a></td>
<td><a href="https://amzn.to/31wMHk8">Broadlink RM Pro and Mini</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  PC <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>PC</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140332925-ee134f45-62cd-403d-82b4-9ba635ac3ea1.png" width="222.25" /></td>
</tr>
<tr>
<td>Custom made PC</td>

</tr>
</tbody>
</table>

<h2 align="left">
  <br>
  Integrations <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h2>

<h2 align="left">
  <br>
  Custom Components <a href="https://github.com/philipp089/Home-Assistant-Config#--google-inspired-home-assistant-configuration-mobile-and-desktop-user-interfaces"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h2>
