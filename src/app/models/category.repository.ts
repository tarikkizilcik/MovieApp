import { Category } from "./category";

export class CategoryRepository {
    private categories: Category[] = []

    constructor() {
        this.categories = [
            { id: 1, name: "Action" },
            { id: 2, name: "Comedy" },
            { id: 3, name: "Drama" },
            { id: 4, name: "Fantasy" },
            { id: 5, name: "Horror" },
            { id: 6, name: "Mystery" },
            { id: 7, name: "Romance" }
        ]
    }

    getCategories(): Category[] {
        return this.categories;
    }
}