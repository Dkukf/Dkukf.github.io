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

// --------------- MOBILE NAVIGATION ---------------

// This function toggles the mobile navigation menu by adding/removing the
// 'active' class from the banner_nav element.
function toggleMobileMenu() {
  const bannerNav = document.getElementById('banner_nav');
  const toggleButton = document.querySelector('.mobile-menu-toggle');
  
  // Toggle active class on both nav and button
  bannerNav.classList.toggle('active');
  toggleButton.classList.toggle('active');
  
  // Toggle aria-expanded for accessibility
  const isOpen = bannerNav.classList.contains('active');
  toggleButton.setAttribute('aria-expanded', isOpen);
} // toggleMobileMenu function

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const bannerNav = document.getElementById('banner_nav');
  const mobileToggle = document.querySelector('.mobile-menu-toggle');
  
  if (bannerNav && mobileToggle && bannerNav.classList.contains('active')) {
    if (!bannerNav.contains(event.target) && !mobileToggle.contains(event.target)) {
      bannerNav.classList.remove('active');
      mobileToggle.classList.remove('active');
      mobileToggle.setAttribute('aria-expanded', false);
    }
  }
});

// --------------- AUTO-UPDATE COPYRIGHT YEAR ---------------

// This function updates the copyright year to the current year
function updateCopyrightYear() {
  const copyrightElement = document.getElementById('copyright_logo');
  if (copyrightElement) {
    const currentYear = new Date().getFullYear();
    copyrightElement.innerHTML = `© ${currentYear} Created by Kin Kwan Leung`;
  }
}

// --------------- CV TIMELINE GENERATOR ---------------

// Function to generate timeline HTML from data
function generateTimeline(timelineData) {
  const timelineSection = document.getElementById('cv_timeline_section');
  if (!timelineSection) return;

  let timelineHTML = `
    <div class="timeline-container">
      <div class="timeline-vertical-line"></div>
      <div class="timeline-bottom-circle"></div>`;

  timelineData.forEach((item, index) => {
    // Calculate position based on total length to keep oldest item fixed
    // The oldest item (last in reversed array) should always be on the same side
    const totalItems = timelineData.length;
    const position = (totalItems - index - 1) % 2 === 0 ? 'left' : 'right';
    // Use grey triangle for the first item in the visual timeline (top)
    const triangleType = index === 0 ? 'timeline-top-triangle' : 'timeline-intersection-triangle';
    const firstClass = index === 0 ? ' timeline-first-item' : '';
    
    timelineHTML += `
      <div class="timeline-item timeline-item-${position}${firstClass}">
        <div class="timeline-horizontal-line"></div>
        <div class="${triangleType}"></div>
        <div class="timeline-content">
          <h3 class="timeline-title">${item.title}</h3>
          ${item.date ? `<p class="timeline-date">${item.date}</p>` : ''}
          <p class="timeline-text">${item.text}</p>
        </div>
      </div>`;
  });

  timelineHTML += `
    </div>`;

  timelineSection.innerHTML = timelineHTML;
}

// Function to load timeline data from embedded JSON
function loadTimelineData() {
  try {
    const timelineDataElement = document.getElementById('timeline-data');
    if (timelineDataElement) {
      const timelineData = JSON.parse(timelineDataElement.textContent);
      // Reverse the array so the first item appears at the bottom
      const reversedData = timelineData.reverse();
      generateTimeline(reversedData);
    } else {
      console.error('Timeline data element not found');
    }
  } catch (error) {
    console.error('Error parsing timeline data:', error);
  }
}

// Run functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  updateCopyrightYear();
  loadTimelineData();
});
