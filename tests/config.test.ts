import { get, set, remove, clear } from "../src/adapter/config"
import assert from "assert"

describe('config storage', function () {
    beforeAll(() => {
        set("foo", "bar")
    })
    it('should set a new key => value', () => {
        set("test", "tester")
        const value = get("test")

        assert.equal(value, "tester")
        clear()
    })

    it('should get a key => value', () => {
        set("foo", "bar")
        const value = get("foo")
        assert.equal(value, "bar")
        clear()
    })

    it('should remove a key => value', () => {
        set("foo", "bar")
        remove("foo")
        const value = get("foo")
        assert.equal(value, undefined)
    })

    it('should clear all keys', () => {
        clear()
        const fooValue = get("foo")
        const testValue = get("test")

        assert.equal(testValue, undefined)
        assert.equal(fooValue, undefined)
    })
});