/** @jsx h */

// ^^^^ this tells a transpiler to inject calls to an `h()` function for each node.

const ITEMS = 'Abhay Bhavya Madhav'.split(' '); // Array of Names


// Creating a JS Function

function foo(items) {

    // Returning a Vdom Tree or Object
  return items.map(p => h("li", null, " ", p, " ")); // <-- can be multiline -> Sending Child Nodes 
}





let vdom =
/*
We have a div inside we have a child node as <p> and <ul> which is converted into a Virtual Dom Tree via H()-> Hyperscript Generator
*/
h("div", { id: "div1" },
h("p", null , h("u" , null , h("b" , null , "Simple JSX Renderer"))),
h("ul", null, foo(ITEMS)));


/** @jsx h */
let newvdom  = <div>Hey EveryOne<b>My Name is Abhay</b></div> ;
console.log(newvdom);

// render() converts our "virtual DOM" (see below) to a real DOM Tree Structure Via using Simple Core JS Functions
let dom = render(vdom);

// append the new nodes somewhere:
document.body.appendChild(dom);



// Remember that "virtual DOM"? It's just JSON - each "VNode" is an object with 3 properties.


let json = JSON.stringify(vdom, null, '  ');

document.body.appendChild(render(h("div" , null , "Theese Vdom is nothing but Just a Json object with 3 Properties i.e - NodeName , attributes , ChildNodes")));

// The whole process (JSX -> VDOM -> DOM) in one step:
document.body.appendChild(
render(h("p", null, json)));






/** Render Virtual DOM to the real DOM */


function render  (vnode)  {
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

/** hyperscript generator, gets called by transpiled JSX to Create a Virtual Dom Structure*/
function h  (
    nodeName , 
    attributes,
    ...args 
){
    const children = args.length ? [].concat(...args) : null ;

    return {nodeName , attributes , children};
}



// WE WILL JUST INJECT THIS JS FILE INTO THE HTML FILE AND THINGS WILL BE RENDERED





