// @ts-nocheck
const recommendationRequestsFixtures = {
    oneRequest: {
        "id": 1,
        "requesterEmail": "yvangala@ucsb.edu",
        "professorEmail": "PhillConrad@ucsb.edu",
        "explanation": "Masters",
        "dateNeeded": "2024-01-02T12:00:00",
        "dateRequested": "2023-09-13T12:00:00",
        "done": "false",
    },
    threeRequests: [
        {
            "id": 1,
            "requesterEmail": "Beatrix@killBill.edu",
            "professorEmail": "BillConrad@ucsb.edu",
            "explanation": "I need to kill Bill",
            "dateNeeded": "2024-01-02T12:00:10",
            "dateRequested": "2023-09-13T12:00:00",
            "done": "true",
        },
        {
            "id": 2,
            "requesterEmail": "ItsLeviosaNotLeviosaa@ucsb.edu",
            "professorEmail": "ChillConrad@ucsb.edu",
            "explanation": "Hogwarts",
            "dateNeeded": "2024-07-12T20:05:00",
            "dateRequested": "2023-09-13T12:02:00",
            "done": "false",
        },
        {
            "id": 3,
            "requesterEmail": "elonmusk@twitterIsNowX.com",
            "professorEmail": "DrillConrad@ucsb.edu",
            "explanation": "Going to Mars",
            "dateNeeded": "2124-08-13T18:00:00",
            "dateRequested": "2023-11-22T12:10:12",
            "done": "false",
        }
    ]
};


export { recommendationRequestsFixtures };