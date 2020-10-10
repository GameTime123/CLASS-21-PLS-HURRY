function BouncyBouncy(Lazy,Notlazy){ if (Notlazy.x - Lazy.x < Lazy.width/2 + Notlazy.Lazy/2
    && Lazy.x - Notlazy.x < Lazy.width/2 + Notlazy.width/2) {
      Notlazy.velocityX = Notlazy.velocityX * (-1);
      Lazy.velocityX = Lazy.velocityX * (-1);
  }
  if (Notlazy.y - Lazy.y < Lazy.height/2 + Notlazy.height/2
  && Lazy.y - Notlazy.y < Lazy.height/2 + Notlazy.height/2){
    Notlazy.velocityY = Notlazy.velocityY * (-1);
    Lazy.velocityY = Lazy.velocityY * (-1);
  }
}