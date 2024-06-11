import one from '../assets/svg/projects/one.svg'
import twelve from '../assets/svg/projects/twelve.svg'
import ten from '../assets/svg/projects/ten.svg'
import four from '../assets/svg/projects/four.svg'
import five from '../assets/svg/projects/five.svg'
import six from '../assets/svg/projects/six.svg'
import seven from '../assets/svg/projects/seven.svg'
import sample from '../assets/svg/projects/sample.svg'
import three from '../assets/svg/projects/three.svg'


export const projectsData = [
    {
        id: 1,
        projectName: 'Blog App',
        projectDesc: 'This project aims to build a Blog Application where users can post and comment on a blog with a build in moderation service automatically remove\'s the comment "Orange".',
        tags: ['React NodeJS', 'Docker', 'Microservices', 'kubernetes'],
        code: 'https://github.com/ShravyaKudlu/blog_using_microservice_cloud',
        demo: 'https://drive.google.com/file/d/1LO1UOx5CLLkwRuhPprcgxpFv-RIsuFYB/view?usp=sharing',
        image: one
    },
    {
        id: 2,
        projectName: 'Schrödinger Inc.',
        projectDesc: 'In Schrödinger Hackathon I was recognized for creating a practical application showcasing chemical elements and their perturbations. This app, featuring a demo page, served as a valuable tool for chemists, drawing inspiration from industry insights.',
        tags: ['Django', 'Python', 'RDKit'],
        code: 'https://github.com/ShravyaKudlu/Hackathon_Schrodingers',
        demo: 'https://drive.google.com/file/d/1Lshf80X2BBqtBoloJRx1uai_JiPcCnLe/view?usp=sharing',
        image: twelve
    },
    {
        id: 3,
        projectName: 'DUO Authentication App',
        projectDesc: 'A two-step verification system similar to DUO, featuring an authenticator and verifier with strong random number generation. The verifier disconnects after the initial key exchange, boosting security and improving communication efficiency.',
        tags: ['Java', 'Linux', 'Tomcat'],
        code: 'https://github.com/ShravyaKudlu/IHLP-A2.2',
        demo: 'https://drive.google.com/file/d/1od0DZ77bBnVoOxpPx2yamIPL9oD4diSe/view?usp=sharing',
        image: ten
    },
    {
        id: 4,
        projectName: 'AWS S3 Bucket',
        projectDesc: 'Implemented Amazon AWS S3 replication with strict 5-second request fulfillment for local and remote access. Maintained memory efficiency within a 2MB heap. Ensured data security by avoiding local storage of remotely fetched files.',
        tags: ['Java', 'CMake','Linux'],
        code: 'https://github.com/ShravyaKudlu/IHLP-A3',
        demo: 'https://drive.google.com/file/d/1W7nn3VtQA3WWG6V3fLTk4nSEtxmA3FW0/view?usp=sharing',
        image: four
    },
    {
        id: 5,
        projectName: 'Rent A car',
        projectDesc: 'A simple project to understand SQL queries and structure of relational databases',
        tags: ['MySQL','DBeaver', 'Django'],
        code: 'https://github.com/ShravyaKudlu/DMSProject',
        demo: 'https://drive.google.com/file/d/1MXCmE9oMlITXCgEuFmcMIaUpuieZmNYs/view?usp=sharing',
        image: six
    },
    {
        id: 6,
        projectName: 'E-Commerce App',
        projectDesc: 'A Simple E-commerce application',
        tags: ['React', 'Django', 'AWS Amplify'],
        code: 'https://github.com/myNJITprojects/WebCommerce_IS_601_103',
        demo: 'https://github.com/myNJITprojects/WebCommerce_IS_601_103',
        image: five
    },
    {
        id: 7,
        projectName: 'Docker Prototype',
        projectDesc: 'A simple Docker Prototype to learn all docker commands',
        tags: ['Docker'],
        code: 'https://github.com/ShravyaKudlu/dockerprototype',
        demo: 'https://github.com/ShravyaKudlu/dockerprototype',
        image: seven
    },
    {
        id: 8,
        projectName: 'Sentiment Analysis of Reviews',
        projectDesc: 'Analyzed customer reviews on womens E-Commerce platform using multinomial naive bayes',
        tags: ['python', 'Jupyter'],
        code: 'https://drive.google.com/file/d/12G2pslEaKY2Xf6yIs5knt9-ay6ryjsK_/view?usp=sharing',
        demo: 'https://drive.google.com/file/d/12G2pslEaKY2Xf6yIs5knt9-ay6ryjsK_/view?usp=sharing',
        image: three
    },
    {
        id: 9,
        projectName: 'Detect Heart Rate using Image Processing App',
        projectDesc: 'Developed a camera-based system to extract heart rate from facial skin color variations. Implemented Fast Fourier Transformation, Principal Component Analysis, and Independent Component Analysis algorithms for accurate and noise-free results.',
        tags: ['python', 'Jupyter'],
        code: 'https://drive.google.com/file/d/1Pij_FYnSC1yA55nyCx8mscfo4nBKjhLs/view?usp=sharing',
        demo: 'https://drive.google.com/file/d/1Pij_FYnSC1yA55nyCx8mscfo4nBKjhLs/view?usp=sharing',
        image: sample
    },
]


