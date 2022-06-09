let projectIdx = 1;
showProject(projectIdx);

// Next/previous controls
function plusProject(n) {
  showProject(projectIdx += n);
}

// Thumbnail image controls
function currentProject(n) {
  showProject(projectIdx = n);
}

function showProject(n) {
  let i;
  let projects = document.getElementsByClassName("project");
  let dots = document.getElementsByClassName("dot");
  if (n > projects.length) {projectIdx = 1} 
  if (n < 1) {projectIdx = projects.length}
  for (i = 0; i < projects.length; i++) {
    projects[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" dot-active", "");
  }
  if (projects[projectIdx-1] !== undefined && dots[projectIdx-1] !== undefined) {  
    projects[projectIdx-1].style.display = "block"; 
    dots[projectIdx-1].className += " dot-active";
  }
}

window.addEventListener("keydown", function (event) {

    if (event.key !== undefined) {
        console.log(event.key);

        if (event.key == "ArrowRight") {
            plusProject(1);
        } else if (event.key == "ArrowLeft") {
            plusProject(-1);
        }

    } else if (event.which !== undefined) {
        if (event.which == 39) {
            plusProject(1);
        } else if (event.which == 37) {
            plusProject(-1);
        }

    }

});