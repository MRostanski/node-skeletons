var config = {
    appName : 'AWS Control - skeleton',
    companyName : 'Incuvo',
    mongodb : {
        server : '52.52.230.127', //'development.castle-api.castlerevenge.com', //
        port : '27017',
        database : 'castle'
    },
    autoscaleParams : {
        AutoScalingGroupNames: [
            "CastleAutoScaleGroup"
        ]
    },
    elbParams : {
        LoadBalancerNames: [
            "Castle-Production-LB"
        ]
    },

    mongoParams : {
        //DryRun: true || false,
        Filters: [
            {
                Name: 'instance-state-name',
                Values: [
                    'running'
                /* more items */
                ]
            },
            {
            Name: 'tag:Name',
            Values: [
                'CastleMongoProduction'
                /* more items */
            ]
            }
            /* more items */
        ],
        //InstanceIds: params.castleInstances,
        //MaxResults: 0,
        //NextToken: 'STRING_VALUE'
    }
     
};

module.exports = config;
