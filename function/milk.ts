
export default function Milk(element: any[]):any{
    return element.map(valor=>({valor, aleatorio: Math.random()}))
           .sort((obj1, obj2)=>obj1.aleatorio-obj2.aleatorio)
           .map(obj=>obj.valor)
}
 