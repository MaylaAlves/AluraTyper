$("#botao-placar").click(mostraPlacar);

function inserePlacar(){
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Seu-nome";
    var numPalavras = $("#contador-palavras").text();


   /* var linha = "<tr>"+
                    "<td>"+ usuario + "</td>"+
                    "<td>"+ numPalavras + "</td>"+
                    "<td>"+ botaoRemover + "</td>"+
                "</tr>"; */
    var linha = novaLinha(usuario,numPalavras);
    linha.find(".botao-remover").click(removeLinha);

    corpoTabela.append(linha);
}

function novaLinha(usuario, palavras){
    var linha = $("<tr>");
    var colunaUsuario =$("<td>").text(usuario);
    var colunaPalavras =$("<td>").text(palavras);
    var colunaRemover =$("<td>");

    var link= $("<a>").addClass("botao-remover").attr("href", "#");
    var icone= $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);

    colunaRemover.append(link);

    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(){
    event.preventDefault(); //previnir acontecimentos padrões
   var linha= $(this).parent().parent();
    linha.fadeOut(1000);
    setTimeout(function(){
        linha.remove();
    },1000);
    
}

function mostraPlacar(){
    $(".placar").slideToggle(600);
}
