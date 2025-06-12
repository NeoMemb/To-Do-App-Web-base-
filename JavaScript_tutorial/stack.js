/**
 * Represents a Stack.
 * @class
 * @classdesc A stack that operates on First In - Last Out FILO
 * @author Ariori Abdulrafiu
 * @version 1.0
 * @since 1.0.0
 */
class Stack{

    /**
     * Initialize a stack.
     * @constructor
     */
    constructor(){
        /**
         * @type {list}
         * @private
         */
        this.items = [];
    }

    /**
     * Append an item to the stack.
     * @method
     * @param {*} item - The item to be added.
     */
    append(item){
        this.items.push(item);
    }

    /**
     * Prepend an item to the begining of a stack
     * @method
     * @param {*} item - item to be added
     */
    prepend(item){
        this.items.unshift(item);
    }

    /**
     * @method
     * @returns {number} The length of the stack
     */
    size(){
        return this.items.length;
    }

    /**
     * Remove item added last in the stack
     * @method
     */
    pop(){
        this.items.pop();
    }

    /**
     *
     * @description Remove the nth item in the list
     * @method
     * @param {number} n 
     * @throws {Error} Throws an error if:
     *  n < 1 or not of type "number" or n > stack size
     */
    removeAt(n){
        try {
            if (typeof(n) === "number" && n >=1 && n <= this.items.length){
                this.items.splice((n-1), 1);
            }
            else {
                throw new Error(`Invalid index`)
            }
        } catch (error) {
            console.log(error.message || error, "Out of index");
        }
    }
}
