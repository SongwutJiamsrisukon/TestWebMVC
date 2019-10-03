class MyAjax{
    constructor(urlP) {
        this.urlP = urlP;
    }

    getAjax() { //concreate
        $.ajax({
        url: this.urlP,
        method: "GET"
        }).done(function (result) { resultGetAjax(result)});
    }
}


