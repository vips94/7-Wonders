Shery.imageEffect("#backImg",{
    style:5,
    gooey:true,
    // debug:true, 
    config:{"a":{"value":1.24,"range":[0,30]},"b":{"value":-0.8,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.9512006196746707},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.1,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":false},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.17,"range":[0,2],"_gsap":{"id":3}},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":17.36,"range":[0,100]}},
})

let currentWonder = 'the_colosseum';

const h1_containers = document.querySelectorAll('.text');
h1_containers.forEach(function(elem){
    var animating = false;
    const h1s = elem.querySelectorAll('h1')
    let index = 0

    //code for mouse click event
    document.querySelector('#main').addEventListener('onclick',function(){
        if(!animating){
            animating = true
            gsap.to(h1s[index],{
                top: '-=100%',
                duration: 1,
                ease: 'power1.out',
                onComplete:function(){
                    animating = false
                    gsap.set(this._targets[0],{
                        top:"100%"
                    })
                }
            });
            index === h1s.length-1 ? (index=0) : index++
            gsap.to(h1s[index],{
                top: '-=100%',
                duration: 1,
                ease: 'power1.out'
            })
        }
    })

    //same code for mobile touch event
    document.querySelector('#main').addEventListener('touchstart',function(){
        if(!animating){
            animating = true
            gsap.to(h1s[index],{
                top: '-=100%',
                duration: 1,
                ease: 'power1.out',
                onComplete:function(){
                    animating = false
                    gsap.set(this._targets[0],{
                        top:"100%"
                    })
                }
            });
            index === h1s.length-1 ? (index=0) : index++
            gsap.to(h1s[index],{
                top: '-=100%',
                duration: 1,
                ease: 'power1.out'
            })
        }
    })
})

const description_containers = document.querySelectorAll('.column');
description_containers.forEach(function(elem){
    var animating = false;
    const ptags = elem.querySelectorAll('p')
    let index = 0

      //code for mouse click event
    document.querySelector('#main').addEventListener('click',function(){
        if(!animating){
            animating = true
            gsap.to(ptags[index],{
                opacity: 0,
                duration: 1,
                ease: 'power1.out',
                onComplete:function(){
                    animating = false
                }
            });
            index === ptags.length-1 ? (index=0) : index++

            currentWonder = ptags[index].id;

            gsap.to(ptags[index],{
                opacity: 1,
                duration: 1,
                ease: 'power1.out'
            })
        }
    })

    //same code for mobile touch event
    document.querySelector('#main').addEventListener('touchstart',function(){
        if(!animating){
            animating = true
            gsap.to(ptags[index],{
                opacity: 0,
                duration: 1,
                ease: 'power1.out',
                onComplete:function(){
                    animating = false
                }
            });
            index === ptags.length-1 ? (index=0) : index++

            currentWonder = ptags[index].id;

            gsap.to(ptags[index],{
                opacity: 1,
                duration: 1,
                ease: 'power1.out'
            })
        }
    })
})



const mapLinks = {
    the_colosseum:'https://en.wikipedia.org/wiki/Colosseum',
    the_great_wall:'https://en.wikipedia.org/wiki/Great_Wall_of_China',
    christ_the_redeemer:'https://en.wikipedia.org/wiki/Christ_the_Redeemer_(statue)',
    the_taj_mahal:'https://en.wikipedia.org/wiki/Taj_Mahal',
    machu_picchu:'https://en.wikipedia.org/wiki/Machu_Picchu',
    chichen_itza:'https://en.wikipedia.org/wiki/Chichen_Itza',
    petra:'https://en.wikipedia.org/wiki/Petra',
}

function onHandleClickExplore(event){
    event.stopPropagation();
    console.log(currentWonder);
    window.open(mapLinks[currentWonder],"_blank")
}