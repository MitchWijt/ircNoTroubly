import Conf from "conf";

const conf = new Conf()

export function set(key: string, value: any) {
    conf.set(key, value)
}

export function get(key: string): any {
    return conf.get(key)
}

export function remove(key: string) {
    conf.delete(key)
}