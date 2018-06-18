var listaProdotti=document.getElementById('listaprodotti');

function disegnaProdotti(prodotti)
{
for (var i=0; i<prodotti.length; i++)
{
    var tabella=$('<div class="col-md-6"></div>');

    var row1=$('<div class="row"></div>');
    var row2=$('<div class="row"></div>');
    var row3=$('<div class="row"></div>');
    var row4=$('<div class="row"></div>');

    var nome=$('<h4></h4>').html(prodotti[i].nome);

    var descrizione=$('<p class="descrizione"></p>').html(prodotti[i].descrizione)

    var prezzo=$('<p class="prezzo"></p>').html(prodotti[i].prezzo + ' &euro;')

    var divImmagine=$('<div class="col-md-6 text-center"></div>');
    var immagine=$('<img class="img-fluid"></img>').attr('src', prodotti[i].immagine);

    var carrello=$('<input type="button" value="Acquista"></input>').click(function(){location.href="carrello.html"}).click(function(){
        return nome;
    });

    nome.appendTo(row1);
    descrizione.appendTo(row2);
    prezzo.appendTo(row3);
    immagine.appendTo(divImmagine);
    carrello.appendTo(row4);

    row1.appendTo(tabella);
    row2.appendTo(tabella);
    row3.appendTo(tabella);
    immagine.appendTo(tabella);
    row4.appendTo(tabella);

    tabella.appendTo(listaProdotti);
}
}
disegnaProdotti(prodotti);