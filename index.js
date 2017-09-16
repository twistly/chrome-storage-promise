module.exports = {
    sync: {
        get: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.sync.get(keys, (items) => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
        },
        set: items => {
            return new Promise((resolve, reject) => {
                chrome.storage.sync.set(items, () => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        },
        getBytesInUse: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.sync.getBytesInUse(keys, (items) => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
        },
        remove: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.sync.remove(keys, () => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        },
        clear: () => {
            return new Promise((resolve, reject) => {
                chrome.storage.sync.clear(() => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        }
    },
    local: {
        get: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.local.get(keys, (items) => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
        },
        set: items => {
            return new Promise((resolve, reject) => {
                chrome.storage.local.set(items, () => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        },
        getBytesInUse: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.local.getBytesInUse(keys, (items) => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
        },
        remove: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.local.remove(keys, () => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        clear: () => {
            return new Promise((resolve, reject) => {
                chrome.storage.local.clear(() => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        }
    },
    managed: {
        get: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.managed.get(keys, (items) => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
        },
        set: items => {
            return new Promise((resolve, reject) => {
                chrome.storage.managed.set(items, () => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
            return promise;
        },
        getBytesInUse: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.managed.getBytesInUse(keys, (items) => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(items);
                    }
                });
            });
        },
        remove: keys => {
            return new Promise((resolve, reject) => {
                chrome.storage.managed.remove(keys, () => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        },
        clear: () => {
            return new Promise((resolve, reject) => {
                chrome.storage.managed.clear(() => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve();
                    }
                });
            });
        }
    },
    onChanged: {
        addListener: () => {
            return new Promise((resolve, reject) => {
                chrome.storage.onChanged.addListener((changes, areaName) => {
                    const err = chrome.runtime.lastError;
                    if (err) {
                        reject(err);
                    } else {
                        resolve(changes, areaName);
                    }
                });
            });
        }
    }
}