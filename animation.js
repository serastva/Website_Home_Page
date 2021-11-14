var animation = anime.timeline({
    autoplay: true

});

animation
  

    .add({

        targets: '#stars',
        top: '0px',
        duration: 1000,
        easing: 'easeInOutSine'
    })

 

    .add({
        targets: '#moon',
        top: '10px',
        left: '-500px',
        duration: 1000,
        easing: 'easeInOutBack'
    })

    .add({
        targets: '#city',
        bottom: '0px',
        duration: 1000,
        easing: 'easeInOutSine'
        
    })



    .add({
        targets: '#raccoon',
        bottom: '0px',
        duration: 1000,
        easing: 'easeInOutSine'
        
    })

    .add({
        targets: '#text',
        duration: 1000,
        marginRight:0,
        easing: 'easeInOutBack'
    })

    .add({
        targets: '#btn',
        top:'-10%',
        duration: 1000,
        marginBottom:0,
        easing: 'easeInOutBack'
    })

    .add({
        targets: '#btn2',
        top:'-10%',
        left:'30%',
        duration: 1000,
        marginBottom:0,
        easing: 'easeInOutBack'
    })

    .add({
        targets: '#btn3',
        top:'-10%',
        left:'58%',
        duration: 1000,
        marginBottom:0,
        easing: 'easeInOutBack'
    })

    .add({
        targets: '#raccoon',
        translateX: 1600
        
    })

document.querySelector('#btn').onclick = animation.play;

