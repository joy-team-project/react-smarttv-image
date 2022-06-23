export declare class ImageStore {
    private static _instance;
    private cacheImages;
    static getInstance(): ImageStore;
    static clear(): void;
    addNode({ data, url }: {
        data: string;
        url: string;
    }): void;
    removeNode(url: string): void;
    getImage(key: string): string;
}
//# sourceMappingURL=image.store.d.ts.map