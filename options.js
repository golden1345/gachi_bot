module.exports = {
     gameOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Cock1', callback_data: '1'},{text: 'Cock2', callback_data: '2'},{text: 'Cock3', callback_data: '3'}],
                [{text: 'Cock4', callback_data: '4'},{text: 'Cock5', callback_data: '5'},{text: 'Cock6', callback_data: '6'}],
                [{text: 'Cock7', callback_data: '7'},{text: 'Cock8', callback_data: '8'},{text: 'Cock9', callback_data: '9'}],
                [{text: 'Cock0', callback_data: '0'}],
            ]
        })
    },
    
     againOptions: {
        reply_markup: JSON.stringify({
            inline_keyboard: [
                [{text: 'Ну че лох, го еще раз', callback_data: '/again'}],
            ]
        })
    }
}