
const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector(".clouds")
const point = document.querySelector(".point")
const pontuacao = document.querySelector(".pontuacao")
const pointFinal = document.querySelector(".point-final")
const fim =  document.querySelector(".fim")
const btnLink = document.querySelector(".btn-link")


let contador = 0


function jump(){

    mario.classList.add('jump')

    setTimeout(()=>{
        mario.classList.remove('jump')
    },500)
}



function iniciar(){
    document.addEventListener('keydown', jump)

    contador = 0

    const pointLoop = setInterval(()=>{
        contador = contador + 1
        point.innerHTML = contador
    },100)

    
    const loop = setInterval(() => {
        //pegando a distância do obstáculo em relação a caixa. 
        const cloudsPosition = clouds.offsetLeft //por estar em movimento
        const pipePosition = pipe.offsetLeft;
        const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '') //por estar parada
    
        
        if(pipePosition <= 120 && pipePosition>0 && marioPosition<110){
            pipe.style.animation = "none"
            pipe.style.left = `${pipePosition}px`
    
            mario.style.animation = "none"
            mario.style.bottom = `${marioPosition}px`
            
            //mudando a imagem e o estilo quano o jogador perde
            mario.src="img/game-over.png"
            mario.style.width="75px"
            mario.style.marginLeft="50px"
    
            clouds.style.animation = "none"
            clouds.style.left = `${cloudsPosition}px`
    
            clearInterval(loop)
            clearInterval(pointLoop)
            pointFinal.innerHTML = contador
    
            const time = setTimeout(()=>{
    
                fim.style.opacity="1"
                mario.style.opacity="0"
                pipe.style.opacity="0"
                clouds.style.opacity="0"
                pontuacao.style.opacity="0"
                
            },2000)
            
           
        }
    }, 10);

}

iniciar()




function reiniciar(){
    btnLink.href="index.html"
    const time = setTimeout(()=>{


        fim.style.opacity="0"
        mario.style.opacity="1"
        pipe.style.opacity="1"
        clouds.style.opacity="1"
        pontuacao.style.opacity="1"
        
        
    },1000)

}

