import appointment_img from './appointment_img.png'
import header_img from './header_img.png'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.png'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import male_doc from './male_doc.svg'
import female_doc from './female_doc.svg'
import Dermatologist from './Dermatologist.svg'
import Gastroenterologist from './Gastroenterologist.svg'
import General_physician from './General_physician.svg'
import Gynecologist from './Gynecologist.svg'
import Neurologist from './Neurologist.svg'
import Pediatricians from './Pediatricians.svg'


export const assets = {
    appointment_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo
}

export const specialityData = [
    {
        speciality: 'General physician',
        image: General_physician
    },
    {
        speciality: 'Gynecologist',
        image: Gynecologist
    },
    {
        speciality: 'Dermatologist',
        image: Dermatologist
    },
    {
        speciality: 'Pediatricians',
        image: Pediatricians
    },
    {
        speciality: 'Neurologist',
        image: Neurologist
    },
    {
        speciality: 'Gastroenterologist',
        image: Gastroenterologist
    },
]

export const doctors = [
  {
    _id: 'doc1',
    name: 'Dr. Aarav Sharma',
    image: male_doc,
    speciality: 'General physician',
    degree: 'MBBS',
    experience: '6 Years',
    about: 'Dr. Aarav Sharma is dedicated to providing patient-focused healthcare with an emphasis on preventive medicine and wellness.',
    fees: 500,
    address: {
      line1: 'Sector 22, Chandigarh',
      line2: 'Near Aroma Hotel'
    }
  },
  {
    _id: 'doc2',
    name: 'Dr. Priya Desai',
    image: female_doc,
    speciality: 'Gynecologist',
    degree: 'MBBS, MS (OBG)',
    experience: '8 Years',
    about: 'Dr. Priya Desai specializes in women\'s health and prenatal care, ensuring comprehensive gynecological services.',
    fees: 600,
    address: {
      line1: 'Baner Road, Pune',
      line2: 'Opposite Symbiosis College'
    }
  },
  {
    _id: 'doc3',
    name: 'Dr. Rohan Mehta',
    image: male_doc,
    speciality: 'Pediatricians',
    degree: 'MBBS, MD (Pediatrics)',
    experience: '5 Years',
    about: 'Dr. Rohan Mehta offers expert pediatric care with a focus on child development and preventive healthcare.',
    fees: 450,
    address: {
      line1: 'Banjara Hills, Hyderabad',
      line2: 'Near City Center Mall'
    }
  },
  {
    _id: 'doc4',
    name: 'Dr. Ananya Iyer',
    image: female_doc,
    speciality: 'Dermatologist',
    degree: 'MBBS, MD (Dermatology)',
    experience: '4 Years',
    about: 'Dr. Ananya Iyer provides advanced dermatological treatments including acne, skin allergies, and cosmetic care.',
    fees: 400,
    address: {
      line1: 'Indiranagar, Bengaluru',
      line2: 'Above Axis Bank'
    }
  },
  {
    _id: 'doc5',
    name: 'Dr. Kabir Verma',
    image: male_doc,
    speciality: 'Neurologist',
    degree: 'MBBS, DM (Neurology)',
    experience: '7 Years',
    about: 'Dr. Kabir Verma treats a wide range of neurological disorders with a patient-centric and research-driven approach.',
    fees: 700,
    address: {
      line1: 'Saket, New Delhi',
      line2: 'Near Max Hospital'
    }
  }
];
