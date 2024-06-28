import React, { useState } from "react"
import { useEffect } from "react"
import ImagePage from "./pages/ImagePage/ImagePage"
import DisplayInfoPage from "./pages/DisplayInfoPage/DisplayInfoPage"
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
import image1 from './assets/image1.avif'
import image2 from './assets/image2.avif'
import image3 from './assets/image3.avif'
import image4 from './assets/image4.avif'
import image5 from './assets/image5.avif'
import image6 from './assets/image6.avif'
import image7 from './assets/image7.avif'
import image8 from './assets/image8.avif'
import image9 from './assets/image9.avif'
import image10 from './assets/image10.avif'
import image11 from './assets/image11.avif'
import image12 from './assets/image12.avif'
import image13 from './assets/image13.avif'
import image14 from './assets/image14.avif'
import image15 from './assets/image15.avif'
import image16 from './assets/image16.avif'
import image17 from './assets/image17.webp'
import image18 from './assets/image18.webp'
import image19 from './assets/image19.avif'
import image20 from './assets/image20.avif'
import image21 from './assets/image21.jpg'
import voiture1 from './assets/voiture1.jpg'
import voiture2 from './assets/voiture2.jpg'
import voiture3 from './assets/voiture3.jpg'
import voiture4 from './assets/voiture4.jpg'
import voiture5 from './assets/voiture5.jpg'
import voiture6 from './assets/voiture6.jpg'
import voiture7 from './assets/voiture7.jpg'
import voiture8 from './assets/voiture8.jpg'
import voiture9 from './assets/voiture9.jpg'
import voiture10 from './assets/voiture10.webp'
import women1 from './assets/women1.webp'
import women2 from './assets/women2.webp'
import women3 from './assets/women3.webp'
import women4 from './assets/women4.webp'
import women5 from './assets/women5.avif'
import women6 from './assets/women6.avif'
import women7 from './assets/women7.jpg'
import women8 from './assets/women8.jpg'
import women9 from './assets/women9.jpg'
import women10 from './assets/women10.jpg'

let initialContent = [
  {
    title : 'Éclat naturel',
    description : "Une femme noire aux cheveux bouclés et à la peau éclatante pose avec assurance. La lumière met en valeur ses traits magnifiques.",
    image : {women1},
    category : 'women' 
  },
  {
    title : 'Beauté authentique',
    description : "Une femme afro-américaine souriante, portant une tenue élégante, se tient devant un fond neutre. Sa peau est d’une beauté naturelle et rayonne de confiance",
    image : {women2},
    category : 'women' 
  },
  {
    title : 'Élégance en noir et blanc',
    description : "Une femme noire au teint riche et à la coiffure soignée pose avec grâce. L’image capture la fierté et la diversité de la beauté noire.",
    image : {women3},
    category : 'women' 
  },
  {
    title : 'Contraste subtil',
    description : "Une femme noire se tient dans un jeu de lumière douce et d’ombres délicates. Son visage est un mélange harmonieux de nuances.",
    image : {women4},
    category : 'women' 
  },
  {
    title : 'Courbes et confiance',
    description : "Une femme aux formes gracieuses et à la peau ébène regarde l’objectif avec assurance. L’image respire la confiance et la beauté naturelle.",
    image : {women5},
    category : 'women' 
  },
  {
    title : 'Éclat intemporel',
    description : "Une femme noire aux cheveux courts et à la peau impeccable pose devant un fond minimaliste. Sa beauté transcende les époques.",
    image : {women6},
    category : 'women' 
  },
  {
    title : 'Lumière douce',
    description : " Une femme noire se tient dans une lumière douce, créant un contraste subtil entre sa peau et l’arrière-plan. L’image est empreinte de sérénité.",
    image : {women7},
    category : 'women' 
  },
  {
    title : 'Nuances de beauté',
    description : "Une femme noire aux yeux expressifs et à la peau douce pose avec élégance. L’image célèbre la diversité et la singularité.",
    image : {women8},
    category : 'women' 
  },
  {
    title : 'Élégance classique',
    description : "Une femme noire porte un col roulé noir et regarde l’objectif avec une grâce intemporelle. Sa beauté est à la fois simple et captivante.",
    image : {women9},
    category : 'women' 
  },
  {
    title : 'Fierté et force',
    description : " Une femme noire aux cheveux naturels et à la peau lumineuse affiche une fierté indéniable. L’image respire la force et la beauté authentique.",
    image : {women10},
    category : 'women' 
  },
  {
    title : 'Élégance Florale en Suspension',
    description : "Une composition murale en trois dimensions mêlant des formes géométriques blanches et des fleurs stylisées aux teintes de rose et de pourpre",
    image : {image1},
    category : 'floor' 
  },
  {
    title : ' Épanouissement serein du nénuphar',
    description : " Un unique nénuphar rose émerge gracieusement au-dessus de la surface de l’eau, entouré d’une mosaïque de nénuphars verts flottants. La mise au point douce sur la fleur contre l’arrière-plan flou met en évidence sa beauté délicate et crée une atmosphère paisible. Le jeu subtil de lumière et d’ombre sur les pétales et les feuilles ajoute de la profondeur et de l’intérêt à cette scène aquatique sereine.",
    image : {image2},
    category : 'floor' 
  },
  {
    title : 'Élégance printanière',
    description : "L’image présente une collection de délicates fleurs blanches de printemps avec des feuilles vertes, disposées sur un tissu gris texturé. Une main apparaît dans le coin inférieur gauche, suggérant l’action d’arranger ou d’admirer les fleurs. Des pétales et des feuilles supplémentaires sont dispersés autour, contribuant à une composition naturelle et sereine qui célèbre la beauté de la flore printanière.",
    image : {image3},
    category : 'floor' 
  },
  {
    title : 'Déclin Floral en Teintes Sombres',
    description : "Une grappe de fleurs d’hortensia aux pétales multicolores, variant du rose au violet, émerge d’un fond sombre et flou. Le contraste saisissant souligne la beauté délicate et le déclin naturel des fleurs.",
    image : {image4},
    category : 'floor' 
  },
  {
    title : 'Élégance Florale en Simplicité',
    description : "Une fleur délicate aux pétales roses et cœur saillant se dresse gracieusement sur une tige verte, contrastant avec un fond neutre. Sa simplicité évoque la beauté naturelle et l’éphémère.",
    image : {image5},
    category : 'floor'
  },
  {
    title : 'Harmonie Végétale en Intérieur',
    description : " Une composition minimaliste et élégante de vases variés sur une console moderne. Les vases contiennent des branches fleuries et feuillues, ajoutant une touche naturelle et vivifiante à l’espace épuré aux tons pastel.",
    image : {image6},
    category : 'floor' 
  },
  {
    title : 'Sérénité Florale',
    description : "Une fleur de lotus rose émerge élégamment d’un étang sombre, ses pétales délicats captent la lumière, contrastant avec les feuilles vert foncé flottantes. Symbole de pureté et de beauté, elle offre un spectacle naturel apaisant et méditatif.",
    image : {image7},
    category : 'floor' 
  },
  {
    title : 'Floraison Printanière',
    description : "Des branches d’arbre sinueuses se détachent sur un ciel bleu clair, ornées de fleurs blanches et roses épanouies. La juxtaposition des pétales délicats contre l’écorce sombre crée une toile naturelle, capturant l’essence du renouveau printanier.",
    image : {image8},
    category : 'floor' 
  },
  {
    title : 'Sérénité Aquatique',
    description : " Une fleur de lotus rose éclatante repose sur l’eau calme, accompagnée d’une feuille verte. Les gouttes d’eau perlent délicatement sur les pétales et la feuille, reflétant une tranquillité naturelle et une beauté simple.",
    image : {image9},
    category : 'floor' 
  },
  {
    title : 'Épanouissement en Suspension',
    description : " Une fleur blanche aux pétales délicats et effilés suspendue dans l’air, avec des étamines saillantes et un pistil proéminent. Sa tige rougeâtre contraste avec la pureté des pétales, capturant une beauté éphémère dans un moment de floraison intemporelle.",
    image : {image10},
    category : 'floor' 
  },
  {
    title : 'Réflexion Sereine',
    description : " Un élégant bouquet de pétales blancs entoure un cœur de pistils rouges. La fleur repose sur une surface réfléchissante, créant une composition sereine.",
    image : {image11},
    category : 'floor' 
  },
  {
    title : 'Élégance Florale Pourpre',
    description : "Une tige d’orchidée pourpre se détache sur un fond sombre. Ses six fleurs délicates, aux pétales veloutés et au cœur sombre, s’épanouissent en une gracieuse ascension. Cette image capture la beauté naturelle et la grâce de l’orchidée, symbolisant luxe et sophistication.",
    image : {image12},
    category : 'floor' 
  },
  {
    title : 'Éclat Floral',
    description : " Une fleur rose vif se détache sur un fond blanc épuré. Ses pétales délicatement superposés s’épanouissent en une forme ronde et pleine, entourée de feuilles vertes lustrées. Cette image capture la beauté simple mais saisissante d’une floraison en parfait état, symbolisant la croissance et le renouveau.",
    image : {image13},
    category : 'floor' 
  },
  {
    title : 'Rosée Matinale sur les Astres Roses',
    description : "Une image captivante montrant des asters roses vifs, leurs pétales délicats parsemés de gouttes de rosée scintillantes. Le contraste entre les jaunes lumineux des centres et le rose profond crée un spectacle naturel fascinant, souligné par la verdure floue en arrière-plan.",
    image : {image14},
    category : 'floor' 
  },
  {
    title : 'Rose délicate aux teintes pastel',
    description : "Cette image met en scène une unique rose, dont les couleurs s’estompent doucement du jaune pâle au rose profond. Elle se détache sur un fond bleu clair, soulignant sa beauté et sa simplicité.",
    image : {image15},
    category : 'floor' 
  },
  {
    title : 'Rose en fleur',
    description : "Une rose rose en pleine floraison, mise en valeur par un arrière-plan noir. La délicatesse des pétales contraste avec la noirceur de l’arrière-plan, créant une image élégante et simple qui capture la beauté naturelle de la rose.",
    image : {image16},
    category : 'floor' 
  },
  {
    title : 'Éclat Floral ',
    description : "Une fleur orange vif avec des pétales dégradés captivant l’œil, centrée sur un cœur brun foncé et texturé. Le contraste saisissant avec le fond vert flou met en valeur la beauté naturelle et la délicatesse de la flore.",
    image : {image17},
    category : 'floor' 
  },
  {
    title : 'Éclat Printanier',
    description : "Un champ luxuriant de tulipes multicolores s’étend à perte de vue, offrant un spectacle vibrant de jaune, rouge, orange et blanc. Ces fleurs symbolisent l’arrivée du printemps et évoquent la renaissance de la nature.",
    image : {image18},
    category : 'floor' 
  },
  {
    title : 'Élégance Éphémère ',
    description : "Une rose blanche en pleine floraison, capturée dans une lumière douce, ses pétales délicats s’enroulant en un cœur complexe et harmonieux. Symbole de pureté et d’amour, elle évoque la beauté fragile et éphémère de la nature.",
    image : {image19},
    category : 'floor' 
  },
  {
    title : 'Fleur jaune vibrante',
    description : " L’image montre une fleur jaune éclatante avec une structure centrale rouge-orangé, probablement un stigmate, entourée de fleurs floues roses et rouges. La mise au point sélective met en évidence les détails délicats de la fleur et ses couleurs vives, la faisant ressortir sur l’arrière-plan doux.",
    image : {image20},
    category : 'floor' 
  },
  {
    title : 'Clair de Lune Floral',
    description : "Une scène nocturne paisible capturant des fleurs de cosmos épanouies sous un ciel étoilé, dominé par une lune pleine et lumineuse. La combinaison du ciel nocturne et des fleurs crée une atmosphère sereine et contemplative, invitant à la réflexion sur la beauté naturelle.",
    image : {image21},
    category : 'floor' 
  },
  {
    title : 'Noir Velocity',
    description : " La photo montre une voiture de sport noire élégante avec un aileron arrière proéminent et des roues distinctives à bordure rouge, sur un fond sombre. Le design de la voiture présente des lignes fluides et une forme aérodynamique, mettant en évidence sa nature haute performance.",
    image : {voiture1},
    category : 'car' 
  },
  {
    title : 'Rouge Vitesse',
    description : "La photo montre une voiture de sport rouge au design élégant, avec des lignes aérodynamiques proéminentes, des phares angulaires et des jantes noires. Le véhicule est positionné sur un fond sombre, mettant en évidence sa couleur vibrante et son style agressif. Cette image est intéressante car elle présente l’esthétique dynamique et l’attrait luxueux de la voiture",
    image : {voiture2},
    category : 'car' 
  },
  {
    title : 'Élégance en Mouvement',
    description : " La photo montre une voiture de sport moderne au design élégant, avec une carrosserie blanche agrémentée d’accents noirs et rouges. La forme aérodynamique de la voiture, son diffuseur arrière proéminent et ses feux arrière distinctifs la rendent visuellement frappante. Cette image pourrait être pertinente pour des discussions sur la conception automobile ou pour les passionnés de voitures.",
    image : {voiture3},
    category : 'car' 
  },
  {
    title : 'Élégance et puissance',
    description : "Cette image présente une voiture de sport noire et élégante, dotée d’une finition brillante. Sa position angulaire met en évidence son design aérodynamique et son style agressif. Les lignes modernes et les roues haute performance suggèrent la vitesse et le luxe, ce qui la rend intéressante pour les passionnés d’automobiles ou ceux qui s’intéressent à la conception de véhicules de pointe.",
    image : {voiture4},
    category : 'car' 
  },
  {
    title : 'Élégance Moderne en Mouvement',
    description : "Une voiture de sport blanche au design futuriste, avec des lignes épurées et des jantes noires à détails rouges, se détache sur un fond sombre. L’arrière du véhicule présente des feux arrière rouges distinctifs et une double sortie d’échappement, symbolisant puissance et luxe.",
    image : {voiture5},
    category : 'car' 
  },
  {
    title : 'Éclat Urbain',
    description : "Une voiture de couleur vert lime se distingue nettement au premier plan, avec une mise au point précise sur sa façade et ses jantes élégantes. L’arrière-plan flou révèle des bâtiments urbains, évoquant une scène de ville dynamique.",
    image : {voiture6},
    category : 'car' 
  },
  {
    title : 'Électrique Moderne',
    description : "Un véhicule électrique blanc est connecté à une borne de recharge, illustrant la technologie propre et l’innovation en matière de transport. L’image montre une solution durable, soulignant l’importance des énergies renouvelables dans la réduction de l’empreinte carbone.",
    image : {voiture7},
    category : 'car' 
  },
  {
    title : 'Électrique Urbaine',
    description : " Une voiture électrique jaune et verte est branchée à une station de recharge. Elle est garée sur un parking, entourée de bâtiments modernes avec des façades en verre, sous un ciel nocturne éclairé par des lumières urbaines.",
    image : {voiture8},
    category : 'car' 
  },
  {
    title : 'Évasion Rurale en Voiture Classique”',
    description : "Une voiture classique de couleur verte stationnée sur un chemin de terre, avec des montagnes majestueuses et un ciel nuageux dramatique en arrière-plan. L’image évoque un sentiment d’aventure et d’exploration dans la nature sauvage.",
    image : {voiture9},
    category : 'car' 
  },
  {
    title : 'Élégance Moderne en Noir',
    description : " Une voiture sportive noire avec des lignes épurées et un design aérodynamique se détache sur un fond sombre. Les jantes rouges contrastent avec la carrosserie noire, accentuant son allure sophistiquée et puissante.",
    image : {voiture10},
    category : 'car' 
  },
  {
    title : 'La sensualliter',
    description : "Une femme sensuelle est élégante, charismatique, et émane une aura de confiance et de mystère. Son allure et son comportement captivent, éveillant les sens et suscitant l'admiration.",
    image : {user7},
    category : 'women' 
  },
  {
    title : 'Regard provocateur',
    description : "Une femme au regard provocateur possède des yeux perçants, pleins d'audace et de défi. Son regard intense capte l'attention, exprimant à la fois séduction et assurance.",
    image : {user6},
    category : 'women' 
  },
  {
    title : 'Beauté Indienne',
    description : "Une femme avec une beauté indienne a des traits délicats, des cheveux noirs brillants, une peau dorée, des yeux expressifs, souvent ornés de bijoux traditionnels et vêtue de tenues colorées et élégantes.",
    image : {user5},
    category : 'women' 
  },
  {
    title : 'La femme a la rose',
    description : "Une femme tenant des roses rouges avec un béret rouge incarne l'élégance et le romantisme, avec une touche artistique. Son style chic et son accessoire vibrant évoquent la passion et le charme.",
    image : {user4},
    category : 'women' 
  },
  {
    title : 'Femme de la nature',
    description : "Une femme de la nature est harmonieuse, connectée à la terre, avec une allure simple et sereine. Elle préfère les vêtements naturels, aime les plantes, et vit en symbiose avec son environnement.",
    image : {user3},
    category : 'women' 
  },
  {
    title : 'Harmonie avec la prairie',
    description : "Une femme en harmonie avec la prairie est sereine, respire la liberté et la paix. Sa présence calme et naturelle imagelète la beauté des fleurs et l'immensité des champs verts.",
    image : {user2},
    category : 'women' 
  },
  {
    title : 'Femme aventuriere',
    description : "Une femme aventurière est audacieuse, curieuse et passionnée par l'exploration. Elle aime découvrir de nouveaux horizons, relever des défis et vivre des expériences excitantes en pleine nature.",
    image : {user1},
    category : 'women' 
  },
  {
    title : 'Miss monde',
    description : "Une Miss Monde incarne la beauté, la grâce et l'intelligence. Elle est charismatique, engagée dans des causes humanitaires, et représente une diversité culturelle avec élégance et compassion.",
    image : {user},
    category : 'women' 
  },
  {
    title : 'Lamborghini Aventador',
    description : "La Lamborghini Aventador est une supercar emblématique, connue pour son design agressif et ses performances stupéfiantes. Dotée d'un moteur V12 puissant, elle allie luxe, technologie avancée et une allure futuriste qui attire tous les regards.",
    image : {car6},
    category : 'car' 
  },
  {
    title : 'Lamborghini Huracán',
    description : "La Lamborghini Huracán est une supercar impressionnante, célèbre pour son style saisissant et ses performances exceptionnelles. Équipée d'un moteur V10, elle offre une conduite exaltante avec une accélération rapide et une maniabilité précise, tout en incarnant l'essence de la sportivité italienne.",
    image : {car5},
    category : 'car' 
  },
  {
    title : 'Lamborghini Urus',
    description : "La Lamborghini Urus est un SUV de luxe et de performance, mariant l'élégance italienne à la robustesse d'un véhicule tout-terrain. Propulsée par un moteur V8 biturbo, elle offre une conduite sportive et confortable, avec un design audacieux et des finitions haut de gamme.",
    image : {car4},
    category : 'car' 
  },
  {
    title : 'Lamborghini Sian',
    description : "La Lamborghini Sian est une hypercar hybride révolutionnaire, combinant un moteur V12 traditionnel avec une technologie hybride légère. Son design futuriste et ses performances extrêmes en font un symbole de l'innovation automobile et du luxe exclusif.",
    image : {car3},
    category : 'car' 
  },
  {
    title : 'Lamborghini Centenario',
    description : "La Lamborghini Centenario est une hypercar rare et exclusive, créée pour célébrer le centenaire du fondateur de Lamborghini, Ferruccio Lamborghini. Propulsée par un moteur V12 puissant, elle se distingue par son design aérodynamique et ses matériaux légers, représentant l'apogée de l'ingénierie et du style italien.",
    image : {car2},
    category : 'car' 
  },
  {
    title : 'Lamborghini Veneno',
    description : "La Lamborghini Veneno est une supercar rare et futuriste, inspirée des avions de chasse. Avec son moteur V12 de 6,5 litres, elle allie performances extrêmes et design agressif, en faisant un objet de désir pour les collectionneurs passionnés.",
    image : {car1},
    category : 'car' 
  },
  {
    title : 'Rose',
    description : "Les roses sont des fleurs emblématiques, appréciées pour leur beauté et leur parfum envoûtant. Disponibles dans une variété de couleurs, elles symbolisent l'amour et la passion. Leurs pétales délicats et leur forme classique en font des choix populaires pour la décoration et les cadeaux.",
    image : {floor1},
    category : 'floor' 
  },
  {
    title : 'Orchidées',
    description : "Les orchidées sont des fleurs exotiques renommées pour leur élégance et leur diversité de formes et de couleurs. Leurs pétales délicats et leur longue durée de vie en font des symboles de beauté et de luxe, parfaites pour ajouter une touche raffinée à toute décoration.",
    image : {floor2},
    category : 'floor' 
  },
  {
    title : 'Tulipes',
    description : "Les tulipes sont des fleurs élégantes et vibrantes, connues pour leurs pétales lisses et leur forme distinctive en coupe. Disponibles dans une large palette de couleurs, elles évoquent le printemps et symbolisent souvent le renouveau et l'amour parfait.",
    image : {floor3},
    category : 'floor' 
  },
  {
    title : 'Lys',
    description : "Le lys est une fleur majestueuse caractérisée par ses pétales délicats et son parfum enivrant. Sa forme élégante et ses couleurs vives en font un symbole de pureté et de sophistication, souvent utilisé dans les arrangements floraux pour ajouter une touche d'élégance et de grâce.",
    image : {floor4},
    category : 'floor' 
  },
  {
    title : 'Œillets',
    description : "Les œillets sont des fleurs charmantes reconnaissables par leurs pétales dentelés et leur parfum doux. Disponibles dans une variété de couleurs, ils symbolisent souvent l'amour et l'admiration. Leur durabilité en vase en fait un choix populaire pour les bouquets et les décorations florales.",
    image : {floor5},
    category : 'floor' 
  },
  {
    title : 'Gerberas',
    description : "Les géraniums sont des fleurs lumineuses et joyeuses, reconnaissables par leurs grandes têtes florales et leurs couleurs vives comme le rouge, le rose, le jaune et l'orange. Leurs pétales rayonnants et leur longue durée de vie en vase en font des choix populaires pour égayer n'importe quel arrangement floral.",
    image : {floor6},
    category : 'floor' 
  },
  {
    title : 'Vintage',
    description : "La décoration vintage évoque les styles rétro des décennies passées, avec des meubles et des accessoires anciens ou rétro. Elle utilise des motifs et des couleurs nostalgiques pour créer une ambiance nostalgique et pleine de charme.",
    image : {deco1},
    category : 'other' 
  },
  {
    title : 'Scandinave',
    description : "La décoration scandinave se caractérise par son minimalisme fonctionnel, ses couleurs claires comme le blanc et le gris, ainsi que l'utilisation de bois naturel. Elle crée une atmosphère chaleureuse et harmonieuse avec des touches de design nordique.",
    image : {deco2},
    category : 'other' 
  },
  {
    title : 'Industriel',
    description : "La décoration industrielle s'inspire des anciens entrepôts et usines, avec des matériaux comme le métal, le béton et le bois brut. Elle privilégie les espaces ouverts, les structures apparentes et les finitions robustes pour un style urbain et authentique.",
    image : {deco3},
    category : 'other' 
  },
  {
    title : 'Minimaliste',
    description : "La décoration minimaliste se distingue par son design épuré et fonctionnel, avec des espaces dégagés, des couleurs neutres et peu d'objets décoratifs. Elle favorise la simplicité et la clarté pour créer une ambiance calme et harmonieuse.",
    image : {deco4},
    category : 'other' 
  },
  {
    title : 'Rustique',
    description : "La décoration rustique célèbre le charme et l'authenticité des intérieurs campagnards. Elle met en avant des matériaux naturels comme le bois vieilli, la pierre et le métal patiné. Les meubles sont souvent robustes et artisanaux.",
    image : {deco5},
    category : 'other' 
  },
  {
    title : 'Moderne',
    description : "La décoration moderne se caractérise par des lignes épurées, des espaces ouverts et une palette de couleurs neutres ou vives. Elle privilégie les matériaux comme le métal, le verre et le béton . ",
    image : {deco6},
    category : 'other' 
  }
]

function App() {
  
  const [contenu, setContenu] = useState(() => {
    // Récupérer les données depuis le localStorage ou utiliser initialContent
    const savedContent = localStorage.getItem('contenu');
    return savedContent ? JSON.parse(savedContent) : initialContent;
  })

  // Mettre à jour le localStorage chaque fois que contenu change
  useEffect(() => {
    localStorage.setItem('contenu', JSON.stringify(contenu));
  }, [contenu]);

  
  return (
    <>
          <Router>
            <Routes>
              <Route path="/" element={<CategoryPage setContenu={setContenu} contenu={contenu} initialContent={initialContent} />} />
              <Route path="/displayImage" element={<ImagePage setContenu={setContenu} contenu={contenu} />} />
              <Route path="/displayInformation" element={<DisplayInfoPage />} />
            </Routes>
          </Router>
    </>
  )
}

export default App