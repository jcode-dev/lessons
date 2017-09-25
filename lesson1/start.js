
$.ajax({
    url: "/home/toolbox.xml",
    type:'GET',
    timeout:10000,
}).done(function(data) {
  // setup Toolbox
  Code.initBlockly(data);
}).fail(function(XMLHttpRequest, textStatus, errorThrown) {
  alert("読み込みに失敗しました。");
});

function lesson1 () {
  console.log("lesson1");
  inst = new JCODE.instruction('レッスン１：オブジェクト');
  //inst.add('オブジェクトを自由にうごかそう。')
  //inst.add('準備ができたら<button onclick="lesson2();">次にすすむ</button>を押してください。')
 }

function lesson2 () {
  console.log("lesson1");
  inst = new JCODE.instruction('レッスン2：オブジェクト');
  inst.add('オブジェクトを自由にうごかそう。')
  inst.add('準備ができたら<button onclick="lesson2();">次にすすむ</button>を押してください。')
  var obj = new JCODE.object3d("sphere");
  for (var count = 0; count < 4; count++) {
    obj.moveForward(10);
    obj.turnRight(90);
  }
}
$(function(){
  lesson1();
});
