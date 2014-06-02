Sheets = new Meteor.Collection("sheets",{schema: {
    name: {
        type: String,
        label: "Title",
        max: 200
    },
    author: {
        type: String,
        label: "Author"
    },
    ROI: {
        type: Number,
        label: "Number of copies",
        min: 0
    },
    added: {
        type: Date,
        label: "Last date this book was checked out"
    },
    games: {
        type: [Object],
        label: "Brief summary"
    }}});
