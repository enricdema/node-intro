class SortedList {
    constructor() { 
        this.items=[];
        this.length=0;
        
    }
    
    
    add(item) {
        
        this.items.push(item); 
        //order array number in js
        this.items.sort(function(a, b) {
            return a - b;
        });
        this.length=this.items.length;
    }
    get(pos) {
        if(this.items[pos-1]!=null){
            return this.items[pos-1];
        }
        else{
            throw new TypeError('OutOfBounds Error');
        }
            
            
    }
    max() {
        if(this.items.length>0){
            return this.items[this.length-1];
        }
        else{
        throw new TypeError('EmptyList Error');
        }
    }
    min() {  
        if(this.items.length>0){
            return this.items[0];
        }
        else{
           throw new TypeError('EmptyList Error');
        }
    }
    average() {
        if(this.items.length>0){
            return this.sum() / this.items.length;
        }
        else{
           throw new TypeError('EmptyList Error');
        }
    }
    sum() {
        if(this.items.length>0){
            return this.items.reduce((a, b) => a + b, 0);
        }
        else{
           throw new TypeError('EmptyList Error');
        }
    }
}

const sorted= new SortedList(2,2);


export default SortedList;
