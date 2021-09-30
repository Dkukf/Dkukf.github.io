// This JavaScript file was created by Kin Kwan Leung on the 11th of September
// 2021 for the personal website of Kin Kwan Leung.

// This function adds the .active class and removes the .inactive class from
// the about_me_div, which causes a transition for the div and makes the div
// visible.
function openAboutMe() {
  aboutMeDiv = document.getElementById('about_me_div');
  if(aboutMeDiv.classList.contains('inactive'))
    aboutMeDiv.classList.remove('inactive');
  aboutMeDiv.classList.add('active');
} // openAboutMe function

// This function changes the colour of the chevron on the chevron_button by
// changing the image from Chevron_yellow.png to Chevron_white.png.
function changeToWhiteChevron() {
  chevronImage = document.getElementById('chevron_image');
  chevronImage.src = "./Images/Chevron_white.png";
} // changeToWhiteChevron function

// This function changes the colour of the chevron on the chevron_button by
// changing the image from Chevron_yellow.png to Chevron_white.png.
function changeToYellowChevron() {
  chevronImage = document.getElementById('chevron_image');
  chevronImage.src = "./Images/Chevron_yellow.png";
} // changeToYellowChevron function

// This function adds the .inactive class and removes the .active class from
// the about_me_div, which causes a transition for the div and makes the div
// invisible.
function closeAboutMe() {
  aboutMeDiv = document.getElementById('about_me_div');
  aboutMeDiv.classList.remove('active');
  aboutMeDiv.classList.add('inactive');
} // closeAboutMe function
