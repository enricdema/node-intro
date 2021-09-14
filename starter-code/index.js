class SortedList {
    constructor() { 
        this.items=[];
        
        this.length=this.items.length;
    }
    
    
    add(item) {
        
        this.items.push(item); 
        this.items.sort();  
    }
    get(pos) {
        return this.items[pos-1];    
    }
    max() {}
    min() {}
    average() {}
    sum() {}
}

const sorted= new SortedList(2,2);


export default SortedList;
