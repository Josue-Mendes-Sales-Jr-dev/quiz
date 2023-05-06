import ModelResponse from "2/model/modelResponse";
import ModelQuestion from "2/model/modelQuestion";

const questions: ModelQuestion[]=[
    new ModelQuestion(306, 'Qual bicho transmite a doença de chagas?',[
      ModelResponse.errada("ABelha"),
      ModelResponse.errada("Barata"),
      ModelResponse.errada("Pulga"),
      ModelResponse.certa("Babeiro")
    ], false),
    new ModelQuestion(202, 'Qual fruto é conhecifo no Norte e Nodeste como "Jerimum" ?',[
      ModelResponse.errada("Cajú"),
      ModelResponse.errada("Tomate"),
      ModelResponse.errada("Chuchu"),
      ModelResponse.certa("Abóbora")
    ], false),
    new ModelQuestion(509, 'Qual o coletivo de cães?',[
      ModelResponse.errada("Manada"),
      ModelResponse.errada("Alcateia"),
      ModelResponse.errada("Rebanho"),
      ModelResponse.certa("Matilha")
    ], false),
    new ModelQuestion(242, 'Qual é o triângulo que tem todos os lados diferente ?',[
      ModelResponse.errada("Equilátero"),
      ModelResponse.errada("Isóceles"),
      ModelResponse.errada("Trapézio"),
      ModelResponse.certa("Escaleno")
    ], false),
]

export default questions