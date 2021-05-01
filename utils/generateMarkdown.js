// A function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # **${data.title}**

  # **License:**
  ### ${data.license}
  ![License:${data.license}](https://img.shields.io/badge/License-${data.license}-yellow.svg)

  # **Table of Contents**

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[Guidelines](#guidelines)

  *[Testing](#testing)
  
  # **Description**
  ### ${data.Description}
 
  
  # **Installation**
  ### ${data.Installation}
  
  
  # **Usage**
  ### ${data.Usage}
  
   
  # **Guidelines**
  ### ${data.Guidelines}
 
  
  # **Testing**
  ### ${data.Testing}
  


  # **License:**
  

  # **Contributors**
  ### ${data.Contributing}

  # **Email**
  If you have any questions please email me at: [mailto](avmancillas@gmail.com)
  

`;}

module.exports = generateMarkdown;
