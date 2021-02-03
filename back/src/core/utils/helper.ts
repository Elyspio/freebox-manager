import {exec as _exec, ExecException} from "child_process";
import {$log} from '@tsed/common';

export namespace Helper {

    export type ExecReturn = {
        stdout: string,
        stderr: string,
        error: ExecException | null,
        code: number | null,
        signal: NodeJS.Signals | null
    }

    export const exec = (command: string): Promise<ExecReturn> => {
        return new Promise(resolve => {
            let c, s;
            _exec(command, (error, stdout, stderr) => {
                resolve({
                    stdout,
                    stderr,
                    error,
                    code: c,
                    signal: s
                })
            }).on("exit", (code, signal) => {
                c = code;
                s = signal;

            })
        })
    }

    export const isDev = () => process.env.NODE_ENV !== "production";
}
