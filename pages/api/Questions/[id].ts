import { NextApiRequest, NextApiResponse } from "next"
import questions from "../QuestionsBase"


export default function Questions(
  req: NextApiRequest,
  res: NextApiResponse
  ){
    const idSelect= Number(req.query.id)

    const oneQuestion=questions.filter(quest=> quest.id=== idSelect)
    
      if(oneQuestion.length === 1){
        const selectQuestion = oneQuestion[0].milkResponse()
        res.status(200).json(selectQuestion.toObject())
      }else{
        res.status(204).send("sem conteúdo")
      }
  }
   