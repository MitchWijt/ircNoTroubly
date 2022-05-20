import { get, set, remove } from "../src/adapter/config"
import assert from "assert"

describe('config storage', function () {
    beforeAll(() => {
        set("foo", "bar")
    })
    it('should set a new key => value', () => {
        set("test", "tester")
        const value = get("test")

        assert.equal(value, "tester")
    })

    it('should get a key => value', () => {
        const value = get("foo")
        assert.equal(value, "bar")
    })

    it('should remove a key => value', () => {
        remove("foo")
        const value = get("foo")
        assert.equal(value, undefined)
    })
});