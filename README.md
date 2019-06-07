# just-another-cv 

[![Build Status](https://travis-ci.com/dredtrake/just-another-cv.svg?branch=master)](https://travis-ci.com/dredtrake/just-another-cv)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Hi there, 
this cv is free of use.
You can use it as a base and do whatever you want with it or just fill your own datas and use at it is.
The datas are separated from the model so it's pretty easy to put your own datas (the datas are all is in a json file).
The stylesheet is defined with compass, so just a little configuration from your side to change the look and feel.
The page is rendered with handlebars, and the templates are precompiled to give better performances,
if you change them you need to recompile using the command line (see below).
this page is rendered [here](http://bacasable-lab.fr/cv/)

## pre require
If you want to use the template as it is you just have to fork or download the project from this page.
If you want to add some custom changes, handlebars and compass might be required.
The project need an apache (or any other server that handle php) and a recent version of php running.
You need a google recaptcha key (if you plan to use the email function).
You need to create a file from the sample file: app/data/data.sample.json and name it: app/data/data.json then edit the content to match your needs,
same with the: app/scripts/env.sample.php and name it app/scripts/env.php that you need to edit and set your server informations

### Css
If you want to recompile the stylesheets you would need to have compass installed
then just run ```gulp sass:watch``` from the root folder (it will compile the scss file anytime you modify them)

### Templates
To build  the template open a terminal in the tools folder and just the bash script generateTemplates.sh
```./generateTemplate.sh```

## Contribute
Pull request are welcome.
This project can evolve in time.
Any feeback or sharing of your personalisation would be appreciated.
You can also offer me a drink (or a pizza!) if you get a job by using this awesome template on my [tipsmeee account](https://tipsmeee.fr/user/12)

Done with ♥