import { EventEmitter } from 'eventemitter3';
export default class WorkerManager extends EventEmitter {
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
//# sourceMappingURL=worker.manager.d.ts.map