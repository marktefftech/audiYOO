var ctx = window.AudioContext || window.webkitAudioContext;
var audioContext;
var gainExample, gainSlider, gainNode;

window.onload = function () {
  //GET audio elements
  var player = document.getElementById("audioplayer");
  var gainSlider = document.getElementById("gainSlider");

  var ctx = new AudioContext();

  var source = ctx.createMediaElementSource(ctx);

  source.connect(ctx.destination);

  //build audio graph
  buildAudioGraph();


  // input listener on the gain slider
  gainSlider.oninput = function(evt){
  gainNode.gain.value = evt.target.value;



  };
}


function buildAudioGraph() {
    // create source and gain node
    var gainMediaElementSource = audioContext.createMediaElementSource(gainExample);
    gainNode = audioContext.createGain();

    // connect nodes together
    gainMediaElementSource.connect(gainMediaElementSource);
    gainNode.connect(audioContext.destination);
}
