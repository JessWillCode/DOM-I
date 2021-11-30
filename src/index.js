const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('project wired!')

//VARIABLES
const navLinks = document.querySelectorAll('nav a');

const logoPic = getElementById('logo-img');

const ctaTextHeadline = getElementByTagName('h1');

const ctaTextButton = getElementByTagName('button');

const ctaImg = getElementById('cta-img');

const featuresHeading = document.querySelector('.text-content h4:nth-of-type(1)');

const featuresText = document.querySelector('.text-content p:nth-of-type(1)');

const aboutHeading = document.querySelector('.text-content h4:nth-of-type(2)');

const aboutText = document.querySelector('.text-content h4:nth-of-type(2)');

const middleImage = document.querySelector('#middle-img');

const servicesHeading = document.querySelector('.text-content h4:nth-of-type(3)');

const servicesText = document.querySelector('.text-content h4:nth-of-type(3)');

const productHeading = document.querySelector('.text-content h4:nth-of-type(4)');

const productText = document.querySelector('.text-content h4:nth-of-type(4)');

const visionHeading = document.querySelector('.text-content h4:nth-of-type(5)');

const visionText = document.querySelector('.text-content h4:nth-of-type(5)');

const contactHeading = document.querySelector('.contact h4');

const contactAddress = document.querySelector('.contact p:nth-of-type(1)');

const contactPhone = document.querySelector('.contact p:nth-of-type(2)');

const contactEmail = document.querySelector('.contact p:nth-of-type(3)');

const footerLink = document.querySelector('.footer a');

//add italic class to nav anchors
navLinks.className = 'italic';

//#logo-img needs src 
logoPic.src = 'http://localhost:9000/img/logo.png';

//.cta-text h1 needs .textContent = 'DOM is Awesome'
ctaTextHeadline.textContent = 'DOM is Awesome';

//.cta-text button needs .textContent = 'Get Started'
ctaTextButton.textContent = 'Get Started';

//#cta-img needs src 
ctaImg.src = 'http://localhost:9000/img/cta.png';

//.text-content(1) h4 and p needs .textContent (Features)
featuresHeading.textContent = 'Features';

featuresText.textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//.text-content(2) h4 and p needs .textContent (About)
aboutHeading.textContent = 'About';

aboutText.textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi.Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//#middle-img needs src
middleImage.src = 'http://localhost:9000/img/accent.png';
//BOTTOM CONTENT

//.text-context(3) h4 and p need .textContent (Services)
servicesHeading.textcontent = 'Services';

servicesText.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi.Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//.text-context(4) h4 and p need .textContent (Product)
productHeading.textContent = 'Product';

productText.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi.Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//.text-context(5) h4 and p need .textContent (Vision)
visionHeading.textContent = 'Vision';

visionText.textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi.Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

//CONTACT CONTENT

//.contact h4 needs .textContent = 'Contact'
contactHeading.textContent = 'Contact';

//.contact (address) .textContent = '123 Way 456 Street Somewhere, USA'
contactAddress.textContent = '123 Way 456 Street Somewhere, USA';
//.contact (phone) .textContent = '1 (888) 888-8888'
contactPhone.textContent = '1 (888) 888-8888';
//.contact (email) .textContent = 'sales@greatidea.io'
contactEmail.textContent = 'sales@greatidea.io';
//FOOTER

//.footer a .className = 'bold' 
footerLink.className = 'bold';
//.footer a needs .textContent = 'Copyright Great Idea! 2021'
footerLink.textContent = 'Copyright Great Idea! 2021';