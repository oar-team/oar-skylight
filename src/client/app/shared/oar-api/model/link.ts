
/*
* TODO : Description Link
*/
interface Serializable<T> {
    deserialize(input: Object): T;
}


export class Link implements Serializable<Link>{
   
    title:string;
    href:string;
    rel:string;

    deserialize(input :any) {
        this.rel = input.rel;
        this.href = input.href;
        this.title = input.title;
    
        return this;
    }

    static decode(json: JSON): Link {
        let jLink = Object.create(Link.prototype);
        return Object.assign(jLink, json, {
        });
    }

}