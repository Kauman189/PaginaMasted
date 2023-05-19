$(document).ready(function() {
  var index = 0;
  var projects = $('#projects .project');
  var numProjects = projects.length;
  var intervalId = setInterval(changeProject, 5000);
  var animating = false;

  function changeProject() {
    if (animating) {
      return;
    }
    animating = true;
    
    // Ocultamos el proyecto actual
    var currentProject = projects.eq(index);
    currentProject.fadeOut(500);

    // Incrementamos el índice y lo ajustamos si es necesario
    index++;
    if (index >= numProjects) {
      index = 0;
    }

    // Mostramos el siguiente proyecto
    var nextProject = projects.eq(index);
    nextProject.fadeIn(500, function() {
      animating = false;
    });

    // Cambiamos el título
    $('#projects h2').text(nextProject.find('img').attr('alt'));
  }

  // Agregamos eventos a las flechas
  $('#projects .arrow-left').click(function() {
    if (animating) {
      return;
    }
    animating = true;
    clearInterval(intervalId);
    var currentProject = projects.eq(index);
    currentProject.fadeOut(500);

    index--;
    if (index < 0) {
      index = numProjects - 1;
    }

    var nextProject = projects.eq(index);
    nextProject.fadeIn(500, function() {
      animating = false;
    });

    $('#projects h2').text(nextProject.find('img').attr('alt'));

    intervalId = setInterval(changeProject, 5000);
  });

  $('#projects .arrow-right').click(function() {
    if (animating) {
      return;
    }
    animating = true;
    clearInterval(intervalId);
    var currentProject = projects.eq(index);
    currentProject.fadeOut(500);

    index++;
    if (index >= numProjects) {
      index = 0;
    }

    var nextProject = projects.eq(index);
    nextProject.fadeIn(500, function() {
      animating = false;
    });

    $('#projects h2').text(nextProject.find('img').attr('alt'));

    intervalId = setInterval(changeProject, 5000);
  });
});
