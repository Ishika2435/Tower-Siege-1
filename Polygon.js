class Polygon{
    constructor(){
        var options = {
        }
        //polygon holder with slings
        polygon = Bodies.circle(50,200,20);
        World.add(world,polygon);

        slingShot = new slingShot(this.polygon,{x:100,y:200});
    }
    display(){
        imageMode(CENTER)
        image(polygon_img,polygon.position.x,polygon.position.y,40,40);

        slingShot.display();
    }
   
}

function mouseDragged(){
    MutationObserver.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    slingShot.fly();
}