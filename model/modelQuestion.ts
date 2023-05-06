import Milk from "2/function/milk"
import ModelResponse from "./modelResponse"

export default class ModelQuestion {
    #id:number
    #enunciado: string
    #respostas: ModelResponse[]
    #acertou: boolean
    //#respondida:boolean

    constructor(id:number, enunciado:string, respostas:ModelResponse[], acertou: boolean){
        this.#id=id
        this.#enunciado=enunciado
        this.#respostas=respostas
        this.#acertou= acertou
    }

    get id(){
        return this.#id
    }

    get enunciado(){
        return this.#enunciado
    }
    get respostas(){
        return this.#respostas
    }

    get acertou() {
       return this.#acertou
    }

    get respondida(){
        for(let resposta of this.#respostas){
            if(resposta.reveleda) return true
        }
        return false
    }
    ResponderCom(indice:number):ModelQuestion {
        const acertou = this.#respostas[indice]?.acerta
        const respostas =this.#respostas.map((resposta,i)=>{
        const respostaSelecionada = indice === i
        const deveRevelar = respostaSelecionada || resposta.acerta
        return deveRevelar ? resposta.revelar() : resposta
        })
        return new ModelQuestion(this.id, this.enunciado, respostas, acertou)
    }

    milkResponse():ModelQuestion{
      let milkResp = Milk(this.#respostas)
      return new ModelQuestion(this.#id,this.#enunciado, milkResp, this.#acertou)
    }
    toObject(){
        return {
          id: this.#id,
          enunciado: this.#enunciado,
          respostas:this.#respostas.map(resp=>(
            resp.toObject()
          )),
          acertou: this.#acertou
        }
      }
}


