var structure = {
    title : 'AWS Control',
    companyName : 'Incuvo',

    menuOptions : [
        { route: '/', text: 'HomeS' },
        { route: '/about', text: 'AboutS'}
    ],

    machineParams : {
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
                Name: 'tag:Role',
                Values: [
                    'development'
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

module.exports = structure;
