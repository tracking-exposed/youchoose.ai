const DAYSAGO = 20;

const clist = [{
    API: buildApiUrl('statistics/supporters/day', DAYSAGO, 2),
    bindto: '#supporters-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'newcomers' ], x: 'day' },
        type: 'bar',
        axes: {
            'newcomers': 'y'
        },
        colors: {
            'newcomers': palette[0]
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/creators/day', DAYSAGO, 2),
    bindto: '#creators-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total' ], x: 'day' },
        type: 'bar',
        axes: { 'total': 'y', },
        colors: {
            'total': palette[1],
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    },
}, {    API: buildApiUrl('statistics/ads/day', DAYSAGO, 2),
    bindto: '#ads-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total' ], x: 'day' },
        type: 'bar',
        axes: {
            'total': 'y'
        },
        colors: {
            'total': palette[2]
        },
        labels: { show: true },
    },
    legend: { show: false },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/recommendations/day', DAYSAGO, 2),
    bindto: '#recommendations-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total' ], x: 'day' },
        types: {
            'total': 'bar',
        },
        colors: {
            'total': palette[3],
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/leaves/day', DAYSAGO, 2),
    bindto: '#leaves-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total' ], x: 'day' },
        types: {
            'total': 'bar',
        },
        colors: {
            'total': palette[4],
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        }
    }
}, {
    API: buildApiUrl('statistics/ytvids/day', DAYSAGO, 2),
    bindto: '#ytvids-graph',
    data : {
        mimeType: 'json',
        xFormat: '%Y-%m-%dT%H:%M:%S.000Z',
        keys: { value : [ 'total' ], x: 'day' },
        type: 'bar',
        colors: {
            'total': palette[5],
        },
    },
    axis: {
        x: {
            type: 'timeseries',
            tick: {
                format: '%Y-%m-%d',
            },
        },
    }
} ];

$(document).ready(async function() {

    var graphNodes = $('.c3graph');
    console.log("Retrieved", _.size(graphNodes), "from the web page");

    const graphs = _.compact(_.map(graphNodes, function(graph) {
        var graphId = '#' + graph.id;

        const config = _.find(clist, { bindto: graphId });
        if(!config) {
            let current = $("#notes").html();
            if(!current.length)
                current = "<hr /><h4>⚠️Errors:</h4>";
            current += ("<code>" +
            `Invalid ID ${graphId} not found among the c3 configs`
                + "</code><br>" );
            $("#notes").html(current);
            return null;
        }
        return {
            config,
            graphId
        }
    }));

    for (const g of graphs) {
        let content = null;
        try {
             const connection = await fetch(g.config.API);
             content = await connection.json();
        } catch(error) {
             $(g.graphId).html("<h6 style='color:red'>Error in fetching data!?</h6>")
        }
        if(!content || content.error) {
             console.log("Error received!", g.graphId, JSON.stringify(content));
             $(g.graphId).html("<h6 style='color:red'>Error in fetching data!?</h6>")
        } else if (!_.size(content)) {
            console.log("Empty answer for", g.graphId, JSON.stringify(content));
            $(g.graphId).html("<h6 style='color:red'>Error in fetching data!?</h6>")
        } else {
            console.log("Generating graph", g.graphId, g,
                        "Retrieved", _.size(content),
                        "adding to config.data https://c3js.org/reference.html");
            g.config.data.json = content;
            const retval = c3.generate(g.config);
            // retval currently not used for updates
        }
    }
});
