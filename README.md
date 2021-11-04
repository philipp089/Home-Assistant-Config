<h1 align="center">
  Google inspired Home Assistant Configuration (Mobile and Desktop User Interfaces)
</h1>

This Repository contains my personal Smart Home Configuration. At the moment (as of Nov. 21) my Smart Home runs on a Raspberry Pi 4B 4GB with <a href="https://www.home-assistant.io/">Home Assistant</a> installed. Use the menu links below to navigate through the documentation. If there are any open questions or you want to contribute feel free to contact me. 

<div align="center">
  <h4>
    <a href="https://github.com/philipp089/Home-Assistant-Config#----mobile-user-interface">
      Mobile User Interface
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config#desktop-user-interface">
      Desktop User Interface
    </a>
    <span> | </span>
    <a href="">
      Devices
    </a>
    <span> | </span>
    <a href="">
      Integrations
    </a>
    <span> | </span>
    <a href="">
      Lights
    </a>
  </h4>
</div>

If you are an experienced Home Assistant user you might be interested in the following files:

#### <a name="Main Files"></a>Main files and folders of my HA-Config:
* [ui-lovelace.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/ui-lovelace.yaml) - Main file of the Mobile User Interface
* [config.js](https://github.com/philipp089/Home-Assistant-Config/blob/master/www/tileboard/config.js) - Main file of the Desktop User Interface
* [configuration.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/configuration.yaml) - Main Configuration file of the Smart Home
* [themes.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/themes.yaml) - Theme-File for Day and Night Mode
* [scrips.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/scripts.yaml) - All the scrips running in my Smart Home
* [automations.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/automations.yaml) - All the automations running in my Smart Home
* [Automations folder](https://github.com/philipp089/Home-Assistant-Config/tree/master/automations) - To organise my automations in a more structured way, i started splitting automations to single files. Find the structure here


<h2 align="left">
  <br>
  Mobile User Interface
</h2>

At the moment (as of Nov. 21) i control my Smart Home over 16 individual tabs. Use the menu links below to navigate through the tabs. Each tab contains a day and a night mode.

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

### The Home - Tab

The Home-Tab is the default Tab and a great way to start searching through features as it gives direct access to all tabs in the User Interface. Each label-card in the whole User-Interface leads back to the Home-Tab by pressing it.

The Home-Tab contains a custom-header with each tab above the Presence-Status. The quick access area below is maybe my mostly used way to navigate through the app, as it gives direct access to all dashboards.

![00_Home_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139411201-6b6403e7-be74-4b32-8584-520623305b19.png)

Aside from that, the  Home-Tab contains a group of custom button cards for each room. 

![00_Home_Tab_Mockup_002](https://user-images.githubusercontent.com/66092908/139411262-14e362d9-f600-474c-a179-896bc33a29db.png)

The Plugs- and the Air-Humidifier Card are custom button card templates as well as all other button card type.

![00_Home_Tab_Mockup_003](https://user-images.githubusercontent.com/66092908/139411322-7bdbe469-abb0-45c9-b74d-8d063f32cb52.png)

#### The Home - Tab Night Mode

The corresponding night-mode is shown below:

![00_Home_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139411226-159c4aed-10e7-405c-a9a6-6622cecfdfab.png)

![00_Home_Tab_Mockup_002_Night_Mode](https://user-images.githubusercontent.com/66092908/139411286-35da3dca-6901-4fab-bc48-aa0a6f8b0594.png)

![00_Home_Tab_Mockup_003_Night_Mode](https://user-images.githubusercontent.com/66092908/139411335-56a1515c-3ba0-488c-863d-e26596b69f77.png)

### The Light - Tab

As the name suggests, in the Light-Tab I handle all my light-scripts. I almost exclusively use Philips Hue bulbs connected to a Raspbee II from dresden electronics as my Zigbee-Gateway. An old IKEA Floalt Panel is the exception. Each of the scenes is also controllable via speech over Google Assistant.

![01_Light_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139411362-596376b4-aa8e-4f87-a67f-aa11c694883c.png)

#### The Light - Tab Night Mode

The night mode version of the light tab:

![01_Light_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139411374-9e8ecaca-0bf6-4e1b-9df6-136c3a785afd.png)

### The Media - Tab

Remote Controls for two televisions and all Media-Players (several Sonos devices, Google Nest Minis) are integrated to this dashboard.

![02_Media_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139411399-9f739e82-baba-4186-93e7-776e248be00e.png)

#### The Media - Tab Night Mode

![02_Media_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139411413-db3fd023-8bc3-4564-aaa5-a4beea865f3a.png)

### The Plugs - Tab

![03_Plugs_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139414779-996c4732-2860-457f-9551-82cc86443a95.png)

#### The Plugs - Tab Night Mode

![03_Plugs_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139414792-d8fe2977-53cc-4817-a8fe-56019490283c.png)

### The Plants - Tab

I still have to evaluate the Xiami-Plant-Sensors until that, this dashboard is empty.

### The Climate - Tab

A simple dashboard to view all the temperatures in the flat. In my setup i use Homematic HmiP-eTRV-2 devices.

![05_Climate_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139417167-97c36bc4-222d-4e2b-a546-9dc91dc32633.png)

#### The Climate - Tab Night Mode

![05_Climate_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139417204-22b26e99-7872-46be-94f6-b7744e7598a1.png)

### The Raspberry - Tab

![06_Raspberry_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139419353-73fac1d8-d9e2-42dc-a338-0511c65d61c4.png)

#### The Raspberry - Tab Night Mode

![06_Raspberry_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139422061-4eb153f7-dd1a-4f5f-8511-d7a8c52956dd.png)

### The Desktop - PC - Tab

![07_Desktop_PC_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476942-8980eb6e-c777-4f25-99ab-71525693a40e.png)

#### The Desktop - Tab Night Mode

![07_Desktop_PC_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476176-9a3d0a57-092b-4126-86d1-a48e49c17cf9.png)

### The Playstation - Tab

![08_Playstation_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476914-077e426b-8b32-4dfb-a0fa-3ed3a0840d9e.png)

#### The Playstation - Tab Night Mode

![08_Playstation_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476263-6720bf57-1b80-43ce-9d2a-3d92fc50db01.png)

### The Weather - Tab

![09_Weather_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476891-05c59e36-66f8-47ce-bcf9-8c0cd0f8df51.png)

#### The Weather - Tab Night Mode

![09_Weather_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476334-78bb256f-7f9c-47d0-9951-26f5b03d4837.png)

### The Camera - Tab

![10_Camera_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476872-7f752de9-1393-4863-9147-1c9b70d10427.png)

#### The Camera - Tab Night Mode

![10_Camera_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476405-a30f8b18-6d61-441f-862f-2463503b91ef.png)

### The Smartphone - Tab

![11_Smartphone_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476838-eccbb9dc-df6c-4cd7-b676-496e58d81323.png)

#### The Smartphone - Tab Night Mode

![11_Smartphone_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476487-832a7384-8681-4ab5-8d7d-94607e9bdd8a.png)

### The Battery - Tab

![12_Battery_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476820-fc1db2ad-1b49-4ea9-b9a5-d95356faf0e8.png)

#### The Battery - Tab Night Mode

![12_Battery_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476566-506a89cb-388d-43d4-a9f0-7b97e856c4c3.png)

### The Alarm - Tab

![13_Alarm_Tab_Mockup_001](https://user-images.githubusercontent.com/66092908/139476801-329a28e1-9412-4d0c-b5b0-588a6029bc96.png)

#### The Alarm - Tab Night Mode

![13_Alarm_Tab_Mockup_001_Night_Mode](https://user-images.githubusercontent.com/66092908/139476617-419170fd-df69-4233-90ab-a075ddbb080d.png)

### The Health - Tab

Work in Progress

### The Calender - Tab

Work in Progress

### The Automations - Tab

![14_Automations_Tab_Mockup_003](https://user-images.githubusercontent.com/66092908/139476702-f6a134b2-6656-4602-964a-6018a82c2af0.png)

#### The Automations - Tab Night Mode

![14_Automations_Tab_Mockup_003_Night_Mode](https://user-images.githubusercontent.com/66092908/139476678-8da8cc38-d2c5-4ed7-87d4-bdd4e3a8792d.png)


## Desktop User Interface

### The Home - Tab

The Desktop-App is made with Tileboard. For now i only have the first Tab finished.

![Home_Tab_Desktop_UI_v03_web](https://user-images.githubusercontent.com/66092908/136972172-35ea2c69-f50e-4e4f-9beb-c53e5d942822.png)

