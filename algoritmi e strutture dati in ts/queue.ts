/** FIFO - First in First out
 * Spiegazione: 
 * definisco due indici: l'lastindex e il nextindex
 * nella funzione di enqueue vado ad inserire nella struttura dati l'elemento in posizione di nextindex e incremento quest'ultimo
 * in caso di dequeue prendo l'elemento nella stuttura dati nella posizione dell'indice lastindex
 * elimino questo elemento e incremento lastindex, così da poter spostare
 */

class Queue<T>{
    private _data: T[]=[]
    private _lastIndex = 0
    private _nextIndex = 0
    enqueue(item: T):void{
        this._data[this._nextIndex] = item
        this._nextIndex++
    }

    dequeue(): T | undefined{
        if (this._lastIndex!==this._nextIndex){
            const value = this._data[this._lastIndex]
            delete this._data[this._lastIndex]
            this._lastIndex++;
            return value
        }
    }
}

const queue = new Queue<number>()

queue.enqueue(1)
queue.enqueue(2)

console.log(queue.dequeue())