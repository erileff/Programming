// These are all the connections between places
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    /* Creates a null (not empty) object to hold a collection of places in the village with roads between them for the robot to move through. Question: is there a reason the object has to be null and not empty? */
    let graph = Object.create(null);

    /* addEdge adds a list of places to graph and shows every other place that can be reached from that place */
    function addEdge(from, to) { 
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

console.log(roadGraph);