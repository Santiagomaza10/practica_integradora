import { dirname } from "path";
import { fileURLToPath } from "url";

import { hashSync, compareSync, genSaltSync } from "bcrypt";

export const __dirname = dirname(fileURLToPath(import.meta.url));

/**
 * Metodo que recibe password sin hashear y retornna password hasheada
 * @param {*} password string
 * @returns password hasheada -> string
 * @example 
 * createHash('1234')
 */
export const createHash = (password) => hashSync(password, genSaltSync(10));

/**
 * Metodo que compara password hasheada con password de login
 * @param {*} user 
 * @param {*} password string
 * @returns boolean
 */
export const isValidPassword = (password, user) => compareSync(password, user.password);