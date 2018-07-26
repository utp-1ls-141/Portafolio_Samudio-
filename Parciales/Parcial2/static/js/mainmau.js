
function esPrimo(){
    var num= 1000000, acum=0;
    
            for (var i = 2; i < num; i++) {
                if (num% i == 0) {
                    acum +=i;
                }
            }acum +=i;
            $('#myModal').modal(focus);
            $("#primo").html("Sumatoria de numeros primos "+acum);
    }


function secuencia(){
    var a=0 ,b=1; 
    var result = [];

    for (var i = 1; i < 100; i++){

        console.log(result[i]);

        $('#myModal').modal(focus);
        $("#secuencia").html("Secuencia de numeros Fibronacci "+result);

        result [i] = a+b;
        a = b;
        b= result [i];
    }

}