
#   Forkio

ABB-Full Stack course, Step project 1 assignment. Forkio app design.
## Acknowledgements

 - [Figma Design of the project](https://www.figma.com/file/9lLwBJciU4yjDZBSnqqXSS/Forkio?type=design&node-id=0-1)



## Appendix

This project designed by 2 collaborators: Ali Ramazanov and Mirjabbar Badalov. In this project we used Gulp automation. And all designes were written with scss. 

-------------------------------------------------------------------

Designes by each collaborator -->

Mirjabbar Badalov: 

1) Design the header of the website with the top menu, including the dropdown menu for small screen resolutions.

2) Design the “People Are Talking About Fork” section

Ali Ramazanov: 

1) Design the “Revolutionary Editor” block. The buttons should resemble the ones shown in the top right corner (you can take all the SVG icons from there and download the
corresponding styles used on GitHub).

2) Design the “Here is what you get” section.

3) Design the “Fork Subscription Pricing” section. The third element in the price block should always be "highlighted" and larger than the others (not on click/hover, but
statically).

This project has 2 main tasks: gulp dev and gulp build.



Gulp Build Task: 
Clear the dist folder.


Compile SCSS files into CSS.


Add vendor prefixes to CSS properties to support the latest few versions of each browser.


Remove unused CSS code.


Concatenate all JS files into one scripts.min.js file and minify it.


Copy the minified final styles.min.css and scripts.min.js files to the dist folder.


Optimize images and copy them to the dist/img folder.


Gulp Dev Task:

Start the server and monitor changes in *.js and *.scss files in the src folder.


Upon changes, rebuild and copy the concatenated and minified files (styles.min.css and scripts.min.js) to the dist folder, and reload your HTML page.






## Authors

- [@mirjabbarbadalov](https://github.com/mirjabbarbadalov)
- [@aliramazanov](https://github.com/aliramazanov)


## To Start Our App in Your Device

To run gulp build, run the following command

```bash
  npm run build
```

To run gulp dev, run the following command

```bash
  npm run dev
```