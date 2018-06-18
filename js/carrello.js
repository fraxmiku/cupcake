var carrello=document.getElementById('carrello');

function disegnaCarrello(prodotti)
{
for (var i=0; i<prodotti.length; i++)
{
    var carrello=$('<div class="col-md-6"></div>');

    var row1=$('<div class="row"></div>');
    var row2=$('<div class="row"></div>');

    var nome=$('<h2></h2>').html(prodotti[i].nome);
    var prezzo=$('<p class="prezzo"></p>').html(prodotti[i].prezzo + ' &euro;')

    nome.appendTo(row1);
    prezzo.appendTo(row2);

    row1.appendTo(carrello);
    row2.appendTo(carrello);

    carrello.appendTo(carrello);
}
}
disegnaCarrello(carrello);