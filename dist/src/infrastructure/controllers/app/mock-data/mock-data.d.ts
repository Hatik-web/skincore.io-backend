export declare class MockData {
    private readonly technologyCategories;
    private readonly technologies;
    private readonly articles;
    constructor();
    getTechnologyCategories(): {
        name: string;
    }[];
    getTechnologies(): {
        meaning: string;
        technology: string;
        icon: string;
        experience: string;
        technologyId: number;
    }[];
    getArticles(): {
        title: string;
        description: string;
        text: string;
        timeReading: string;
    }[];
}
