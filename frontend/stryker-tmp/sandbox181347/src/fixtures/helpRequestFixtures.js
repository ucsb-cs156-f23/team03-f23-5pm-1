// @ts-nocheck
const helpRequestFixtures = {
    oneHelpRequest: {
        "id": 1,
        "requesterEmail": "vinsonlin@ucsb.edu",
        "teamId": "f23-5pm-1",
        "tableOrBreakoutRoom": "1",
        "requestTime": "2022-01-02T12:00:00",
        "explanation": "Help with team03",
        "solved": true
    },
    threeHelpRequests: [
        {
            "id": 1,
            "requesterEmail": "vinsonlin@ucsb.edu",
            "teamId": "1",
            "tableOrBreakoutRoom": "1",
            "requestTime": "2022-01-02T12:00:00",
            "explanation": "Help with team03",
            "solved": true
        },
        {
            "id": 2,
            "requesterEmail": "cgaucho@ucsb.edu",
            "teamId": "s22-5pm-3",
            "tableOrBreakoutRoom": "7",
            "requestTime": "2022-04-20T17:35",
            "explanation": "Need help with Swagger-ui",
            "solved": false
        },
        {
            "id": 3,
            "requesterEmail": "pdg@ucsb.edu",
            "teamId": "s22-6pm-4",
            "tableOrBreakoutRoom": "13",
            "requestTime": "2022-04-21T14:15",
            "explanation": "Merge conflict",
            "solved": false
        }
    ]

};

export { helpRequestFixtures }