
export default class MemoryStorage {

    static get(key: string) {
        var data = localStorage.getItem(key);
        return data;
    }

    static set(key: string, value: any) {
        localStorage.setItem(key, value)
    }
}