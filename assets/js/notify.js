if ('undefined' !== typeof module) {
    inNotify = true;
    type = ['','info','success','warning','danger'];
    module.exports = function initNotify(from, align){
        color = Math.floor((Math.random() * 4) + 1);
        if(inNotify){
            $.notify({
                icon: "pe-7s-gift",
                message: "Bienvenue à <b>VEILLE APP</b> - une application pour toutes vos quêtes "
            },{
                type: type[color],
                timer: 1000,
                placement: {
                    from: from,
                    align: align
                }
            });
            inNotify = false;
        }
    }
}
