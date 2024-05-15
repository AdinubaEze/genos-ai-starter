import { SiLooker } from "react-icons/si";
import { SiSamsclub } from "react-icons/si";
import { IoShieldCheckmarkSharp,IoCallOutline,IoLocationOutline } from "react-icons/io5";
import { VscRobot } from "react-icons/vsc";
import { LiaNetworkWiredSolid } from "react-icons/lia";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { MdOutlineDatasetLinked,MdElectricScooter,MdOutlineAlternateEmail  } from "react-icons/md";
import { AiOutlineSolution } from "react-icons/ai";
import { CgTrack } from "react-icons/cg";
import { profile2, profile3,profile4,profile5,
  amazon,facebook,google,
  linkedin,microsoft,netflix,paypal,samsung,
  skype, whatsapp, 
 } from "./assets";


export const menus = [
    {name:"About Us",routeId:'about-us'},
    {name:"Services",routeId:'services'},
    {name:"Why Us",routeId:'why-choose-us'},
    {name:"Clients",routeId:'clients'},
    {name:"Contact",routeId:'contact'},
];

export const about = [
    {
        title:"Automating Processes",
        icon:<SiLooker/>,
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Reiciendis iusto rem ullam nesciunt, illo porro, nostrum nihil provident
               repudiandae.`,
    },
    {
        title:"Exactness",
        icon:<SiSamsclub/>,
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis iusto rem ullam nesciunt, illo porro, nostrum nihil provident
         repudiandae.`,
    },
    {
        title:"Correctness",
        icon:<IoShieldCheckmarkSharp/>,
        description:`Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Reiciendis iusto rem ullam nesciunt, illo porro, nostrum nihil provident
         repudiandae.`,
    },
]

export const partners = [
  {
    name:"Amazon",
    logo:amazon,
  },
  {
    name:"Facebook",
    logo:facebook,
  },
  {
    name:"Google",
    logo:google,
  },
  {
    name:"LinkedIn",
    logo:linkedin,
  },
  {
    name:"Microsoft",
    logo:microsoft,
  },
  {
    name:"Netflix",
    logo:netflix,
  },
  {
    name:"PayPal",
    logo:paypal,
  },
  {
    name:"Samsung",
    logo:samsung,
  },
  {
    name:"Skipe",
    logo:skype,
  },
  {
    name:"Whatsapp",
    logo:whatsapp,
  },
]

export const focusBase = [
    {
        name:"Machine Learning",
        icon:<VscRobot/>,
        description:`Reiciendis iusto rem ullam nesciunt, illo porro, nostrum nihil provident`,
    },
    {
        name:"Sensor Integration",
        icon:<LiaNetworkWiredSolid/>,
        description:`Reiciendis iusto rem ullam nesciunt, illo porro, nostrum nihil provident`,
    },
    {
        name:"Computer Vision",
        icon:<HiOutlineDesktopComputer/>,
        description:`Reiciendis iusto rem ullam nesciunt, illo porro, nostrum nihil provident`,
    },
]

export const services = [
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Automated Manufacturing",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Robotic Process Automation",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"AI-Powered Analytics",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Autonomous Vehicles",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Personalized Healthcare Solutions",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
    {
        icon:<MdOutlineDatasetLinked/>,
        name:"Smart Home Systems",
        description:`
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Non dolore ut nisi aspernatur alias `,
    },
]


export const whyChooseUs = [
    {
        name:"Cutting-edge Technology",
        icon:<MdElectricScooter/>,
        description:`Our company is at the forefront of robotics and AI innovation, utilizing the latest advancements to deliver superior solutions.`,
    },
    {
        name:"Customized Solutions",
        icon:<AiOutlineSolution/>,
        description:`We understand that every client's needs are unique. Our team works closely with you to tailor our robotic and AI offerings to fit your specific requirements.`,
    },
    {
        name:"Proven Track Record",
        icon:<CgTrack/>,
        description:`With a history of successful projects and satisfied clients, we have the expertise and experience to deliver reliable and effective solutions that drive tangible results.`,
    },
]

export const clients = [
    {
      image:profile2,
      name:'Samuel Eze',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
    {
      image:profile3,
      name:'Emmanuel Joseph',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
    {
      image:profile4,
      name:'Gloria Chiwendu',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    },
    {
      image:profile5,
      name:'Precious Stone',
      review:` Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
             veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea`
    }
  
  ];

export const contactInfo = [
    {
      name:"Email",
      icon:<MdOutlineAlternateEmail />,
      value:"mradinuba@gmail.com",
    },
    {
      name:"Phone",
      icon:<IoCallOutline/>,
      value:"+2347039681695",
    },
    {
      name:"Address",
      icon:<IoLocationOutline/>,
      value:"Gwarinpa, Abuja, Nigeria",
    },
]


export const footer = [
    {
      group:"Explore",
      routes:[
        {name:"About Us",routeId:'about-us'},
        {name:"Services",routeId:'services'},
        {name:"Why Us",routeId:'why-choose-us'},
        {name:"Clients",routeId:'clients'},
        {name:"Contact",routeId:'contact'},
      ]
    },
    {
      group:"Others",
      routes:[
        {name:"Privacy Policy"},
        {name:"Terms and Conditions"},
        {name:"Cookie Policy"},
      ]
    },
    {
      group:"Contacts",
      routes:[
        {
          name:"mradinuba@gmail.com",
          icon:<MdOutlineAlternateEmail />,
        },
        {
          name:"+2347039681695",
          icon:<IoCallOutline/>,
        },
        {
          name:"Gwarinpa, Abuja, Nigeria",
          icon:<IoLocationOutline/>,
        },
      ]
    },
  ]