// THIS FILE INCLUDES THE BASIC FUNCTIONS AND HOW THING WORKS


//    /** @jsx h */ <- Tells Babel to call for h() Function for Vdom Creation


// h() Function is an Hyper Script Generator
const h = (
    nodeName , 
    attributes,
    ...args 
) =>{
    const children = args.length ? [].concat(...args) : null ;

    return {nodeName , attributes , children};
}

console.log(h("div" , {"id" : "1"} , "Hello!")); // Vrtial Node Created



// Render function that accepts a virtual Node structure and returns an actual DOM Node

const render = (vnode) => {
    // strings converted to #text Node instead of HTML Element
    if(vnode.split) return document.createTextNode(vnode);
    
    // Creating a dom element
    let Dom_Node = document.createElement(vnode.nodeName);

    // making the attributes settled for the new node
    let attributes = vnode.attributes || {}; 

    // Iterating over all the keys in given Object 
    Object.keys(attributes).forEach((att)=>Dom_Node.setAttribute(att , attributes[att]));

    // Reccursive Call

    (vnode.children || []).forEach( c => Dom_Node.appendChild(render(c)));

    return Dom_Node;

}

console.log(render(h("div" , {"id" : "1"} , "Hello!")));

// Now we have to convert JSX -> VDOM ->DOM

// JSX is transformed into h() Function Calls to Create VDOM Tree

// let Vdom = <div id="Foo">Hello!</div>

// let domNode = render(Vdom);

document.body.appendChild(render(h("div" , {"id" : "1"} , "Hello!")));