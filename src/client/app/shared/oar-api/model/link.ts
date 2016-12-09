
/*
* TODO : Description Link
*/
interface Serializable<T> {
    deserialize(input: Object): T;
}


export class Link implements Serializable<Link>{
   
    title:string;
    // href of the api
    api_href:string;
    rel:string;

    // href for the app routing
    href:string;

    deserialize(input :any) {
        this.rel = input.rel;
        this.api_href = input.href;
        this.title = input.title;
        this.href = "";
        return this;
    }

    static decode(json: JSON): Link {
        let jLink = Object.create(Link.prototype);
        return Object.assign(jLink, json, {
        });
    }

}