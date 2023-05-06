export default class ModelResponse{
    #valor:string
    #acerta:boolean
    #revelada:boolean

    constructor(valor:string, acerta:boolean, revelada: boolean){
        this.#valor=valor
        this.#acerta=acerta
        this.#revelada=revelada
       
    }
    
    static certa(valor: string){
      return new ModelResponse(valor, true)
    }
    static errada(valor:string){
         return new ModelResponse(valor, false)
    }
    
   

    get valor(){
      return  this.#valor
    }
    get acerta(){
      return  this.#acerta
    }
    get reveleda(){
      return  this.#revelada
    }
    revelar(){
      return new ModelResponse(this.#valor, this.#acerta, true)
  }
    toObject(){
      return {
        valor: this.#valor,
        acerta: this.#acerta,
        revelada:this.#revelada,
        
      }
    }
}