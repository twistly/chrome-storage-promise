const {unrequireAll} = require('./spec-helper');
const chromeStoragePromise = require('../index');

describe('chrome-storage-promise', () => {
    context('when normal', () => {
        before(() => {
            require('./chrome-storage-mock');
        });

        after(() => {
            unrequireAll();
        });

        describe('sync', () => {
            describe('.get', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.sync.get('foo').then((items) => {
                        expect(items).to.eql({foo: 'bar'});
                        done();
                    });
                });

                it('calls chrome.storage.sync.get with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.sync, 'get');
                    chromeStoragePromise.sync.get('foo').then(callback);
                    assert(chrome.storage.sync.get.calledWithMatch('foo'));
                });
            });

            describe('.set', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.sync.set({foo: 'bar'}).then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.sync.set with {foo: "bar"}', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.sync, 'set');
                    chromeStoragePromise.sync.set({foo: 'bar'}).then(callback);
                    assert(chrome.storage.sync.set.calledWithMatch({foo: 'bar'}));
                });
            });

            describe('.getBytesInUse', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.sync.getBytesInUse('foo').then((bytesInUse) => {
                        expect(bytesInUse).to.equal(42);
                        done();
                    });
                });

                it('calls chrome.storage.sync.getBytesInUse with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.sync, 'getBytesInUse');
                    chromeStoragePromise.sync.getBytesInUse('foo').then(callback);
                    assert(chrome.storage.sync.getBytesInUse.calledWithMatch('foo'));
                });
            });

            describe('.remove', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.sync.remove('foo').then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.sync.remove with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.sync, 'remove');
                    chromeStoragePromise.sync.remove('foo').then(callback);
                    assert(chrome.storage.sync.remove.calledWithMatch('foo'));
                });
            });

            describe('.clear', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.sync.clear().then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.sync.clear', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.sync, 'clear');
                    chromeStoragePromise.sync.clear().then(callback);
                    assert(chrome.storage.sync.clear.calledWithMatch());
                });
            });
        });

        describe('local', () => {
            describe('.get', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.local.get('foo').then((items) => {
                        expect(items).to.eql({foo: 'bar'});
                        done();
                    });
                });

                it('calls chrome.storage.local.get with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.local, 'get');
                    chromeStoragePromise.local.get('foo').then(callback);
                    assert(chrome.storage.local.get.calledWithMatch('foo'));
                });
            });

            describe('.set', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.local.set({foo: 'bar'}).then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.local.set with {foo: "bar"}', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.local, 'set');
                    chromeStoragePromise.local.set({foo: 'bar'}).then(callback);
                    assert(chrome.storage.local.set.calledWithMatch({foo: 'bar'}));
                });
            });

            describe('.getBytesInUse', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.local.getBytesInUse('foo').then((bytesInUse) => {
                        expect(bytesInUse).to.equal(42);
                        done();
                    });
                });

                it('calls chrome.storage.local.getBytesInUse with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.local, 'getBytesInUse');
                    chromeStoragePromise.local.getBytesInUse('foo').then(callback);
                    assert(chrome.storage.local.getBytesInUse.calledWithMatch('foo'));
                });
            });

            describe('.remove', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.local.remove('foo').then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.local.remove with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.local, 'remove');
                    chromeStoragePromise.local.remove('foo').then(callback);
                    assert(chrome.storage.local.remove.calledWithMatch('foo'));
                });
            });

            describe('.clear', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.local.clear().then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.local.clear', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.local, 'clear');
                    chromeStoragePromise.local.clear().then(callback);
                    assert(chrome.storage.local.clear.calledWithMatch());
                });
            });
        });

        describe('managed', () => {
            describe('.get', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.managed.get('foo').then((items) => {
                        expect(items).to.eql({foo: 'bar'});
                        done();
                    });
                });

                it('calls chrome.storage.managed.get with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.managed, 'get');
                    chromeStoragePromise.managed.get('foo').then(callback);
                    assert(chrome.storage.managed.get.calledWithMatch('foo'));
                });
            });

            describe('.set', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.managed.set({foo: 'bar'}).then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.managed.set with {foo: "bar"}', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.managed, 'set');
                    chromeStoragePromise.managed.set({foo: 'bar'}).then(callback);
                    assert(chrome.storage.managed.set.calledWithMatch({foo: 'bar'}));
                });
            });

            describe('.getBytesInUse', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.managed.getBytesInUse('foo').then((bytesInUse) => {
                        expect(bytesInUse).to.equal(42);
                        done();
                    });
                });

                it('calls chrome.storage.managed.getBytesInUse with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.managed, 'getBytesInUse');
                    chromeStoragePromise.managed.getBytesInUse('foo').then(callback);
                    assert(chrome.storage.managed.getBytesInUse.calledWithMatch('foo'));
                });
            });

            describe('.remove', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.managed.remove('foo').then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.managed.remove with "foo"', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.managed, 'remove');
                    chromeStoragePromise.managed.remove('foo').then(callback);
                    assert(chrome.storage.managed.remove.calledWithMatch('foo'));
                });
            });

            describe('.clear', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.managed.clear().then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.managed.clear', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.managed, 'clear');
                    chromeStoragePromise.managed.clear().then(callback);
                    assert(chrome.storage.managed.clear.calledWithMatch());
                });
            });
        });

        describe('onChanged', () => {
            describe('.addListener', () => {
                it('is thenable', (done) => {
                    chromeStoragePromise.onChanged.addListener().then(() => {
                        done();
                    });
                });

                it('calls chrome.storage.onChanged.addListener', () => {
                    let callback = sinon.spy();
                    sinon.stub(chrome.storage.onChanged, 'addListener');
                    chromeStoragePromise.onChanged.addListener().then(callback);
                    assert(chrome.storage.onChanged.addListener.calledWithMatch());
                });
            });
        });
    });

    context('when error', () => {
        before(() => {
            require('./chrome-storage-mock-error');
            require('../dist/chrome-storage-promise');
        });

        after(() => {
            unrequireAll();
        });

        describe('sync', () => {
            describe('.get', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.sync.get('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.set', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.sync.set({foo: 'bar'}).then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.getBytesInUse', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.sync.getBytesInUse('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.remove', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.sync.remove('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.clear', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.sync.clear().then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });
        });

        describe('local', () => {
            describe('.get', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.local.get('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.set', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.local.set({foo: 'bar'}).then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.getBytesInUse', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.local.getBytesInUse('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.remove', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.local.remove('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.clear', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.local.clear().then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });
        });

        describe('managed', () => {
            describe('.get', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.managed.get('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.set', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.managed.set({foo: 'bar'}).then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.getBytesInUse', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.managed.getBytesInUse('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.remove', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.managed.remove('foo').then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });

            describe('.clear', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.managed.clear().then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });
        });

        describe('onChanged', () => {
            describe('.addListener', () => {
                it('returns error message', (done) => {
                    chromeStoragePromise.onChanged.addListener().then(() => {
                        done('test failed');
                    }, (error) => {
                        expect(error).to.equal('42');
                        done();
                    });
                });
            });
        });
    });
});
