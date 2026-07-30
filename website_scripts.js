// This JavaScript file was created by Kin Kwan Leung on the 11th of September
// 2021 for the personal website of Kin Kwan Leung.

// --------------- EXCLUSIVELY FOR MAIN WEBPAGE ---------------

// This function adds the .active class and removes the .inactive class from
// the about_me_div, which causes a transition for the div and makes the div
// visible.
function openAboutMe() {
  const aboutMeDiv = document.getElementById('about_me_div');
  if(aboutMeDiv.classList.contains('inactive'))
    aboutMeDiv.classList.remove('inactive');
  aboutMeDiv.classList.add('active');
} // openAboutMe function

// This function changes the colour of the chevron on the chevron_button by
// changing the image from Chevron_yellow.png to Chevron_white.png.
function changeToWhiteChevron() {
  const chevronImage = document.getElementById('chevron_image');
  chevronImage.src = "./Images/Chevron_white.png";
} // changeToWhiteChevron function

// This function changes the colour of the chevron on the chevron_button by
// changing the image from Chevron_yellow.png to Chevron_white.png.
function changeToYellowChevron() {
  const chevronImage = document.getElementById('chevron_image');
  chevronImage.src = "./Images/Chevron_yellow.png";
} // changeToYellowChevron function

// This function adds the .inactive class and removes the .active class from
// the about_me_div, which causes a transition for the div and makes the div
// invisible.
function closeAboutMe() {
  const aboutMeDiv = document.getElementById('about_me_div');
  aboutMeDiv.classList.remove('active');
  aboutMeDiv.classList.add('inactive');
} // closeAboutMe function

// --------------- EXCLUSIVELY FOR PROJECTS WEBPAGE ---------------

// This function replaces the embed tags for the projects page when a
// particular project link has been clicked on so that the selected PDF is
// displayed to the user. It also scrolls the browser of the user to the PDF.
function openProjectsPDFViewer(givenViewerId, givenPDFSource) {
  clearProjectsPDFViewer(givenViewerId);
  const givenViewer = document.getElementById(givenViewerId);
  const givenViewerEmbedId = givenViewerId + '_embed';
  const givenViewerEmbed = document.getElementById(givenViewerEmbedId);
  const cloneViewerEmbed = givenViewerEmbed.cloneNode(true);
  cloneViewerEmbed.setAttribute('src', givenPDFSource);
  givenViewerEmbed.parentNode.replaceChild(cloneViewerEmbed, givenViewerEmbed);
  givenViewer.classList.remove('inactive');
  givenViewer.classList.add('active');
  setTimeout(function() { givenViewer.scrollIntoView({behavior: 'smooth' })},
             700);
} // openProjectsPDFViewer function

// This function is called by the openProjectsPDFViewer function in order to
// clear all the existing PDFs from view, making the webpage less cluttered.
// The function does not clear the PDF where the new selected PDF will appear.
function clearProjectsPDFViewer(givenViewerId) {
  // ----- UPDATE THIS AS MORE PROJECTS ARE COMPLETED -----
  const projectsPDFViewerList = ['first_viewer', 'second_viewer',
                                 'third_viewer'];
  for(let index = 0; index < projectsPDFViewerList.length; index++)
  {
    if(givenViewerId !== projectsPDFViewerList[index])
    {
      const viewerToClear
      = document.getElementById(projectsPDFViewerList[index]);
      viewerToClear.classList.remove('active');
      viewerToClear.classList.add('inactive');
    } // if
  } // for
} // clearProjectsPDFViewer function
