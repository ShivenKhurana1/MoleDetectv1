# DubHacks2023

## Inspiration
Envision a world where individuals, regardless of their location or financial circumstances, can effortlessly capture an image of a skin lesion and, in mere moments, gain access to precise, timely, and potentially life-saving insights. Our app stands as a beacon of hope, a bridge that connects those who require medical attention with the care they so rightly deserve, especially in the realm of skin lesions. It transcends boundaries, making quality dermatological guidance accessible to all, and in doing so, it becomes a true game-changer in the world of healthcare. Our innovative solution detects skin lesions and empowers users with invaluable information, transforming how we approach skin health and fostering a sense of inclusivity that knows no bounds.

## What It Does
Our app boasts an intuitive home screen design, straightforward navigation, and a color-blind-friendly theme. Our app harnesses the potential of a meticulously trained machine learning algorithm that was trained with an extensive dataset of over 2000 skin lesion images. Drawing upon this vast database, the algorithm carefully assesses the input image, dissecting it pixel by pixel.

Employing this data-driven approach, the algorithm proficiently ascertains whether the captured skin lesion falls under the categories of 'malignant' or 'benign.' But it doesn't stop there. It goes a step further, identifying the specific type of skin lesion from among six potential options, including Basal Cell Carcinoma, Squamous Cell Carcinoma, Malignant Melanoma, Melanocytic Nevus of Skin, Actinic Keratosis, and Seborrheic Keratosis.

This intricate analysis is carried out with remarkable precision, ensuring that our users receive accurate and actionable insights into their skin health, aligning our app with the highest standards of dermatological care.

-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

## How We Built It
The project has three main components: UI/UX design, front-end development, and the machine learning algorithm. The UI design was done in Figma in order to develop a sleek and user-friendly design. The UI design is then merged with the front-end development which handles how the user interacts with buttons, dropdowns, camera, etc. The front end was done using React Native on Xcode in order to see real-time development with an iPhone emulator. The final part is the machine learning algorithm that was trained using 1000+ pictures over several hours. Once that was set, it was merged with the rest of the project where once the user takes a picture of their affected area, the ML can come into play. The Machine Learning algorithm was developed using Google Collab which runs on Google Cloud. The collaboration and documentation of the project was done using GitHub. 

## Challenges When Building the App
- ML training in terms of GPU and RAM usage
- Designing it to be user-friendly (fit the theme, color-blind friendly, easy navigation)

## Accomplishments


## Future Plans


##How to run frontend:
- clone repo to local
- cd into Test-2/my-app
- run the following commands:
    - npm install
    - npm run ios
- prerequisites: have xcode to emulate an ios device, download expo go and scan the qr code generated to run the app on your phone