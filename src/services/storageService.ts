/**
 * Simplified Storage Service for Date Range Picker
 * Uses IndexedDB to store saved date ranges
 */

const DB_NAME = "DateRangePickerDB";
const DB_VERSION = 1;
const STORE_NAME = "savedDateRanges";

class StorageService {
  private db: IDBDatabase | null = null;
  private initialized = false;

  /**
   * Initialize the database
   */
  async init(): Promise<void> {
    if (this.initialized && this.db) {
      return;
    }

    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onerror = () => reject(request.error);

      request.onsuccess = () => {
        this.db = request.result;
        this.initialized = true;
        resolve();
      };

      request.onupgradeneeded = (event) => {
        const db = (event.target as IDBOpenDBRequest).result;

        // Create object store if it doesn't exist
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          const store = db.createObjectStore(STORE_NAME, {
            keyPath: "id",
          });
          store.createIndex("timestamp", "createdAt", { unique: false });
        }
      };
    });
  }

  /**
   * Ensure database is initialized
   */
  private async ensureInit(): Promise<void> {
    if (!this.db || !this.initialized) {
      await this.init();
    }
  }

  /**
   * Save data to IndexedDB
   */
  async saveData<T = unknown>(key: string, data: T): Promise<void> {
    await this.ensureInit();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);

      const request = store.put({
        id: key,
        data,
        timestamp: Date.now(),
      });

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  /**
   * Get data from IndexedDB
   */
  async getData<T = unknown>(key: string): Promise<T | null> {
    await this.ensureInit();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], "readonly");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => {
        const result = request.result;
        if (result && result.data) {
          resolve(result.data as T);
        } else {
          resolve(null);
        }
      };
    });
  }

  /**
   * Delete data from IndexedDB
   */
  async deleteData(key: string): Promise<void> {
    await this.ensureInit();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.delete(key);

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }

  /**
   * Clear all data
   */
  async clearAll(): Promise<void> {
    await this.ensureInit();

    return new Promise((resolve, reject) => {
      const transaction = this.db!.transaction([STORE_NAME], "readwrite");
      const store = transaction.objectStore(STORE_NAME);
      const request = store.clear();

      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  }
}

// Export singleton instance
export const storageService = new StorageService();
