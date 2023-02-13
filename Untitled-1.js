//Create a nice looking Sankey Diagram using plotlyjs. One of the topics indicates that I have published 7 papers, accepted 2 papers and am reviewing 3 papers. Another theme indicates that I am the first author on 7 papers(4 of them are published,1 is accepted and 2 are under review) and the other author on 5 papers(3 of them are published,1 is accepted).

var data = [{
    type: "sankey",
    orientation: "h",
    node: {
        pad: 15,
        thickness: 20,
        line: {
            color: "red",
            width: 0.5
        },
        label: ["Punlished", "Accepted", "Under Review", "First Author", "Other Author"],
        color: ["blue", "blue", "blue", "orange", "orange"]
    },
    link: {
        source: [0, 0, 0, 0, 0, 0, 0, 1, 1, 2, 2, 2],  // Node index of source node for edge
        target: [3, 3, 4, 4, 4, 3, 3, 3, 4, 3, 3, 4],  // Node index of target node for edge
        value: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]     // Value of edge - used to determine edge width
    }
}];
fig = {
  data: data
}
        