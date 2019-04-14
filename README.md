# Building The Thames River Anglers Association Website

##Simon Fuller and Hayden Main 

###HOW TO USE

Just download the repo and check out the site!! We've worked hard so that these environmental anglers could have a good lookin platform for their brand. 

### DESCRIPTION OF PROJECT

*The Thames River Anglers Association is a hands on environmental group who aids in the protection of the species within the Thames river in London Ontario and nearing Regions. Our task has been to redesign and reconstruct their website, as it was much needed.*

Due date for midterm of the project: April 14th

Needed resources: 
-Python
-CSS
-HTML
-Sublime Text
-GitHub

### Looks of Website

*We want to ensure that viewers of the website enjoy what they're seeing, but keep it professional. We are aware the demographic is going to likely be older people, so the typography of the site should be relatively large in order to encompass that accessibility to the right groups.*

*It's not hard to see that the site views memberships and fundraising as very very important*

*Green hues with white to stay with branding identity and compliment the logo*

### JavaScript Directions

####Hamburger menu:
1. Allow the user to click the menu icon
2. Toggle the menu down, probably gonna use document query selector with the class name. Display none will have to be on the menu.
3. Provided the ideals, likely gonna need to use classList.toggle to add classes.
4. When classes are added, display block.
5. Default behaviour should allow the button to work and reclose. 

####Back to Top
1. The page is a long scroll for mobile and tablet, so a return to top button is viable.
2. User clicks button, so we will have to select that button.
3. Button triggers scroll, meaning we somehow have to obtain the height of the site window and where on the page to scroll to. The window option should work for this.
4. Scroll only happens at bottom, and goes right to the top. We need the Y axis offset and a way to set where it has to go to from the bottom. 

####Dropdown menu
1. User clicks title to toggle menu down. Select the class to add the toggle, similar to the hamburger menu.
2. Display none on the items, as we don't want them seen until the user clicks the button.
3. Toggle classes to set lists to display. Might have to use sibling options as well due to items being nested unordered lists inside of an ordered list. 
4. Default behaviour should allow user to click again and close same container.

####image gallery
1. User clicks a thumbnails to flip through imagery, will need to select said thumbnails. 
With node lists, we can select images with a forEach tag.
2. Image content needs to change between clicks. We can do this by swapping target sources.
3. Once the target changes the image source based on that, we need something to signify it's active, so toggling a classlist on for stylizing will be beneficial. 
4. Potentially add a fade in animation when swapping between images, again by toggling a class and creating the animation in CSS.