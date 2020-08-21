
function snake()
{
  this.x = 0;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;
  this.tail = [];
  this.total =0;
  
  this.update = function()
  {
    if (this.total === this.tail.length)
    {
    for(var i =0 ;i<this.total-1;i++)
    {
      this.tail[i] = this.tail[i+1];
    }
    }
    this.tail[this.total-1] = createVector(this.x,this.y);
    
    this.x = this.x + this.xspeed*20;
    this.y = this.y + this.yspeed*20;
    
    this.x = constrain(this.x,0,width-20);
    this.y = constrain(this.y,0,height-20);
  }
  
  this.show = function()
  {
    fill(255);
    for(var i =0 ; i<this.tail.length;i++){
      rect(this.tail[i].x,this.tail[i].y,20,20);}
    rect(this.x,this.y,20,20);
  }
  
  this.eat = function(pos)
  {
    var d = dist(this.x,this.y,pos.x,pos.y);
    if(d<1)
    {
      this.total++;
      return true;
    }
    else
      return false;
  }
  
  this.death = function(){
    for(var i =0;i<this.tail.length;i++)
    {
      var pos = this.tail[i];
      var d = dist(this.x,this.y,pos.x,pos.y);
      if(d<1){
        this.total= 0;
        this.tail =[];
      }
    }
      
  }
}