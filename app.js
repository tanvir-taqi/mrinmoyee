$(document).ready(() => {
    $('.btn').mouseover(() => {

        setTimeout(()=>{

            $('.btn').text('click now just once')
    
            $('.btn').click(()=>{
                $('.btn').text('thank you')
    
                var poem = 'and all your smiles'
                var poem2 = 'and all your bliss'
               var poem3 = 'will remain unchanged'
               var poem4 = 'till the dawn of apocalypse'
                var poem5 = ''
                var poem6 = 'but if you get blue'
                var poem7 = 'and grievance in your bones'
                var poem8 = 'remember'
                var poem9 = 'i will be there'
                var poem10 = 'to get you with my lips'
                var poem11 = 'forever'
                var poem12 = 'happy birthday'
                var poem13 = 'mrinmoyee'


                
                const type = () => {
                    $('.poem').text(poem)
        
                }
                const type2 = () => {
                    $('.poem2').text(poem2)
        
                }
                const type3 = () => {
                    $('.poem3').text(poem3)
        
                }
                const type4 = () => {
                    $('.poem4').text(poem4)
        
                }
                const type5 = () => {
                    $('.poem5').text(poem5)
        
                }
                const type6 = () => {
                    $('.poem6').text(poem6)
        
                }
                const type7 = () => {
                    $('.poem7').text(poem7)
        
                }
                const type8 = () => {
                    $('.poem8').text(poem8)
        
                }
                const type9 = () => {
                    $('.poem9').text(poem9)
        
                }
                const type10 = () => {
                    $('.poem10').text(poem10)
        
                }
                const type11 = () => {
                    $('.poem11').text(poem11)
        
                }
                const type12 = () => {
                    $('.poem12').text(poem12)
        
                }
                const type13 = () => {
                    $('.poem13').text(poem13)
        
                }

                const audio = () =>{

                    var $audioElement = $("<audio>");
                    $audioElement.attr({
                        'src': 'hbd.mp3',
                        'autoplay':'autoplay',
                        'loop':'loop'
                    });
                }

        
        
                setTimeout(audio, 2000)
                setTimeout(type, 1500)
                setTimeout(type2, 2500)
                setTimeout(type3, 3500)
                setTimeout(type4, 4500)
                setTimeout(type5, 5500)
                setTimeout(type6, 6500)
                setTimeout(type7, 7500)
                setTimeout(type8, 8500)
                setTimeout(type9, 9500)
                setTimeout(type10, 10500)
                setTimeout(type11, 11500)
                setTimeout(type5, 13500)

                setTimeout(type12, 14500)
                setTimeout(type5, 16500)

                setTimeout(type13, 17500)
            })


           


        }, 1000)


    })

})
