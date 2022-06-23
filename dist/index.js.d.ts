import { EventEmitter } from 'eventemitter3';

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

export declare const WorkerEvent: {
    preLoadImage: string;
    loadImage: string;
    loadImageSuccess: string;
    loadImageError: string;
};

export declare class WorkerManager extends EventEmitter {
    private static _instance;
    private _workerImage_;
    private cbImg;
    static getInstance(): WorkerManager;
    static clear(): void;
    constructor();
    private _init;
    getObjectURL(): string;
    private addEventListenerWorker;
    loadImage(url: string): void;
    preloadImages(urls: string[]): void;
    private destroy;
}

export { }
