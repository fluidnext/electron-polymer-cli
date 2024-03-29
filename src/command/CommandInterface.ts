/**
 *
 */
import {ProcessAwareInterface} from "../process";

export interface CommandInterface extends ProcessAwareInterface {

    /**
     * @type string
     */
    name: string;
    /**
     * @type string
     */
    option: string;
    /**
     * @type string
     */
    description: string;

    /**
     * @type string
     */
    alias: string;

    /**
     * @param args
     */
    action(...args: any[]);
}
