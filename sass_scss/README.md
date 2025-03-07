Sass & Scss

0. Always debugging: <br>
Write a Sass file that prints Hello world in the debug output.

1. Color variable: <br>
Write a Sass file that assigns the text color #3D3D3D to the HTML tags body and p.

2. Colors: <br>
Write a Sass file that assigns:
The text color #3D3D3D to the HTML tags body and p
The background color #6D6D6D to the HTML tags body and h2
You must use 2 Sass variables

3. Nested tag: <br>
Write a Sass file that assigns:
No margin or padding in body tags
Margin 10px to all of the p tags inside body tags
You must use nested declarations

4. Nested class: <br>
Write a Sass file that assigns:
Text color #3D3D3D to elements inside body tags
Text color #FF0000 to any elements of class .red inside body tags
You must use nested declarations

5. Nested child: <br>
Write a Sass file that assigns:
Text color #3D3D3D to elements inside body tags
Text color #FF0000 to any elements of class .red that are the first children of the body
You must use nested declarations

6. Nested hover: <br>
Write a Sass file that assigns:
Text color #FF0000 to button tags
When the user hovers over button tags, text color should change to #00FF00
You must use nested declarations

7. Nested and nested again: <br>
Write a Sass file that assigns:<br>
Font size 14px to all body tags
Font size 16px to all h1 tags inside body tags
Font size 12px to h1 tags of class .smaller inside body tags
You must use nested declarations

8. Margin mixin: <br>
Write a Sass file that assigns:<br>
Margin left and right at 10px to body tags
Margin left and right at 15px to div tags
You must use a mixin

9. Extended: <br>
Write a Sass file that assigns:<br>
Font size 12px to all tags of class .info
Text color #00FF00 to all tags of class .success and extend style of the class .info
Text color #FF0000 to all tags of class .warning and extend style of the class .info

10. Import colors: <br>
Write a Sass file that assigns:<br>
Text color $red from 10-colors.scss to the class .red
Text color $green from 10-colors.scss to the class .green
Text color $blue from 10-colors.scss to the class .blue
You must use @import

11. For each: <br>
Write a Sass file that creates a class for each name in the list $list-names and assigns the background image based on the name (example below):
You must use @import
You must use @each statement

12. Loop Headers: <br>
Write a Sass file that creates H* tags, where ‘*’ is the size of the font used.
h1 must have font size equal to 1px, h2 must have font size equal to 2px, etc.
You must create H* tags from 1 to 5
You must use @for statement