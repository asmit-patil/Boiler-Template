# Boiler-Template

# Description

This is Boiler Template for creating web-page using contentstack

# Requirements

#Nodejs

To download nodejs use this ----> https://nodejs.org/en/download/

#contentstack

You should know how to create stack and content types using contentstack.     
To know more about contentstack, Refer this link ----> https://www.contentstack.com/docs/

# Getting started

Step 1: Clone the git repository
        $ git clone https://github.com/asmit-patil/Boiler-Template.git

Step 2: Make changes in the config/default.json file by adding contentstack   
        -api-key   
        -access-token   
        -environment    

Step 3: Update route (eg: home route)    
        -add ContentTypeUID (eg: ContentTypeUID = "home")    

Step 4: Update view (eg: for getting title, use <title>{{ entry.title }}</title>)

# To install and run:

To install ----> npm install                                                                                                                                                          
To run ----> node app.js
