import { Component } from '@angular/core';
declare var $: any;

@Component({
  selector: 'index',
  templateUrl: './index.html',
  styleUrls: ['./index.css']
})

export class IndexComponent {
  title = 'app';
  corSalva: any;
  ocultar: boolean = true;
  color = '#CCCCCC';
  tagResposta = "Resp";
  listaElementos = ["Temporais","Mandibula", "Maxilar", "Zigomaticos", "Nasais", "Estenoide", "Nasais_inferiores", "Parietais", "Osso_Frontal"];



  public ngOnit() { }

  fim() {
    this.ocultar = false;

    this.listaElementos.forEach(selecao => {
      
      var objetoSelecionado = document.getElementById(selecao);
      try{
        for (var i = 0; i < objetoSelecionado.childElementCount; i++) {
          for (let j = 0; j < objetoSelecionado.children[i].children.length; j++) {
            var componentObjeto = objetoSelecionado.children[i].children[j];
            //elemento.attributes.getNamedItem("fill").nodeValue = novaCor;
            
            var classeObjetoFormatada;
            try {
              classeObjetoFormatada = componentObjeto.getAttributeNode("class").nodeValue;
            } catch (error) {
              classeObjetoFormatada = "";
            }
            
            var classeObjeto = classeObjetoFormatada.replace("-set", '');

            var btn = "btn-" + selecao;

            var elementoResposta = document.getElementById(btn).className;
            var classeResposta = elementoResposta.substr(2);

            if (classeObjeto == classeResposta) {
              
              var idComponente = selecao + this.tagResposta;
              var novaCor = "correto";

              var elResp = document.getElementById(idComponente);
              for (var x = 0; x < elResp.childElementCount; x++) {
                for (let z = 0; z < elResp.children[x].children.length; z++) {
                  var nodeElemento = elResp.children[x].children[z];                
                  nodeElemento.setAttribute("class", novaCor);            
                  
                }
                
              }

            }
            else {
              
              var idComponente = selecao + this.tagResposta;
              var novaCor = "errado";            

              try{

              var elResp = document.getElementById(idComponente);
              for (var a = 0; i < elResp.childElementCount; a++) {
                for (let q = 0; q < elResp.children[a].children.length; q++) {
                  var nodeElemento = elResp.children[a].children[q];                
                  nodeElemento.setAttribute("class", novaCor);            
                  
                }
                
              }
            }catch(error){

            }
            }
          }
        }
      }
      catch(error){}
    });

  }

  capturarCor(cor) {
    this.corSalva = cor;
  };

  setColor(idComponente) {
    var novaCor = null;
    novaCor = this.corSalva + "-set";

    var element = document.getElementById(idComponente);

    for (var i = 0; i < element.childElementCount; i++) {
      for (let j = 0; j < element.children[i].children.length; j++) {
        var elemento = element.children[i].children[j];
        //elemento.attributes.getNamedItem("fill").nodeValue = novaCor;
        elemento.setAttribute("class", novaCor);
        elemento.getElementsByClassName;

      }
      // element.children[i].classList.remove(this.color);
      // element.children[i].classList.add(novaCor); 
    }

    // document.getElementById(idComponente).classList.remove(this.color);
    // document.getElementById(idComponente).classList.add(novaCor);  
  };

  reiniciar() {
    
    var flag = false;

    this.listaElementos.forEach(selecao => {

    try{

      var elResp = document.getElementById(selecao);
      for (var a = 0; a < elResp.childElementCount; a++) {
        for (let q = 0; q < elResp.children[a].children.length; q++) {
          var nodeElemento = elResp.children[a].children[q];                
          nodeElemento.setAttribute("class", this.color);            
          
        }
        
      }
    }catch(error){

    }

      
    });
    this.ocultar = true;

  }


}
