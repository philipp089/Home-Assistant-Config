<h1 align="center">
  Home Assistant Configuration (Minimalist UI Setup)
</h1>

![Header](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/d4c7f55f-40a2-460c-bbd3-2d0bf6d79ffa)

![00_Home_Tab_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/09e5d254-9bca-4cbd-815a-3e868bdf052b)

This Repository contains my personal Smart Home Configuration. At the moment (as of Feb. 24) my Smart Home runs on a Raspberry Pi 4 Model B 4 GB with [Home Assistant](https://www.home-assistant.io/) installed. Use the menu links below to navigate through the documentation. If there are any open questions or you want to contribute feel free to contact me.

---

<h3 align="center">
  Main Sections
</h3>

<div align="center">
  <h4>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#----mobile-user-interface">
      Mobile User Interface
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#----devices-">
      Devices
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#----integrations-">
      Integrations
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#----custom-components-">
      Custom Components
    </a>
  </h4>
</div>

---

If you are an experienced Home Assistant user you might be interested in the following files:

#### <a name="Main Files"></a>Main files and folders of my HA-Config:
* [Minimalist UI Mobile views](https://github.com/philipp089/Home-Assistant-Config/tree/master/ui_lovelace_minimalist/dashboard/views) - Main folder of the Mobile User Interface Views
* [configuration.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/configuration.yaml) - Main Configuration file of the Smart Home
* [themes](https://github.com/philipp089/Home-Assistant-Config/tree/master/themes) - Theme-Files for Dark and Light Mode
* [scrips.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/scripts.yaml) - All the scrips running in my Smart Home
* [automations.yaml](https://github.com/philipp089/Home-Assistant-Config/blob/master/automations.yaml) - All the automations running in my Smart Home

#### <a name="Links"></a>Useful Links: 
* [Minimalist UI Documentation](https://ui-lovelace-minimalist.github.io/UI/) - Documentation for the Minimalist UI Interface
* [material.io](https://material.io/) - Guidelines for designing User Interfaces
* [7ahang´s Behance Profile](https://www.behance.net/gallery/88433905/Redesign-Smart-Home) - Guidelines for designing Smart Home Interfaces
* [MDI Icons](https://materialdesignicons.com/) - Icons used in the Interfaces
* [Google Visual Asset Guidelines](https://www.behance.net/gallery/9028077/Google-Visual-Assets-Guidelines-Part-1) - Google specific design guidelines

<h2 align="center">
  <br>
  Mobile User Interface
</h2>

At the moment (as of Feb. 24) I control my Smart Home over 19 individual tabs. Use the menu links below to navigate through the tabs. Each tab contains a dark and a light mode.

---

<h3 align="center">
  Tab Overview
</h3>

<div align="center">
  <h4>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--the-home---tab-">
      Home-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-room---tabs-">
      Room-Tabs
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-weather---tab-">
      Weather-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-remote---tab-">
      Remote-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-calendar---tab-">
      Calendar-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-raspberry---tab-">
      Raspberry Pi-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-health---tab-">
      Health-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-chores---tab-">
      Chores-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-alarm---tab-">
      Alarm-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-automations---tab-">
      Automations-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-batteries---tab-">
      Batteries-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-energy---tab-">
      Energy-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-hardware---tab-">
      Hardware-Tab
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#the-playstation---tab-">
      Playstation-Tab
    </a>
  </h4>
</div>

---

<h3 align="left">
  <br>
The Home - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

![00_Home_Tab_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/ea0dd5b8-4a42-43ab-af36-299c2dbd7812)

The Home Tab acts as the default and ideal starting point, offering a convenient way to explore features with direct access to all tabs within the User Interface. Returning to the Home Tab is easy – simply press the back-chip at the top of each page.

In the Home Tab, a personalized header displays each tab above the welcome card, maintaining an organized layout. The quick access area below is my preferred method for navigating the app, providing direct entry to all dashboards.

<h4 align="left">
  <br>
The Home - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h4>

![00_Home_Tab_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/db33783d-efdc-4a1c-9503-c8b85f7b9a3c)

---

### The Room - Tabs <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

In my smart home setup, the Room Tab is where I manage light scenes, scripts, plugs, and media players tailored to each room. I primarily use Philips Hue bulbs connected to a Raspbee II from Dresden Electronics, serving as my Zigbee Gateway. The only exception is an older IKEA Floalt Panel. Additionally, I've implemented voice control through Google Assistant (Assist will be integrated in the future), enabling me to effortlessly command and control all my light scenes, scripts, plugs and battery states via voice commands.

![01_Room_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/a43628c8-bb45-42b3-bf07-3475aa7d3ae0)

![01_Room_Tab_Mockup_002_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/a28ae925-94d4-45ca-a1a9-ab084d2fbbad)

![01_Room_Tab_Mockup_003_Night_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/f28f0e40-a1ac-4a52-bc66-d76452210123)

#### The Room - Tabs Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![01_Room_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/83e961f2-3eb5-4f78-90f0-9bcdad860498)

![01_Room_Tab_Mockup_002_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/6250bb3c-507e-4af5-a79b-e3bde6a05178)

![01_Room_Tab_Mockup_003_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/a4209935-2023-442e-a560-552a1a615083)

---

### The Weather - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

This tab mainly serves as the dedicated control hub for my roof terrace and it features the weather forecast from met.no, delivered by the Norwegian Meteorological Institute. Additionally, three sensors provide real-time data on temperature, humidity, and light intensity. The tab also includes control options for the outdoor lights through the wall switch card.

![02_Climate_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/53b4a523-b902-44f3-a680-e309d82edfd1)

#### The Weather - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![02_Climate_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/695717ea-45e8-460f-8176-cccce86319e8)

---

### The Remote - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Welcome to my smart home's ultimate TV control hub! With this Home Assistant view, I effortlessly manage two televisions using custom script buttons. From powering on/off to adjusting volume and switching channels, it's all at my fingertips. No more juggling multiple remotes or dealing with complex setups — I've personalized and streamlined my entertainment experience. Elevating my smart home with intuitive TV control has never been easier (especially if i can´t find the normal remote again)!

![03_Remote_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/e338fe1d-1432-4963-aff4-13dced0f27d2)

#### The Remote - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![03_Remote_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/f19883d8-5d30-4218-a226-d0bf013ec959)

---

### The Calendar - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Meet my Calendar view, where Google Calendar seamlessly integrates into my daily life. This sleek dashboard keeps me organized with upcoming events displayed intuitively, complete with color-coded entries for quick identification. Reminders ensure I never miss a beat, and the voice assistant feature keeps me informed hands-free. Customizable and user-friendly, this view also controls my smart home devices, making daily tasks a breeze. Simplify your life, stay organized, and enjoy the convenience of a fully connected home. 

![04_Calendar_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/98cffc2f-9916-412c-a32d-1dbeae36c756)

#### The Calendar - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![04_Calendar_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/6b483994-65c9-4e4f-9a1d-51570410eb3c)

---
### The Raspberry - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>


Welcome to my Home Raspberry Pie Dashboard, where I have a unified view of all versions of Home Assistant . Real-time sensors keep me updated on disc temperature, CPU usage of my Raspberry Pi 4 B host system, memory usage and used disc space.

The dashboard also integrates GitHub states, allowing me to track repository updates and stars. I need more of those by the way.

![06_Raspberry_Tab_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/ef7588c4-1541-4b1b-af6f-798232a1a8e2)

#### The Raspberry - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![06_Raspberry_Tab_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/284a7094-608b-4272-97a3-c7be86c80ecb)

---

### The Health - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>


You knew this would be the last view to be finished! Priorities are a little of at the moment :-P



#### The Health - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>



---

### The Chores - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Welcome to my customized chore management hub in Home Assistant! With this dedicated view, I effortlessly organize my to-do list, prioritizing tasks by due date for a smooth workflow. Each chore features a handy "Done" button, making it easy to mark completed tasks and stay on track. No more chaotic chore management – this Home Assistant view simplifies my daily tasks, making productivity a breeze. My smart home has become an organized haven, giving me the power to conquer chores effortlessly and maintain order. Welcome to a hassle-free approach to managing my tasks! I should really clean my windows again...

![05_Chores_Tab_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/fc45648e-5967-4666-8eca-12e65c471cc7)

#### The Chores - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![05_Chores_Tab_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/eb310dc1-5892-44e9-a63f-34b372aafcc9)

---

### The Alarm - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Have a look at my alarm dashboard. It relies mainly on motion sensors strategically placed throughout my home, detecting not only human presence but also the playful antics of my feline companions. With object detection capabilities (realised through a Coral Edge TPU device), my system distinguishes between individuals and furry friends and sends notifications and videos when i am not at home.

I can navigate effortlessly through rooms, each equipped with its own camera feed, motion sensors, and intelligent object detection for enhanced security, convenience, and peace of mind.

![08_Alarm_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/8cea9a77-e5c0-46d2-b3c6-76738d42d95c)

#### The Alarm - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![08_Alarm_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/e21c5ac7-a77e-4461-a719-4417259c3e19)

---

### The Automations - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Welcome to my Home Assistant Automation Dashboard. I've shaped every detail to create a personalized smart home experience and navigate effortlessly through automations that contain input daytime values, switches or any other helper entity. 

![09_Automations_Tab_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/f2c6c669-5a14-469b-b7a8-7401cf8c3c1a)

#### The Automations - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![09_Automations_Tab_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/162bea63-a5a0-40e4-b6a1-32efe7f73b24)

---

### The Batteries - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Stay in control with my Battery State Dashboard, where real-time insights into power levels empower your day. I effortlessly monitor the status of my devices and gadgets, ensuring I never get caught off guard. From my smartphones over thermostats, this dashboard keeps me informed on the state of every single battery device in my home so I can focus on what matters without interruption. Notifications are sent over my telegram bot to my smartphone. 

![10_Battery_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/dfad7c55-cc0d-4a40-b6b8-02865df0d286)

#### The Batteries - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![10_Battery_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/271688c3-044f-41a4-8290-c52eb783c662)

---

### The Energy - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Meet my Home Assistant Energy Dashboard — a powerful tool for visualisation of my energy usage. With a customizable energy period selector, I can easily analyze and compare consumption over time, making informed decisions for efficiency. The total household consumption display gives me a quick overview of my environmental impact, while real-time sensors provide live data for each energy source. From lighting to appliances, I can monitor and manage every aspect of my energy use, promoting a more sustainable and cost-effective lifestyle. It's not just a dashboard; it's my key to a greener and smarter home.

![11_Energy_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/8be775ec-c83a-4ab3-a154-198904758e03)

#### The Energy - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![11_Energy_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/12954fc8-942e-4111-9c8b-a6da4111a397)

---

### The Hardware - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Welcome to my crafted command center – a dashboard where I've consolidated key data for a seamless tech experience. Monitor temperatures, disk space, and more from my NAS and desktop computer at a glance. This personalized hub offers real-time insights, ensuring optimal performance and efficiency. With every detail meticulously curated, this dashboard reflects my commitment to a tech-savvy, organized, and effortlessly managed digital domain. Stay in control, stay efficient.

![12_Hardware_Tab_Mockup_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/2782c541-6d5c-4f1c-bf57-76f97b3e7b03)

#### The Hardware - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![12_Hardware_Tab_Mockup_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/6cde6380-3377-4439-95fb-54ba5d53fa70)

---

### The Playstation - Tab <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

Welcome to my PlayStation 4 Control Hub – the ultimate command center for my gaming experience. With a few taps, I can power up my PS4, launch games, and have a look at the media playback. Whether solo or with friends, my PlayStation 4 Control Hub turns gaming into a personalized, seamless adventure – putting control at my fingertips. 

![13_Playstation_Tab_001_Dark_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/6156db51-c669-4809-a44d-6af05bf84474)

#### The Playstation - Tab Light Mode <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--tab-overview"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>

![13_Playstation_Tab_001_Light_Mode](https://github.com/philipp089/Home-Assistant-Config/assets/66092908/9a445a7a-ce39-4d47-9971-9627fe20aa70)

---

<h2 align="center">
  <br>
  Devices <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h2>

This section deals with the various device categories in my smart home. Use the menu links below to navigate through the Device Categories.

---

<h3 align="center">
  Device Categories <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<div align="center">
  <h4>      
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----cameras-and-security-">
      Cameras and Security
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----climate-control-">
      Climate Control
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----light-and-light-controls-">
      Light and Light Control
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----media-player-and-remotes-">
      Media Player
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----network-">
      Network
    </a>
    <span> | </span>      
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----pc-">
      PC
    </a>
    <span> | </span>      
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----playstation-">
      Playstation
    </a>    
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----smart-home-hub-">
      Smart Home Hub
    </a>    
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----smart-plugs-">
      Smart Plugs
    </a>
    <span> | </span>
    <a href="https://github.com/philipp089/Home-Assistant-Config/blob/master/README.md#----3d-printer-">
      3D Printer
    </a>       
  </h4>
</div>

---

<h3 align="left">
  <br>
  Cameras and Security <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
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
  Climate Control <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Homematic IP HmIP-eTRV-2</th>
<th>Homematic IP HMIP-WTH-2</th>
<th>Homematic IP HmIP-STHO</th>
<th>Homematic IP HmIP-SLO</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140314613-00eacaf7-93c1-43fb-99ef-e51ac3c72b22.png"/></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140314660-03c7ea91-f0c1-47a5-a9d7-d9751d2dea9e.png"/></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140730653-e2c8fd3f-ca71-4b0b-92dd-13db5a6dc3de.png"/></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140731052-1d679265-494f-4d33-85a5-c6d25150a508.png"/></td>
</tr>
<tr>
<td><a href="https://amzn.to/3EEtZFo">Homematic IP HmIP-eTRV-2</a></td>
<td><a href="https://amzn.to/3bF5wDk">Homematic IP HMIP-WTH-2</a></td>
<td><a href="https://amzn.to/3EUdbum">Homematic IP HmIP-STHO</a></td>
<td><a href="https://amzn.to/3EMdabM">Homematic IP HmIP-SLO</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Light and Light Controls <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
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

<br>

<table>
<thead>
<tr>
<th>IKEA TRÅDFRI Remote</th>
<th>Raspbee II Zigbee Gateway</th>
<th>Homematic HmIP-BSM</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140335542-815f3db2-53c8-460e-9af2-5e233a085d13.png" width="222.25" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140335635-4b70b19d-b037-42dc-a514-357c1893b33f.png" width="222.25" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140503934-423a18b2-5d55-4422-b348-3a5eee6c4efb.png" width="222.25" /></td>
</tr>
<tr>
<td><a href="https://www.ikea.com/de/de/p/tradfri-fernbedienung-30443124/">IKEA TRÅDFRI Remote</a></td>
<td><a href="https://amzn.to/3o029g6">Raspbee II Zigbee Gateway</a></td>
<td><a href="https://amzn.to/3EQIXIK">Homematic HmIP-BSMy</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Media Player and Remotes <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
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

<br>

<table>
<thead>
<tr>
<th>Chromecast Ultra 4K</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140526688-f1314b43-6225-4516-908c-75ebe0c2a291.png" width="222.25" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/2ZZtIOJ">Chromecast Ultra 4K</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Network <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<br>

<table>
<thead>
<tr>
<th>Netgear JGS524PE</th>
<th>PiNAS Raspberry Pi 4b 8GB</th>
<th>NAS Raid HDDs</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140732036-b3acc139-243c-4bed-835f-ef32e6ecce57.png" width="222.25" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140733924-65836ca2-1ef8-43f8-bc40-ca9edd86f686.png" width="222.25" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140733985-b8b238da-411e-4850-99c3-3d2abb6635c7.png" width="222.25" /></td>
</tr>
<tr>
<td><a href="https://amzn.to/3bRCrou">Netgear JGS524PE</a></td>
<td><a href="https://amzn.to/3mTAMVJ">PiNAS Raspberry Pi 4b 8GB</a></td>
<td><a href="https://amzn.to/3bNcFlk">NAS Raid HDDs</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  PC <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
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

<h3 align="left">
  <br>
  Playstation <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Playstation 4 Pro</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140500173-070e4d04-6dfe-43f7-a72f-159bebf0f084.png" width="222.25" /></td>
</tr>
<tr>
  <td><a href="https://amzn.to/3BNntKN">Playstation 4 Pro</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Smart Home Hub <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Raspberry Pi 4B 4GB</th>
<th>Homematic CCU3</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140503392-e9f7561e-0635-480e-824a-d877327a38b5.png" width="222.25" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140503425-7769e509-b68f-42f3-a02c-4556429036c6.png" width="222.25" /></td>
</tr>
<tr>
  <td><a href="https://amzn.to/3GNhjhv">Raspberry Pi 4B 4GB</a></td>
  <td><a href="https://amzn.to/3wllo7S">Homematic CCU3</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  Smart Plugs <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>TP-Link HS100</th>
<th>TP-Link HS110</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140500815-feea59f3-29f9-459e-b1bc-34c2ac034e2b.png" width="222.25" /></td>
<td><img src="https://user-images.githubusercontent.com/66092908/140500815-feea59f3-29f9-459e-b1bc-34c2ac034e2b.png" width="222.25" /></td>
</tr>
<tr>
  <td><a href="https://amzn.to/3k5LMO8">TP-Link HS100</a></td>
  <td><a href="https://amzn.to/2YjT2yb">TP-Link HS110</a></td>
</tr>
</tbody>
</table>

<h3 align="left">
  <br>
  3D Printer <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h3>

<table>
<thead>
<tr>
<th>Caribou MK3s Rel 3</th>
</tr>
</thead>
<tbody>
<tr>
<td><img src="https://user-images.githubusercontent.com/66092908/140510505-6dcd27a3-7e2a-4e10-8d97-9a2cacca81ff.png" width="222.25" /></td>
</tr>
<tr>
  <td><a href="https://caribou3d.com/de/caribou-3d-drucker/839-17857-caribou-mk3s-rel-3.html#/29-hotend-e3d/32-heizpatrone-e3d_40w/34-thermistor-e3d/66-wellendurchmesser-8mm/68-betttrager-mk52/70-display-lcd/75-extruder-mk3s_mit_cool_motor/185-height-220">Caribou MK3s Rel 3</a></td>
</tr>
</tbody>
</table>

<h2 align="left">
  <br>
  Integrations <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h2>

Find all the Integrations i use in my Home Assistant Configuration

#### <a name="Integrations"></a>Used Integrations:
* [AVM FRITZ!SmartHome](https://www.home-assistant.io/integrations/fritzbox/) - AVM FRITZ!SmartHome Integration
* [Broadlink](https://www.home-assistant.io/integrations/broadlink/) - Integration for Broadlink RM4 Pro and Mini
* [deCONZ](https://www.home-assistant.io/integrations/deconz/) - deCONZ and Phoscon for control over the Zigbee Devices (Philips Hue, IKEA Tradfri Remote, IKEA Floalt)
* [Frigate](https://github.com/blakeblackshear/frigate-hass-integration#frigate-home-assistant-integration) - Frigate Integration for recordings, snapshots and events. Works with Object Detection with the Google Coral USB Accelerator
* [Google Cast](https://www.home-assistant.io/integrations/cast/) - Integration for Google Chromecast Devices
* [HACS](https://hacs.xyz/) - Home Assistant Community Store - used for Custom Component Integration (see next Section)
* [Supervisor](https://www.home-assistant.io/integrations/hassio/) - Supervisor integration to monitor and control Supervisor add-ons and the operating system from Home Assistant.
* [Mobile App](https://www.home-assistant.io/integrations/mobile_app/) - The Mobile App integration allows Home Assistant mobile apps to easily integrate with Home Assistant. 
* [Mosquitto MQTT broker](https://www.home-assistant.io/integrations/mqtt/) - MQTT Broker Integration for Home Assistant
* [OpenMediaVault 5](https://www.openmediavault.org/?p=2554) - Not an HA-integration but my PiNAS software of Choice
* [OpenWeatherMap](https://www.home-assistant.io/integrations/openweathermap/) - Weather Integration of Choice
* [PLEX](https://www.home-assistant.io/integrations/plex/) - Integration of the PLEX-Media server running on my PiNAS
* [Samsung Smart TV](https://www.home-assistant.io/integrations/samsungtv/) - Integration of Samsung Smart TVs
* [SONOS](https://www.home-assistant.io/integrations/sonos/) - Integrates SONOS-devices in my Smart Home
* [Sony Playstation](https://www.home-assistant.io/integrations/ps4/) - Integrates the Sony Playstation in my Smart Home
* [Spotify](https://www.home-assistant.io/integrations/spotify/) - Spotify Integration for HA
* [TP-Link Kasa Smart](https://www.home-assistant.io/integrations/tplink/) - Integration of the HS100 and HS110 Smart Plugs
* [WebRTC Camera](https://github.com/AlexxIT/WebRTC) - Integrates WebRTC to my Camera-Tab
* [Withings](https://www.home-assistant.io/integrations/withings/) - Integrates the Withings Body+ Scale sensors

<h2 align="left">
  <br>
  Custom Components <a href="https://github.com/philipp089/Home-Assistant-Config?tab=readme-ov-file#--home-assistant-configuration-minimalist-ui-setup"><img align="right" border="0" src="https://user-images.githubusercontent.com/66092908/140279500-3e863252-433b-4e6f-8dc4-31b0e351ad69.png" width="22" ></a>
</h2>

#### <a name="Custom Integrations"></a>HACS Integrations:
* [BlueIris](https://github.com/elad-bar/ha-blueiris) - Integration with Blue Iris Video Security Software
* [browser-mod](https://github.com/thomasloven/hass-browser_mod) - A Home Assistant integration to turn your browser into a controllable entity
* [Circadian Lighting](https://github.com/claytonjn/hass-circadian_lighting) - adds Circadian Lighting to all my lights
* [favicon](https://github.com/thomasloven/hass-favicon) - customises the favicon of HA
* [fontawesome](https://github.com/thomasloven/hass-fontawesome) - allows you to use free icons from fontawesome in HA
* [Frigate](https://github.com/blakeblackshear/frigate-hass-integration) - Integration to run Frigate 
* [HACS](https://hacs.xyz/) - Home Assistant Community Store - used for Custom Component Integration
* [Samsung TV Tizen](https://github.com/jaruba/ha-samsungtv-tizen) - a custom Samsung TV Integration
* [WebRTC Camera](https://github.com/AlexxIT/WebRTC) - Integrates WebRTC to my Camera-Tab

#### <a name="Custom Frontend"></a>HACS Frontend:
* [Atomic Calendar Revive](https://github.com/totaldebug/atomic-calendar-revive) - my calendar integration of choice
* [Bar Card](https://github.com/custom-cards/bar-card) - A Bar card used for HDD-space or anything else
* [Battery State Card](https://github.com/maxwroc/battery-state-card) - main element of my battery-tab
* [button-card](https://github.com/custom-cards/button-card) - if you get only one custom-component, this is it. Highly recommended, my UI would not be possible without it
* [card-mod](https://github.com/thomasloven/lovelace-card-mod) - Allows you to apply CSS styles to various elements of the Home Assistant frontend.
* [card-tools](https://github.com/thomasloven/lovelace-card-tools) - a collection of tools to simplify creating custom cards for Home Assistant 
* [Light popup card](https://github.com/DBuit/light-popup-card) - Popup lovelace card with brightness slider and optional scene selection or a light switch for lights without brightness.
* [Lovelace Swipe Navigation](https://github.com/maykar/lovelace-swipe-navigation) - adds the ability to swipe through the tabs in the mobile UI
* [Mini Media Player](https://github.com/kalkih/mini-media-player) - outstanding Media-Player-card
* [mini-graph-card](https://github.com/kalkih/mini-graph-card) - the core component of all my graphs
* [Simple Thermostat](https://github.com/nervetattoo/simple-thermostat) - the climate control card of my choice, used in the climate-tab
* [Simple Weather Card](https://github.com/kalkih/simple-weather-card) - a simple card for displaying weather information
* [Weather Card](https://github.com/bramkragten/weather-card) - the weather card used in my weather-tab
