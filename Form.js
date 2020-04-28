class Form{
constructor(){
   
    this.button=createButton('PLAY')
}
    display(){
       this.button.position(displayWidth/2,500)
        textSize(200);
       fill('red');
        textFont('Algerian');
        text('CHEF MANIA ',displayWidth/2-500,200)
    }
    hide(){
        this.button.hide();
    }



}