// These are all the connections between places
const roads = [
    "Alice's House-Bob's House", "Alice's House-Cabin", "Alice's House-Post Office", "Bob's House-Town Hall", "Daria's House-Ernie's House", "Daria's House-Town Hall", "Ernie's House-Grete's House", "Grete's House-Farm", "Grete's House-Shop", "Marketplace-Farm", "Marketplace-Post Office", "Marketplace-Shop", "Marketplace-Town Hall", "Shop-Town Hall"
];

function buildGraph(edges) {
    /* Creates a null (not empty) object to hold a collection of places in the village with roads between them for the robot to move through. Question: is there a reason the object has to be null and not empty? */
    let graph = Object.create(null);

    /* addEdge adds a list of places to graph and shows every other place that can be reached from that place */
    function addEdge(from, to) { 
        /* If it's not a 'from' place, it's set as a 'to' array. If it is a 'from' place, it's added to the relevant 'to' array. */
        if (graph[from] == null) {
            graph[from] = [to];
        } else {
            graph[from].push(to);
        }
    }
    /* This splits the roads array's items and then adds edges between the places. */
    for (let [from, to] of edges.map(r => r.split("-"))) {
        addEdge(from, to);
        addEdge(to, from);
    }
    return graph;
}

const roadGraph = buildGraph(roads);

class VillageState {
    
    constructor(place, parcels) {
        this.place = place;
        this.parcels = parcels;
    }
    
    move(destination) {
        if (!roadGraph[this.place].includes(destination)) {
            return this;
        } else {
            let parcels = this.parcels.map(p => {
                if (p.place != this.place) return p;
                return {place: destination, address: p.address};
            }).filter(p => p.place != p.address);
            return new VillageState(destination, parcels);
        }
    }
}