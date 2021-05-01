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
  ### Before running this app, you will need to ${data.Installation}
  
  
  # **Usage**
  ### ${data.Usage}
  
   
  # **Guidelines**
  ### To be able to use this app, ${data.Guidelines}
 
  
  # **Testing**
  ### ${data.Testing}
  


  # **License:**
  

  # **Contributors**
  ### The following contributed to this project ${data.Contributing}
  
  # **Questions**
  ### If you have any questions, contact me at {https://github.com/${data.Username}} or email me at ${data.email}

`

;}

module.exports = generateMarkdown;
