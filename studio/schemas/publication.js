export default {
    name: "publication",
    title: "Publication",
    type: "document",
    fields: [
        {
            name: "title",
            type: "string",
        },
        {
            name: "date",
            type: "datetime",
        },
        {
            name: "conferenceName",
            type: "string",
        },
        {
            name: "description",
            type: "text",
        },
        {
            name: "publicationType",
            title: "Publication Type",
            type: "string",
            options: [
                { value: "conference", title: "Conference"},
                { value: "journal", title: "Journal"},
                { value: "thesis", title: "Bachelor thesis"},
            ]
        },
        {
            name: "link",
            type: "url",
        },
        {
            name: "tags",
            type: "array",
            of: [
                {
                    type: "string",
                },
            ],
            options: {
                layout: "tags",
            }
        }
    ],
};