import { NextApiRequest, NextApiResponse } from "next"
import questions from "../QuestionsBase"
import Milk from "2/function/milk"


export default function hundler(
    req: NextApiRequest, 
    res: NextApiResponse 
    ){
        const ids=questions.map(quest=> quest.id)
    res.status(200).json(Milk(ids))
       
}