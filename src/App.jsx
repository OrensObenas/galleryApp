;import React, { useState } from "react"
import ImagePage from "./pages/ImagePage/ImagePage"
import DisplayInfoPage from "./pages/DisplayInfoPage/DisplayInfoPage"
import DisplayInfo from "./components/DIsplayInfo/DisplayInfo"
import CategoryPage from './pages/CategoryPage/CategoryPage'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './style.css'
import user7 from './assets/Use7.jpg'
import user6 from './assets/User6.jpg'
import user5 from './assets/User5.jpg'
import user4 from './assets/User4.jpg'
import user3 from './assets/User3.jpg'
import user2 from './assets/User2.jpg'
import user1 from './assets/User1.jpg'
import user from './assets/User.jpg'
import car1 from './assets/car1.jpg'
import car2 from './assets/car2.jpg'
import car3 from './assets/car3.jpg'
import car4 from './assets/car4.jpg'
import car5 from './assets/car5.jpg'
import car6 from './assets/car6.jpg'
import floor1 from './assets/floor1.jpg'
import floor2 from './assets/floor2.jpg'
import floor3 from './assets/floor3.jpg'
import floor4 from './assets/floor4.jpg'
import floor5 from './assets/floor5.jpg'
import floor6 from './assets/floor6.jpg'
import deco1 from './assets/deco1.jpg'
import deco2 from './assets/deco2.jpg'
import deco3 from './assets/deco3.jpg'
import deco4 from './assets/deco4.png'
import deco5 from './assets/deco5.jpg'
import deco6 from './assets/deco6.jpg'


function App() {
  let contenu = [
    {
      title : 'La sensualliter',
      description : "Une femme sensuelle est élégante, charismatique, et émane une aura de confiance et de mystère. Son allure et son comportement captivent, éveillant les sens et suscitant l'admiration.",
      ref : {user7},
      category : 'women' 
    },
    {
      title : 'Regard provocateur',
      description : "Une femme au regard provocateur possède des yeux perçants, pleins d'audace et de défi. Son regard intense capte l'attention, exprimant à la fois séduction et assurance.",
      ref : {user6},
      category : 'women' 
    },
    {
      title : 'Beauté Indienne',
      description : "Une femme avec une beauté indienne a des traits délicats, des cheveux noirs brillants, une peau dorée, des yeux expressifs, souvent ornés de bijoux traditionnels et vêtue de tenues colorées et élégantes.",
      ref : {user5},
      category : 'women' 
    },
    {
      title : 'La femme a la rose',
      description : "Une femme tenant des roses rouges avec un béret rouge incarne l'élégance et le romantisme, avec une touche artistique. Son style chic et son accessoire vibrant évoquent la passion et le charme.",
      ref : {user4},
      category : 'women' 
    },
    {
      title : 'Femme de la nature',
      description : "Une femme de la nature est harmonieuse, connectée à la terre, avec une allure simple et sereine. Elle préfère les vêtements naturels, aime les plantes, et vit en symbiose avec son environnement.",
      ref : {user3},
      category : 'women' 
    },
    {
      title : 'Harmonie avec la prairie',
      description : "Une femme en harmonie avec la prairie est sereine, respire la liberté et la paix. Sa présence calme et naturelle reflète la beauté des fleurs et l'immensité des champs verts.",
      ref : {user2},
      category : 'women' 
    },
    {
      title : 'Femme aventuriere',
      description : "Une femme aventurière est audacieuse, curieuse et passionnée par l'exploration. Elle aime découvrir de nouveaux horizons, relever des défis et vivre des expériences excitantes en pleine nature.",
      ref : {user1},
      category : 'women' 
    },
    {
      title : 'Miss monde',
      description : "Une Miss Monde incarne la beauté, la grâce et l'intelligence. Elle est charismatique, engagée dans des causes humanitaires, et représente une diversité culturelle avec élégance et compassion.",
      ref : {user},
      category : 'women' 
    },
    {
      title : 'Lamborghini Aventador',
      description : "La Lamborghini Aventador est une supercar emblématique, connue pour son design agressif et ses performances stupéfiantes. Dotée d'un moteur V12 puissant, elle allie luxe, technologie avancée et une allure futuriste qui attire tous les regards.",
      ref : {car6},
      category : 'car' 
    },
    {
      title : 'Lamborghini Huracán',
      description : "La Lamborghini Huracán est une supercar impressionnante, célèbre pour son style saisissant et ses performances exceptionnelles. Équipée d'un moteur V10, elle offre une conduite exaltante avec une accélération rapide et une maniabilité précise, tout en incarnant l'essence de la sportivité italienne.",
      ref : {car5},
      category : 'car' 
    },
    {
      title : 'Lamborghini Urus',
      description : "La Lamborghini Urus est un SUV de luxe et de performance, mariant l'élégance italienne à la robustesse d'un véhicule tout-terrain. Propulsée par un moteur V8 biturbo, elle offre une conduite sportive et confortable, avec un design audacieux et des finitions haut de gamme.",
      ref : {car4},
      category : 'car' 
    },
    {
      title : 'Lamborghini Sian',
      description : "La Lamborghini Sian est une hypercar hybride révolutionnaire, combinant un moteur V12 traditionnel avec une technologie hybride légère. Son design futuriste et ses performances extrêmes en font un symbole de l'innovation automobile et du luxe exclusif.",
      ref : {car3},
      category : 'car' 
    },
    {
      title : 'Lamborghini Centenario',
      description : "La Lamborghini Centenario est une hypercar rare et exclusive, créée pour célébrer le centenaire du fondateur de Lamborghini, Ferruccio Lamborghini. Propulsée par un moteur V12 puissant, elle se distingue par son design aérodynamique et ses matériaux légers, représentant l'apogée de l'ingénierie et du style italien.",
      ref : {car2},
      category : 'car' 
    },
    {
      title : 'Lamborghini Veneno',
      description : "La Lamborghini Veneno est une supercar rare et futuriste, inspirée des avions de chasse. Avec son moteur V12 de 6,5 litres, elle allie performances extrêmes et design agressif, en faisant un objet de désir pour les collectionneurs passionnés.",
      ref : {car1},
      category : 'car' 
    },
    {
      title : 'Rose',
      description : "Les roses sont des fleurs emblématiques, appréciées pour leur beauté et leur parfum envoûtant. Disponibles dans une variété de couleurs, elles symbolisent l'amour et la passion. Leurs pétales délicats et leur forme classique en font des choix populaires pour la décoration et les cadeaux.",
      ref : {floor1},
      category : 'floor' 
    },
    {
      title : 'Orchidées',
      description : "Les orchidées sont des fleurs exotiques renommées pour leur élégance et leur diversité de formes et de couleurs. Leurs pétales délicats et leur longue durée de vie en font des symboles de beauté et de luxe, parfaites pour ajouter une touche raffinée à toute décoration.",
      ref : {floor2},
      category : 'floor' 
    },
    {
      title : 'Tulipes',
      description : "Les tulipes sont des fleurs élégantes et vibrantes, connues pour leurs pétales lisses et leur forme distinctive en coupe. Disponibles dans une large palette de couleurs, elles évoquent le printemps et symbolisent souvent le renouveau et l'amour parfait.",
      ref : {floor3},
      category : 'floor' 
    },
    {
      title : 'Lys',
      description : "Le lys est une fleur majestueuse caractérisée par ses pétales délicats et son parfum enivrant. Sa forme élégante et ses couleurs vives en font un symbole de pureté et de sophistication, souvent utilisé dans les arrangements floraux pour ajouter une touche d'élégance et de grâce.",
      ref : {floor4},
      category : 'floor' 
    },
    {
      title : 'Œillets',
      description : "Les œillets sont des fleurs charmantes reconnaissables par leurs pétales dentelés et leur parfum doux. Disponibles dans une variété de couleurs, ils symbolisent souvent l'amour et l'admiration. Leur durabilité en vase en fait un choix populaire pour les bouquets et les décorations florales.",
      ref : {floor5},
      category : 'floor' 
    },
    {
      title : 'Gerberas',
      description : "Les géraniums sont des fleurs lumineuses et joyeuses, reconnaissables par leurs grandes têtes florales et leurs couleurs vives comme le rouge, le rose, le jaune et l'orange. Leurs pétales rayonnants et leur longue durée de vie en vase en font des choix populaires pour égayer n'importe quel arrangement floral.",
      ref : {floor6},
      category : 'floor' 
    },
    {
      title : 'Vintage',
      description : "La décoration vintage évoque les styles rétro des décennies passées, avec des meubles et des accessoires anciens ou rétro. Elle utilise des motifs et des couleurs nostalgiques pour créer une ambiance nostalgique et pleine de charme.",
      ref : {deco1},
      category : 'other' 
    },
    {
      title : 'Scandinave',
      description : "La décoration scandinave se caractérise par son minimalisme fonctionnel, ses couleurs claires comme le blanc et le gris, ainsi que l'utilisation de bois naturel. Elle crée une atmosphère chaleureuse et harmonieuse avec des touches de design nordique.",
      ref : {deco2},
      category : 'other' 
    },
    {
      title : 'Industriel',
      description : "La décoration industrielle s'inspire des anciens entrepôts et usines, avec des matériaux comme le métal, le béton et le bois brut. Elle privilégie les espaces ouverts, les structures apparentes et les finitions robustes pour un style urbain et authentique.",
      ref : {deco3},
      category : 'other' 
    },
    {
      title : 'Minimaliste',
      description : "La décoration minimaliste se distingue par son design épuré et fonctionnel, avec des espaces dégagés, des couleurs neutres et peu d'objets décoratifs. Elle favorise la simplicité et la clarté pour créer une ambiance calme et harmonieuse.",
      ref : {deco4},
      category : 'other' 
    },
    {
      title : 'Rustique',
      description : "La décoration rustique célèbre le charme et l'authenticité des intérieurs campagnards. Elle met en avant des matériaux naturels comme le bois vieilli, la pierre et le métal patiné. Les meubles sont souvent robustes et artisanaux.",
      ref : {deco5},
      category : 'other' 
    },
    {
      title : 'Moderne',
      description : "La décoration moderne se caractérise par des lignes épurées, des espaces ouverts et une palette de couleurs neutres ou vives. Elle privilégie les matériaux comme le métal, le verre et le béton . ",
      ref : {deco6},
      category : 'other' 
    }
  ]
  const [formCallback, setFormCallback] = useState(contenu)
  

  return (
    <>
          <Router>
            <Routes>
              <Route path="/" element={<CategoryPage setFormCallback={setFormCallback} formCallback={formCallback} contenu={contenu} />} />
              <Route path="/displayImage" element={<ImagePage formCallback={formCallback} />} />
            </Routes>
          </Router>
    </>
  )
}

export default App