export class Forca{

  private imagens:string[];
  private atual:number;
  private palavra:string;
  private palpites:string[];
  private el:Element;
  private elImage:Element;
  private btnNext:Element;
  private btnPrevious:Element;

  constructor(el:Element){
    this.el = el;
    this.imagens = [
      "resources/imagens/forca01.png",
      "resources/imagens/forca02.png",
      "resources/imagens/forca03.png",
      "resources/imagens/forca04.png",
      "resources/imagens/forca05.png",
      "resources/imagens/forca06.png",
      "resources/imagens/forca07.png",
      "resources/imagens/forca08.png",
    ];
    this.atual = 0;
  }

  getImagem():string{
    return this.imagens[this.atual];
  }

  next(event:Event):void{
    if(this.atual < 7){
      this.atual++;
    }
    this.update();
  }

  previous(event?:Event):void{
    if(this.atual > 0){
      this.atual--;
    }
    this.update();
  }

  private bind(el:Element){
    this.elImage = this.el.querySelector('img');
    this.btnNext = el.querySelector('#btnNext');
    this.btnPrevious = el.querySelector('#btnPrevious');
    this.btnNext.addEventListener('click',(e) => this.next(e));
    this.btnPrevious.addEventListener('click',(e)=>this.previous(e));
  }

  render(){
    const template = `
      <div>
        <img src="${this.getImagem()}">
      </div>
      <button id="btnPrevious">Anterior</button>
      <button id="btnNext">Próximo</button>
    `;
    this.el.innerHTML = template;
    this.bind(this.el);
    
  }

  update():void{
    this.elImage.src = this.getImagem();
  }
}


export interface Element{
  innerHTML?:string;
  innerText?:string;
  src?:string;
  querySelector(query:string):Element;
  addEventListener(type:string, listener: EventListener);
}