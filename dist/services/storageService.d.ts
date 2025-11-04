/**
 * Simplified Storage Service for Date Range Picker
 * Uses IndexedDB to store saved date ranges
 */
declare class StorageService {
    private db;
    private initialized;
    /**
     * Initialize the database
     */
    init(): Promise<void>;
    /**
     * Ensure database is initialized
     */
    private ensureInit;
    /**
     * Save data to IndexedDB
     */
    saveData<T = unknown>(key: string, data: T): Promise<void>;
    /**
     * Get data from IndexedDB
     */
    getData<T = unknown>(key: string): Promise<T | null>;
    /**
     * Delete data from IndexedDB
     */
    deleteData(key: string): Promise<void>;
    /**
     * Clear all data
     */
    clearAll(): Promise<void>;
}
export declare const storageService: StorageService;
export {};
//# sourceMappingURL=storageService.d.ts.map